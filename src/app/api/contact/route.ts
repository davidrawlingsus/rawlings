import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { websiteUrl, monthlyTraffic, name, email, phone } = body

    // Validate required fields
    if (!websiteUrl || !monthlyTraffic || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Strategy Call Lead

Name: ${name}
Email: ${email}
Phone: ${phone}
Website: ${websiteUrl}
Monthly Traffic: ${formatTraffic(monthlyTraffic)}

This lead was submitted via the contact form on rawlings.us.
    `.trim()

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      // Still return success to the user, but log the error
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully (email not configured)' 
      })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Strategy Calls <leads@rawlings.us>',
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
                  <td style="padding: 8px 0; color: #718096; font-weight: 600;">Monthly Traffic:</td>
                  <td style="padding: 8px 0; color: #2d3748; font-weight: 700;">${formatTraffic(monthlyTraffic)}</td>
                </tr>
              </table>
            </div>
            
            <p style="color: #718096; font-size: 14px; margin-top: 24px;">
              This lead was submitted via the contact form on rawlings.us.
            </p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      throw new Error('Failed to send email')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

function formatTraffic(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`
  }
  return value.toString()
}

