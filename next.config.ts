import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neckle-rtl-nextjs.vercel.app',
        port: '',
        pathname: '/assets/img/home2/**'
      }
    ]
  }
}

export default nextConfig
