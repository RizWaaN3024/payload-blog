import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    images: {
        domains: ['localhost'], // Add your payload CMS domain
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
            },
        ],
    },
}

export default withPayload(nextConfig)
