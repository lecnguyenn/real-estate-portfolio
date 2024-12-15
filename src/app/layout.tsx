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
      <head>
        <link rel="icon" href="/images/logo.png" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/675e8993af5bfec1dbdbf931/1if4kiqpb';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `
          }}
        />
      </head>
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
