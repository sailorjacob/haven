import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haven',
  description: 'Your digital sanctuary',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
