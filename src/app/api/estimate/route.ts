import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { Resend } from 'resend'
import { getPayloadClient } from '@/lib/payload'
import {
  TIERS,
  recommendTier,
  labelFor,
  CURRENT_REVENUE_OPTIONS,
  TARGET_REVENUE_OPTIONS,
  MONTHLY_INVESTMENT_OPTIONS,
} from '@/lib/estimateTiers'

export const runtime = 'nodejs'

// Construct lazily so a missing API key doesn't throw at module load
// (which would make the route return an HTML error page instead of JSON).
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return map[c] || c
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, currentRevenue, targetRevenue, monthlyInvestment } = body as {
      name?: string
      email?: string
      currentRevenue?: string
      targetRevenue?: string
      monthlyInvestment?: string
    }

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 },
      )
    }

    const tierId = recommendTier({ currentRevenue, targetRevenue, monthlyInvestment })
    const tier = TIERS[tierId]
    const token = crypto.randomBytes(12).toString('hex')

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
    const estimateUrl = `${siteUrl}/estimate/${token}`

    const currentRevenueLabel = labelFor(CURRENT_REVENUE_OPTIONS, currentRevenue)
    const targetRevenueLabel = labelFor(TARGET_REVENUE_OPTIONS, targetRevenue)
    const investmentLabel = labelFor(MONTHLY_INVESTMENT_OPTIONS, monthlyInvestment)

    /* 1. Save to Payload (best-effort — never blocks the email) */
    let payloadId: string | number | null = null
    try {
      const payload = await getPayloadClient()
      const created = await payload.create({
        collection: 'estimates',
        data: {
          name,
          email,
          currentRevenue: currentRevenue as never,
          targetRevenue: targetRevenue as never,
          monthlyInvestment: monthlyInvestment as never,
          recommendedTier: tierId as never,
          token,
          status: 'new',
        },
      })
      payloadId = created.id ?? null
    } catch (payloadError) {
      console.error('Payload save failed (continuing with email):', payloadError)
    }

    /* 2. Emails via Resend */
    if (!resend) {
      console.warn('RESEND_API_KEY not set — skipping estimate emails.')
    } else {
      const fromEmail =
        process.env.LEAD_FROM_EMAIL || 'At The Meridian <hello@atthemeridian.com>'
      const notifyEmail = process.env.LEAD_TO_EMAIL || 'brookelkennison@gmail.com'
      const firstName = name.split(' ')[0]

      // 2a. To the prospect — their personalized walkthrough link
      const prospectHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:32px 16px; background:#0a0f14; font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif; color:#e8eef2;">
  <div style="max-width:560px; margin:0 auto; background:#10171e; border-radius:12px; padding:40px 36px; border:1px solid #1d2730;">
    <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#7dd3fc; font-weight:600; margin-bottom:14px;">
      Your Free Estimate
    </div>
    <h1 style="font-family:Georgia,serif; font-weight:300; font-size:26px; line-height:1.25; margin:0 0 16px; color:#ffffff;">
      ${escapeHtml(firstName)}, here's the tier built for where you're headed.
    </h1>
    <p style="margin:0 0 8px; color:#aab7c2; font-size:15px; line-height:1.6;">
      Based on your answers, the best fit is
      <strong style="color:#ffffff;">${escapeHtml(tier.tierLabel)} — ${escapeHtml(tier.name)}</strong>
      (${escapeHtml(tier.price)}${escapeHtml(tier.cadence)}).
    </p>
    <p style="margin:0 0 28px; color:#aab7c2; font-size:15px; line-height:1.6;">
      I recorded a short walkthrough of exactly what that looks like for your business. Watch it here:
    </p>
    <a href="${escapeHtml(estimateUrl)}"
       style="display:inline-block; background:#7dd3fc; color:#0a0f14; text-decoration:none; font-weight:600; font-size:14px; padding:14px 28px; border-radius:999px;">
      Watch your walkthrough →
    </a>
    <p style="margin:28px 0 0; color:#6b7884; font-size:12px; line-height:1.6; word-break:break-all;">
      Or paste this link into your browser:<br />
      <a href="${escapeHtml(estimateUrl)}" style="color:#7dd3fc;">${escapeHtml(estimateUrl)}</a>
    </p>
  </div>
  <p style="max-width:560px; margin:18px auto 0; color:#5a6671; font-size:11px; text-align:center;">
    At The Meridian · Built to scale. Engineered to last.
  </p>
</body>
</html>
      `

      const { error: prospectError } = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `${firstName}, your free estimate from At The Meridian`,
        html: prospectHtml,
      })
      if (prospectError) console.error('Resend (prospect) error:', prospectError)

      // 2b. To Brooke — internal lead notification
      const notifyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:32px 16px; background:#f7f5f1; font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif; color:#1a1a1a;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:8px; padding:36px; border:1px solid #e8e4dc;">
    <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#0369a1; font-weight:600; margin-bottom:14px;">
      New Free-Estimate Lead
    </div>
    <h1 style="font-family:Georgia,serif; font-weight:300; font-size:26px; margin:0 0 18px; color:#0a0a0b;">
      ${escapeHtml(name)}
    </h1>
    <table style="width:100%; border-collapse:collapse; font-size:14px;">
      <tr><td style="padding:12px 0; border-bottom:1px solid #eee; color:#888; width:170px;">Email</td>
          <td style="padding:12px 0; border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}" style="color:#0369a1; text-decoration:none;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:12px 0; border-bottom:1px solid #eee; color:#888;">Current revenue</td>
          <td style="padding:12px 0; border-bottom:1px solid #eee;">${escapeHtml(currentRevenueLabel)}</td></tr>
      <tr><td style="padding:12px 0; border-bottom:1px solid #eee; color:#888;">Target revenue</td>
          <td style="padding:12px 0; border-bottom:1px solid #eee;">${escapeHtml(targetRevenueLabel)}</td></tr>
      <tr><td style="padding:12px 0; border-bottom:1px solid #eee; color:#888;">Monthly investment</td>
          <td style="padding:12px 0; border-bottom:1px solid #eee;">${escapeHtml(investmentLabel)}</td></tr>
      <tr><td style="padding:12px 0; border-bottom:1px solid #eee; color:#888;">Recommended</td>
          <td style="padding:12px 0; border-bottom:1px solid #eee;"><strong>${escapeHtml(tier.tierLabel)} — ${escapeHtml(tier.name)} (${escapeHtml(tier.price)}${escapeHtml(tier.cadence)})</strong></td></tr>
      <tr><td style="padding:12px 0; color:#888;">Estimate link</td>
          <td style="padding:12px 0;"><a href="${escapeHtml(estimateUrl)}" style="color:#0369a1;">${escapeHtml(estimateUrl)}</a></td></tr>
    </table>
    <div style="margin-top:28px; padding:14px; background:#f7f5f1; border-radius:6px; font-size:12px; color:#888;">
      ${
        payloadId
          ? `Saved to Payload as estimate <strong>#${escapeHtml(String(payloadId))}</strong>.`
          : 'Note: Payload save failed for this lead — only this email was generated.'
      }
    </div>
  </div>
</body>
</html>
      `

      const { error: notifyError } = await resend.emails.send({
        from: fromEmail,
        to: notifyEmail,
        replyTo: email,
        subject: `New estimate lead: ${name} → ${tier.name}`,
        html: notifyHtml,
      })
      if (notifyError) console.error('Resend (notify) error:', notifyError)
    }

    return NextResponse.json(
      { success: true, token, recommendedTier: tierId },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating estimate:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate estimate.' },
      { status: 500 },
    )
  }
}
