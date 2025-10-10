import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'David Rawlings - Personal Brand',
  description: 'Personal brand website for David Rawlings',
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