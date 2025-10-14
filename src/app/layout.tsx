import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization Services | Expert CRO Consultant & A/B Testing | Marketably.ai',
  description: 'Transform your website performance with expert CRO services. Voice-of-customer research + AI-powered conversion optimization. 49+ clients, $100M+ revenue unlocked. First test FREE. Specializing in e-commerce, SaaS, and lead gen optimization.',
  keywords: [
    'conversion rate optimization', 
    'CRO services', 
    'CRO consultant', 
    'A/B testing services',
    'conversion optimization expert',
    'website optimization',
    'landing page optimization',
    'e-commerce conversion optimization',
    'SaaS conversion optimization',
    'voice of customer research',
    'customer feedback analysis',
    'conversion rate expert',
    'website testing',
    'split testing',
    'multivariate testing',
    'user experience optimization',
    'conversion strategy',
    'website performance optimization',
    'revenue optimization',
    'conversion science'
  ],
  openGraph: {
    title: 'Expert Conversion Rate Optimization Services | CRO Consultant',
    description: 'Proven CRO methodology combining voice-of-customer research with AI. 49+ clients transformed. $100M+ revenue unlocked. Get your first test FREE.',
    url: 'https://rawlings.us',
    siteName: 'Marketably.ai - David Rawlings',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert CRO Services | Conversion Rate Optimization Consultant',
    description: 'Transform your conversion rates with proven CRO methodology. 49+ clients. $100M+ revenue unlocked. First test FREE.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rawlings.us',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Marketably.ai',
  description: 'Expert Conversion Rate Optimization (CRO) services combining voice-of-customer research with AI-powered testing and optimization',
  url: 'https://rawlings.us',
  founder: {
    '@type': 'Person',
    name: 'David Rawlings',
    jobTitle: 'Conversion Rate Optimization Consultant',
    description: 'Former consultant at Conversion Rate Experts, specializing in voice-of-customer research and AI-powered conversion optimization',
  },
  serviceType: [
    'Conversion Rate Optimization',
    'A/B Testing',
    'Voice of Customer Research',
    'Website Optimization',
    'Landing Page Optimization',
    'E-commerce Optimization',
    'SaaS Optimization'
  ],
  areaServed: 'Worldwide',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '49'
  },
  offers: {
    '@type': 'Offer',
    description: 'First conversion test FREE - Risk-free CRO engagement',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: '0',
      description: 'First test free'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}