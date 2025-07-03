import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Om Singh Portfolio',
  description: 'Portfolio website of Om Singh',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
