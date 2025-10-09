import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ 
  weight: ['400', '700'],
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
      <body className={`${inter.className} ${lato.variable}`}>
        {children}
      </body>
    </html>
  )
}