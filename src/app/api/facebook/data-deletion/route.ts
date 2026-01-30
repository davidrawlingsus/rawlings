import { NextResponse } from 'next/server'
import crypto from 'crypto'

/**
 * Facebook Data Deletion Callback Endpoint
 * 
 * This endpoint handles data deletion requests from Facebook.
 * When a user removes the app from their Facebook settings,
 * Facebook sends a signed request to this endpoint.
 * 
 * Facebook Documentation:
 * https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback
 */

interface ParsedSignedRequest {
  user_id: string
  algorithm: string
  issued_at: number
}

function base64UrlDecode(input: string): string {
  // Replace URL-safe characters and add padding
  let base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  while (base64.length % 4) {
    base64 += '='
  }
  return Buffer.from(base64, 'base64').toString('utf-8')
}

function parseSignedRequest(signedRequest: string, appSecret: string): ParsedSignedRequest | null {
  try {
    const [encodedSig, payload] = signedRequest.split('.')
    
    if (!encodedSig || !payload) {
      console.error('Invalid signed request format')
      return null
    }

    // Decode the signature
    const sig = Buffer.from(base64UrlDecode(encodedSig), 'binary')
    
    // Decode the payload
    const data = JSON.parse(base64UrlDecode(payload)) as ParsedSignedRequest
    
    // Verify the algorithm
    if (data.algorithm?.toUpperCase() !== 'HMAC-SHA256') {
      console.error('Unknown algorithm:', data.algorithm)
      return null
    }
    
    // Verify the signature
    const expectedSig = crypto
      .createHmac('sha256', appSecret)
      .update(payload)
      .digest()
    
    if (!crypto.timingSafeEqual(sig, expectedSig)) {
      console.error('Invalid signature')
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error parsing signed request:', error)
    return null
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const signedRequest = formData.get('signed_request') as string

    if (!signedRequest) {
      return NextResponse.json(
        { error: 'Missing signed_request parameter' },
        { status: 400 }
      )
    }

    const appSecret = process.env.FACEBOOK_APP_SECRET

    // If no app secret configured, log the request and return a confirmation URL
    // This allows the endpoint to work during development/testing
    if (!appSecret) {
      console.warn('⚠️ FACEBOOK_APP_SECRET not configured - processing request without verification')
      
      // Generate a confirmation code
      const confirmationCode = `DEL-${Date.now().toString(36).toUpperCase()}`
      
      console.log('🗑️ Facebook data deletion request received (unverified):', {
        confirmationCode,
        timestamp: new Date().toISOString(),
      })

      // Return the required response format
      return NextResponse.json({
        url: `https://marketably.ai/data-deletion?confirmation=${confirmationCode}`,
        confirmation_code: confirmationCode,
      })
    }

    // Parse and verify the signed request
    const data = parseSignedRequest(signedRequest, appSecret)

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid signed request' },
        { status: 400 }
      )
    }

    const userId = data.user_id
    const confirmationCode = `DEL-${userId}-${Date.now().toString(36).toUpperCase()}`

    // Log the deletion request
    console.log('🗑️ Facebook data deletion request received:', {
      userId,
      confirmationCode,
      issuedAt: new Date(data.issued_at * 1000).toISOString(),
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual data deletion logic here
    // - Query your database for data associated with this Facebook user ID
    // - Delete or anonymize the data
    // - Log the deletion for compliance records

    // Send notification email about the deletion request
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Privacy Requests <privacy@marketably.ai>',
            to: ['david@rawlings.us'],
            subject: `🗑️ Facebook Data Deletion Callback [${confirmationCode}]`,
            text: `
Facebook Data Deletion Request

A user has requested data deletion through Facebook.

Confirmation Code: ${confirmationCode}
Facebook User ID: ${userId}
Request Time: ${new Date().toISOString()}

Action Required:
1. Search for data associated with Facebook User ID: ${userId}
2. Delete all associated data
3. Document the deletion for compliance records

This request was automatically received via the Facebook data deletion callback.
            `.trim(),
          }),
        })
        console.log('✅ Admin notification sent for Facebook deletion request')
      } catch (emailError) {
        console.error('❌ Failed to send notification email:', emailError)
      }
    }

    // Return the required response format per Facebook's documentation
    // https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback
    return NextResponse.json({
      url: `https://marketably.ai/data-deletion?confirmation=${confirmationCode}`,
      confirmation_code: confirmationCode,
    })

  } catch (error) {
    console.error('❌ Error processing Facebook data deletion request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Also handle GET requests to show information about the endpoint
export async function GET() {
  return NextResponse.json({
    name: 'Facebook Data Deletion Callback',
    description: 'This endpoint handles data deletion requests from Facebook',
    documentation: 'https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback',
    status_check_url: 'https://marketably.ai/data-deletion',
  })
}
