import { NextResponse } from 'next/server'

const DELETION_TYPE_LABELS: Record<string, string> = {
  all: 'All data',
  facebook: 'Facebook/Meta data only',
  account: 'Account information only',
  communications: 'Communications only',
  other: 'Specific data (see additional info)',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, companyName, facebookAccountId, deletionType, additionalInfo, confirmUnderstand } = body

    // Validate required fields
    if (!fullName || !email || !deletionType || !confirmUnderstand) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Generate reference ID
    const referenceId = `DDR-${Date.now().toString(36).toUpperCase()}`

    // Log the deletion request (always do this so we don't lose requests)
    console.log('🗑️ New data deletion request:', {
      referenceId,
      fullName,
      email,
      companyName: companyName || 'Not provided',
      facebookAccountId: facebookAccountId || 'Not provided',
      deletionType: DELETION_TYPE_LABELS[deletionType] || deletionType,
      additionalInfo: additionalInfo || 'None',
      timestamp: new Date().toISOString(),
    })

    // Send email notification using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY is not configured - request logged but email not sent')
      return NextResponse.json({ 
        success: true,
        referenceId,
        message: 'Data deletion request submitted successfully' 
      })
    }

    // Format the email content
    const emailContent = `
Data Deletion Request - ${referenceId}

A new data deletion request has been submitted.

Reference ID: ${referenceId}
Full Name: ${fullName}
Email: ${email}
Company: ${companyName || 'Not provided'}
Facebook Account ID: ${facebookAccountId || 'Not provided'}
Deletion Type: ${DELETION_TYPE_LABELS[deletionType] || deletionType}

Additional Information:
${additionalInfo || 'None provided'}

---
Action Required:
1. Verify the requester's identity
2. Locate all data associated with this user
3. Process deletion within 30 days
4. Send confirmation to the user

This request was submitted via the data deletion form on marketably.ai.
    `.trim()

    try {
      // Send notification to privacy team
      const adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Privacy Requests <privacy@marketably.ai>',
          to: ['david@rawlings.us'],
          reply_to: `${fullName} <${email}>`,
          subject: `🗑️ Data Deletion Request: ${fullName} [${referenceId}]`,
          text: emailContent,
          html: `
            <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2d3748; margin-bottom: 8px;">Data Deletion Request</h2>
              <p style="color: #718096; margin-bottom: 24px; font-size: 14px;">Reference ID: <strong>${referenceId}</strong></p>
              
              <div style="background: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600; width: 160px;">Full Name:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3182ce;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Company:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${companyName || '<em>Not provided</em>'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">FB Account ID:</td>
                    <td style="padding: 8px 0; color: #2d3748; font-family: monospace;">${facebookAccountId || '<em>Not provided</em>'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Deletion Type:</td>
                    <td style="padding: 8px 0; color: #2d3748; font-weight: 700;">${DELETION_TYPE_LABELS[deletionType] || deletionType}</td>
                  </tr>
                </table>
              </div>

              ${additionalInfo ? `
              <div style="background: #fff5f5; border-radius: 8px; padding: 16px; margin-bottom: 16px; border-left: 4px solid #fc8181;">
                <p style="color: #718096; font-weight: 600; margin-bottom: 8px;">Additional Information:</p>
                <p style="color: #2d3748; white-space: pre-wrap;">${additionalInfo}</p>
              </div>
              ` : ''}
              
              <div style="background: #fffbeb; border-radius: 8px; padding: 16px; margin-top: 24px; border-left: 4px solid #f59e0b;">
                <p style="color: #92400e; font-weight: 600; margin-bottom: 8px;">⚠️ Action Required</p>
                <ol style="color: #92400e; padding-left: 20px; margin: 0;">
                  <li>Verify the requester's identity</li>
                  <li>Locate all data associated with this user</li>
                  <li>Process deletion within 30 days</li>
                  <li>Send confirmation to the user</li>
                </ol>
              </div>
              
              <p style="color: #718096; font-size: 12px; margin-top: 24px;">
                This request was submitted via the data deletion form on marketably.ai at ${new Date().toISOString()}
              </p>
            </div>
          `,
        }),
      })

      if (!adminResponse.ok) {
        const errorText = await adminResponse.text()
        console.error('❌ Resend API error (admin notification):', adminResponse.status, errorText)
      } else {
        console.log('✅ Admin notification sent successfully')
      }

      // Send confirmation to the user
      const userResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Marketably.ai <privacy@marketably.ai>',
          to: [email],
          subject: `Data Deletion Request Received [${referenceId}]`,
          text: `
Hi ${fullName},

We have received your data deletion request.

Reference ID: ${referenceId}
Deletion Type: ${DELETION_TYPE_LABELS[deletionType] || deletionType}

What happens next:
1. We will verify your identity within 5 business days
2. You may receive a verification email from us
3. Once verified, your data will be deleted within 30 days
4. You will receive confirmation when deletion is complete

If you have any questions, please reply to this email or contact us at privacy@marketably.ai.

Thank you,
The Marketably.ai Team
          `.trim(),
          html: `
            <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2d3748; margin-bottom: 24px;">Data Deletion Request Received</h2>
              
              <p style="color: #4a5568; margin-bottom: 16px;">Hi ${fullName},</p>
              
              <p style="color: #4a5568; margin-bottom: 24px;">We have received your data deletion request.</p>
              
              <div style="background: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <p style="color: #718096; margin: 0 0 8px 0;"><strong>Reference ID:</strong> <span style="font-family: monospace; color: #2d3748;">${referenceId}</span></p>
                <p style="color: #718096; margin: 0;"><strong>Deletion Type:</strong> <span style="color: #2d3748;">${DELETION_TYPE_LABELS[deletionType] || deletionType}</span></p>
              </div>
              
              <h3 style="color: #2d3748; margin-bottom: 16px;">What happens next:</h3>
              
              <ol style="color: #4a5568; padding-left: 20px;">
                <li style="margin-bottom: 8px;">We will verify your identity within 5 business days</li>
                <li style="margin-bottom: 8px;">You may receive a verification email from us</li>
                <li style="margin-bottom: 8px;">Once verified, your data will be deleted within 30 days</li>
                <li style="margin-bottom: 8px;">You will receive confirmation when deletion is complete</li>
              </ol>
              
              <p style="color: #4a5568; margin-top: 24px;">
                If you have any questions, please reply to this email or contact us at 
                <a href="mailto:privacy@marketably.ai" style="color: #3182ce;">privacy@marketably.ai</a>.
              </p>
              
              <p style="color: #718096; margin-top: 32px; font-size: 14px;">
                Thank you,<br>
                The Marketably.ai Team
              </p>
            </div>
          `,
        }),
      })

      if (!userResponse.ok) {
        const errorText = await userResponse.text()
        console.error('❌ Resend API error (user confirmation):', userResponse.status, errorText)
      } else {
        console.log('✅ User confirmation email sent successfully')
      }

    } catch (emailError) {
      // Log but don't fail - the request is already logged above
      console.error('❌ Failed to send email notifications:', emailError)
    }

    return NextResponse.json({ 
      success: true,
      referenceId,
      message: 'Data deletion request submitted successfully' 
    })
  } catch (error) {
    console.error('❌ Error processing data deletion request:', error)
    return NextResponse.json(
      { error: 'Failed to submit request' },
      { status: 500 }
    )
  }
}
