import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getPayloadClient } from '@/lib/payload'

// Construct lazily so a missing API key doesn't throw at module load
// (which would make the route return an HTML error page instead of JSON).
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

/* Map the dark funnel form values onto Payload's existing Inquiries schema. */
const NEED_TO_PROJECT_TYPE: Record<string, string> = {
  website: 'new-build',
  seo: 'other',
  paid: 'other',
  crm: 'platform',
  full: 'integration',
}

const TIMELINE_TO_PAYLOAD: Record<string, string> = {
  now: 'asap',
  '30': '1-3-months',
  '60-90': '3-6-months',
  exploring: 'flexible',
}

const REVENUE_LABELS: Record<string, string> = {
  'under-1M': 'Under $1M',
  '1-3M': '$1M – $3M',
  '3-10M': '$3M – $10M',
  '10M+': '$10M+',
}

const NEED_LABELS: Record<string, string> = {
  website: 'High-converting website',
  seo: 'SEO and organic growth',
  paid: 'Paid acquisition',
  crm: 'CRM and lead infrastructure',
  full: 'Full-stack growth partner',
}

const TIMELINE_LABELS: Record<string, string> = {
  now: "Yesterday — let's go",
  '30': 'Within 30 days',
  '60-90': 'In the next 60–90 days',
  exploring: 'Just exploring',
}

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
    const { name, email, company, revenue, need, timeline, notes } = body as {
      name?: string
      email?: string
      company?: string
      revenue?: string
      need?: string
      timeline?: string
      notes?: string
    }

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const revenueLabel = (revenue && REVENUE_LABELS[revenue]) || revenue || 'Not specified'
    const needLabel = (need && NEED_LABELS[need]) || need || 'Not specified'
    const timelineLabel =
      (timeline && TIMELINE_LABELS[timeline]) || timeline || 'Not specified'

    /* 1. Save to Payload (best-effort — never blocks the email) */
    let payloadId: string | number | null = null
    try {
      const payload = await getPayloadClient()
      const inquiry = await payload.create({
        collection: 'inquiries',
        data: {
          name,
          email,
          company,
          projectType: (need && NEED_TO_PROJECT_TYPE[need]) || 'other',
          timeline: (timeline && TIMELINE_TO_PAYLOAD[timeline]) || 'flexible',
          currentPainPoints: notes || '',
          projectVision: `Annual revenue: ${revenueLabel}\nPrimary need: ${needLabel}`,
          status: 'new',
        },
      })
      payloadId = inquiry.id ?? null
    } catch (payloadError) {
      console.error('Payload save failed (continuing with email):', payloadError)
    }

    /* 2. Send Resend email */
    if (!resend) {
      console.warn('RESEND_API_KEY not set — skipping email notification.')
    } else {
      const fromEmail = process.env.LEAD_FROM_EMAIL || 'At The Meridian <hello@atthemeridian.com>'
      const toEmail = process.env.LEAD_TO_EMAIL || 'brookelkennison@gmail.com'

      const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:32px 16px; background:#f7f5f1; font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif; color:#1a1a1a;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:8px; padding:40px 36px; border:1px solid #e8e4dc;">
    <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#0369a1; font-weight:600; margin-bottom:14px;">
      New Discovery Call Request
    </div>
    <h1 style="font-family:Georgia,serif; font-weight:300; font-size:28px; line-height:1.2; margin:0 0 8px; color:#0a0a0b;">
      ${escapeHtml(name)}
    </h1>
    <p style="margin:0 0 28px; color:#666; font-size:15px;">
      ${escapeHtml(company)}
    </p>

    <table style="width:100%; border-collapse:collapse; font-size:14px;">
      <tr>
        <td style="padding:14px 0; border-bottom:1px solid #eee; color:#888; width:140px; vertical-align:top;">Email</td>
        <td style="padding:14px 0; border-bottom:1px solid #eee;">
          <a href="mailto:${escapeHtml(email)}" style="color:#0369a1; text-decoration:none;">${escapeHtml(email)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 0; border-bottom:1px solid #eee; color:#888; vertical-align:top;">Annual Revenue</td>
        <td style="padding:14px 0; border-bottom:1px solid #eee;"><strong>${escapeHtml(revenueLabel)}</strong></td>
      </tr>
      <tr>
        <td style="padding:14px 0; border-bottom:1px solid #eee; color:#888; vertical-align:top;">Primary Need</td>
        <td style="padding:14px 0; border-bottom:1px solid #eee;">${escapeHtml(needLabel)}</td>
      </tr>
      <tr>
        <td style="padding:14px 0; border-bottom:1px solid #eee; color:#888; vertical-align:top;">Timeline</td>
        <td style="padding:14px 0; border-bottom:1px solid #eee;">${escapeHtml(timelineLabel)}</td>
      </tr>
      ${
        notes
          ? `<tr>
              <td style="padding:14px 0; color:#888; vertical-align:top;">Notes</td>
              <td style="padding:14px 0; white-space:pre-wrap;">${escapeHtml(notes)}</td>
             </tr>`
          : ''
      }
    </table>

    <div style="margin-top:32px; padding:16px; background:#f7f5f1; border-radius:6px; font-size:12px; color:#888;">
      ${
        payloadId
          ? `Saved to Payload as inquiry <strong>#${escapeHtml(String(payloadId))}</strong>.`
          : 'Note: Payload save failed for this lead — only this email was generated.'
      }
    </div>
  </div>
</body>
</html>
      `

      const { error: resendError } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `New discovery call: ${name} — ${company}`,
        html,
      })

      if (resendError) {
        console.error('Resend error:', resendError)
        // We don't return 500 if Payload succeeded — the lead is still captured.
        if (!payloadId) {
          return NextResponse.json(
            { success: false, error: 'Email failed to send' },
            { status: 500 },
          )
        }
      }
    }

    return NextResponse.json({ success: true, id: payloadId }, { status: 201 })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 },
    )
  }
}
