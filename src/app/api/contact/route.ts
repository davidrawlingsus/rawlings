import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { websiteUrl, monthlyAdSpend, name, email, phone } = body

    // Validate required fields
    if (!websiteUrl || !monthlyAdSpend || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the lead data (always do this so we don't lose leads)
    console.log('📩 New contact form submission:', {
      name,
      email,
      phone,
      websiteUrl,
      monthlyAdSpend: formatAdSpend(monthlyAdSpend),
      timestamp: new Date().toISOString(),
    })

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY is not configured - lead logged but email not sent')
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully' 
      })
    }

    // Format the email content
    const emailContent = `
New Strategy Call Lead

Name: ${name}
Email: ${email}
Phone: ${phone}
Website: ${websiteUrl}
FB Adspend: ${formatAdSpend(monthlyAdSpend)}

This lead was submitted via the contact form.
    `.trim()

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
        from: 'Strategy Calls <leads@marketably.ai>',
        to: ['david@rawlings.us'],
          reply_to: `${name} <${email}>`,
          subject: `New Strategy Call Lead: ${name}`,
          text: emailContent,
          html: `
            <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2d3748; margin-bottom: 24px;">New Strategy Call Lead</h2>
              
              <div style="background: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600; width: 140px;">Name:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3182ce;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3182ce;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Website:</td>
                    <td style="padding: 8px 0;"><a href="${websiteUrl}" style="color: #3182ce;" target="_blank">${websiteUrl}</a></td>
                  </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-weight: 600;">FB Adspend:</td>
                  <td style="padding: 8px 0; color: #2d3748; font-weight: 700;">${formatAdSpend(monthlyAdSpend)}</td>
                </tr>
                </table>
              </div>
              
              <p style="color: #718096; font-size: 14px; margin-top: 24px;">
                This lead was submitted via the contact form.
              </p>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ Resend API error:', response.status, errorText)
        // Don't fail the request - the lead is already logged
      } else {
        console.log('✅ Email notification sent successfully')
      }
    } catch (emailError) {
      // Log but don't fail - the lead data is already logged above
      console.error('❌ Failed to send email notification:', emailError)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('❌ Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

function formatAdSpend(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value}`
}

