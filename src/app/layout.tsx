import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

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
  title: 'New Day',
  description: 'Real Estate for everyone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <div className='flex-grow'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
