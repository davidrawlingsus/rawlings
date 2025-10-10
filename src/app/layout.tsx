import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'David Rawlings - Conversion Rate Optimization & A/B Testing',
  description: 'Voice-of-customer research, conversion science, and AI to help brands listen at scale. Turning feedback into decisions, tests, and messaging that drive measurable growth.',
  keywords: ['conversion rate optimization', 'CRO', 'A/B testing', 'voice of customer', 'customer research', 'conversion optimization'],
  openGraph: {
    title: 'David Rawlings - Conversion Rate Optimization',
    description: 'Results-driven CRO consultant. 49 clients. Hundreds of conversion wins. Millions in new revenue.',
    url: 'https://rawlings.us',
    siteName: 'David Rawlings',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Rawlings - Conversion Rate Optimization',
    description: 'Results-driven CRO consultant. 49 clients. Hundreds of conversion wins.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}