import type { Metadata } from 'next'
import { Lato, Caveat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-caveat'
})

export const metadata: Metadata = {
  title: "MapTheGap | Voice of Customer Facebook Ads That Beat Your Agency",
  description: 'Turn customer feedback into Facebook ads that outperform your agency by 20%+. We extract buying motives from surveys, reviews, and support tickets, then filter them through an ad framework built on 100M+ Facebook posts. $0 risk test - you only pay after we beat your control.',
  keywords: [
    'facebook ads agency',
    'facebook advertising',
    'voice of customer ads',
    'facebook ad creative',
    'meta ads optimization',
    'facebook ad copywriting',
    'customer research ads',
    'facebook ROAS improvement',
    'ad creative testing',
    'facebook ad concepts',
    'performance marketing',
    'paid social advertising',
    'facebook ad strategy',
    'ad copy optimization',
    'customer feedback marketing',
    'facebook campaign optimization',
    'social media advertising',
    'ecommerce facebook ads',
    'DTC facebook ads',
    'facebook ad performance'
  ],
  icons: {
    icon: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/favicon.png',
  },
  openGraph: {
    title: 'MapTheGap | Facebook Ads Built From Your Customer Data',
    description: 'Finally fire your Facebook agency. We turn Voice of Customer into ad concepts that beat your control by 20%+ - or you pay nothing. Concepts delivered in 2-3 days.',
    url: 'https://mapthegap.ai',
    siteName: 'MapTheGap.ai',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapTheGap | Facebook Ads Built From Your Customer Data',
    description: 'Turn customer feedback into Facebook ads that outperform your agency by 20%+. $0 risk test - concepts in 2-3 days.',
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
    canonical: 'https://mapthegap.ai',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MapTheGap.ai',
  description: 'Facebook ads built from Voice of Customer data. We turn customer feedback into ad concepts that beat your control by 20%+ using an ad framework built on 100M+ Facebook posts.',
  url: 'https://mapthegap.ai',
  founder: {
    '@type': 'Person',
    name: 'David Rawlings',
    jobTitle: 'Facebook Ads Strategist',
    description: 'Growth expert specializing in voice-of-customer research and high-converting Facebook ad creative',
  },
  serviceType: [
    'Facebook Advertising',
    'Meta Ads Optimization',
    'Ad Creative Development',
    'Voice of Customer Research',
    'Ad Copywriting',
    'Campaign Strategy',
    'A/B Testing'
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
    description: '$0 Risk Test - Pay only after we beat your control by 20%+',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: '0',
      description: 'Free until proven results'
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-ML9VHFR7');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w10n131k4k");`
          }}
        />
        {/* End Microsoft Clarity */}

        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="o5vm5r6lzg38v1pr5wkyciwck3571y" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lato.className} ${caveat.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML9VHFR7"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Script
          id="social-intents-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var e=window,i=document,t="socialintents",u=e[t]=e[t]||[];if(u.t) return console.error("Duplicate Social Intents code snippet.");u.t=!0;u.load=function(s){u.settings=s||{};var c=i.createElement("script");c.async=!0;c.src="https://www.socialintents.com/api/chat/socialintents.1.5.js";i.getElementsByTagName("script")[0].parentNode.insertBefore(c,null);};}();
              socialintents.load({
                app_id: "2c9fa6a699daccdf0199e0b363820747",
                alignment: "right",
                horizontal_padding: "25px"
              });
            `
          }}
        />
      </body>
    </html>
  )
}