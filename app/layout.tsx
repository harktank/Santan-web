import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanatan Shankhnaad',
  description: 'Sanatan Shankhnaad',
  generator: 'Sanatan Shankhnaad',
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
