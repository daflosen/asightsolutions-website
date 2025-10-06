import type { Metadata } from 'next'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

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
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
