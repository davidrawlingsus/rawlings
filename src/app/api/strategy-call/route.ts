import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, websiteUrl, preferredDate, preferredTime, additionalInfo } = body

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Format the date for display
    const dateObj = new Date(preferredDate)
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    // Format the time for display
    const timeObj = preferredTime.split(':')
    const hours = parseInt(timeObj[0])
    const minutes = timeObj[1]
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    const formattedTime = `${displayHours}:${minutes} ${ampm}`

    // Format the email content
    const emailContent = `
New Strategy Call Booking Request

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}
${websiteUrl ? `Website: ${websiteUrl}` : ''}

PREFERRED TIME:
Date: ${formattedDate}
Time: ${formattedTime}

${additionalInfo ? `ADDITIONAL INFORMATION:\n${additionalInfo}` : ''}

---
This booking was submitted via the strategy call modal on rawlings.us.
    `.trim()

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      // Still return success to the user, but log the error
      return NextResponse.json({ 
        success: true,
        message: 'Booking submitted successfully (email not configured)' 
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
        subject: `New Strategy Call Booking: ${name} - ${formattedDate} at ${formattedTime}`,
        text: emailContent,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f7fafc;">
            <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h2 style="color: #1a202c; margin-bottom: 8px; font-size: 24px;">New Strategy Call Booking</h2>
              <p style="color: #718096; margin-bottom: 32px; font-size: 14px;">Someone just requested a strategy call on rawlings.us</p>
              
              <div style="background: #f7fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #2d3748; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">Contact Information</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #2d3748; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3182ce; text-decoration: none;">${phone}</a></td>
                  </tr>
                  ${company ? `
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Company:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${company}</td>
                  </tr>
                  ` : ''}
                  ${websiteUrl ? `
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600;">Website:</td>
                    <td style="padding: 8px 0;"><a href="${websiteUrl}" style="color: #3182ce; text-decoration: none;" target="_blank">${websiteUrl}</a></td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <div style="background: #edf2f7; border-left: 4px solid #B9F040; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #2d3748; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">Preferred Time</h3>
                <p style="color: #2d3748; font-size: 18px; font-weight: 600; margin: 0;">
                  📅 ${formattedDate}
                </p>
                <p style="color: #2d3748; font-size: 18px; font-weight: 600; margin: 8px 0 0 0;">
                  🕒 ${formattedTime}
                </p>
                <p style="color: #718096; font-size: 13px; margin: 12px 0 0 0;">
                  Note: Time is in the client's local timezone. Confirm availability before sending calendar invite.
                </p>
              </div>

              ${additionalInfo ? `
              <div style="background: #f7fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #2d3748; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">What They'd Like to Discuss</h3>
                <p style="color: #2d3748; line-height: 1.6; margin: 0; white-space: pre-wrap;">${additionalInfo}</p>
              </div>
              ` : ''}

              <div style="padding: 20px; background: linear-gradient(135deg, #B9F040 0%, #a0d636 100%); border-radius: 8px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background: white; color: #1a202c; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                  Reply to ${name}
                </a>
              </div>
            </div>
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
      message: 'Booking submitted successfully' 
    })
  } catch (error) {
    console.error('Error submitting strategy call booking:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}

