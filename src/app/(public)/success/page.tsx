import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Success',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'var(--font-lato), sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Thank you!
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
        Your submission was received successfully.
      </p>

      <Script
        id="vizualizd-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.VizualizdSurvey = {
              apiKey: "vzd_arU1F-vdRqUNo445O2t5weHGJ7zI1KUkmNjPozpvlWo",
              apiBaseUrl: "https://api.mapthegap.ai"
            };
          `,
        }}
      />
      <Script
        id="vizualizd-survey"
        src={`https://api.mapthegap.ai/static/widget/vizualizd-survey.js?v=${Date.now()}`}
        strategy="afterInteractive"
      />
    </div>
  )
}
