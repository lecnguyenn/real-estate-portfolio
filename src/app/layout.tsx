import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TawkChat from '@/components/TawkChat'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
  adjustFontFallback: false
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  fallback: ['sans-serif'],
  adjustFontFallback: false
})


export const metadata: Metadata = {
  title: 'New Day | Real Estate Photo Editing Service',
  description: 'We provide virtual staging and photo editing services to enhance your real estate listings with professional results.',
  keywords: ['real estate photo editing', 'virtual staging', 'property photo enhancement'],
  authors: [{ name: 'New Day Team', url: 'https://newday247.com' }],
  creator: 'New Day 247',
  openGraph: {
    title: 'New Day | Real Estate Photo Editing Service',
    description: 'Enhance your real estate photos with our professional virtual staging and photo editing services.',
    url: 'https://newday247.com',
    images: [
      {
        url: '/images/LOGO-1.svg',
        width: 1200,
        height: 630,
        alt: 'New Day 247 Logo',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <div className='flex-grow'>
          <Header />
          {children}
        </div>
        <Footer />
        <TawkChat />
      </body>
    </html>
  )
}
