import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Construct lazily so a missing API key doesn't throw at module load
// (which would make the route return an HTML error page instead of JSON).
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

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

// `need` can be a single value or a comma-joined list (multi-select). Map each.
function labelNeeds(need?: string): string {
  if (!need) return 'Not specified'
  return need
    .split(',')
    .map((n) => n.trim())
    .filter(Boolean)
    .map((n) => NEED_LABELS[n] || n)
    .join(', ')
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
    const needLabel = labelNeeds(need)
    const timelineLabel = (timeline && TIMELINE_LABELS[timeline]) || timeline || 'Not specified'

    if (!resend) {
      console.error('RESEND_API_KEY not set — cannot process inquiry.')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 500 },
      )
    }

    const fromEmail = process.env.LEAD_FROM_EMAIL || 'At The Meridian <onboarding@resend.dev>'
    const toEmail = process.env.LEAD_TO_EMAIL || 'brookelkennison@gmail.com'

    /* 1. Notify At The Meridian of the new lead */
    const notifyHtml = `
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
  </div>
</body>
</html>
    `

    const { error: notifyError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New discovery call: ${name} — ${company}`,
      html: notifyHtml,
    })

    if (notifyError) {
      console.error('Resend notification error:', notifyError)
      return NextResponse.json(
        { success: false, error: 'Failed to submit inquiry' },
        { status: 500 },
      )
    }

    /* 2. Send a confirmation to the person who submitted (best-effort) */
    const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:32px 16px; background:#0a0c14; font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif; color:#f5f7fb;">
  <div style="max-width:520px; margin:0 auto; background:#11141d; border-radius:12px; padding:40px 36px; border:1px solid rgba(190,210,240,0.12);">
    <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#7dd3fc; font-weight:600; margin-bottom:18px;">
      At The Meridian
    </div>
    <h1 style="font-weight:600; font-size:26px; line-height:1.25; margin:0 0 16px; color:#f5f7fb;">
      Thanks, ${escapeHtml(name.split(' ')[0])} — we've got your request.
    </h1>
    <p style="margin:0 0 16px; color:rgba(245,247,251,0.75); font-size:15px; line-height:1.6;">
      I'll personally review what you sent over and get back to you within one business day with
      next steps and a time to talk.
    </p>
    <p style="margin:0 0 24px; color:rgba(245,247,251,0.75); font-size:15px; line-height:1.6;">
      In the meantime, if anything comes to mind, just reply to this email — it comes straight to me.
    </p>
    <p style="margin:0; color:#f5f7fb; font-size:15px; line-height:1.6;">
      — Brooke<br />
      <span style="color:rgba(245,247,251,0.5); font-size:13px;">Founder, At The Meridian</span>
    </p>
  </div>
  <p style="max-width:520px; margin:18px auto 0; text-align:center; color:rgba(245,247,251,0.35); font-size:11px; letter-spacing:0.04em;">
    Websites &amp; systems that convert search to sale.
  </p>
</body>
</html>
    `

    try {
      const { error: confirmError } = await resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: toEmail,
        subject: 'Thanks for reaching out to At The Meridian',
        html: confirmHtml,
      })
      if (confirmError) {
        console.error('Resend confirmation error (lead still captured):', confirmError)
      }
    } catch (confirmErr) {
      console.error('Confirmation email failed (lead still captured):', confirmErr)
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 },
    )
  }
}
