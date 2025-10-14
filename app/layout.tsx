import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'asightsolutions® - Digital Growth',
  description: 'Digital solutions and strategies that help your processes thrive and your business grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
