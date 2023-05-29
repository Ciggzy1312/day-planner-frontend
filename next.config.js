/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*'
                //destination: 'https://drops-backend.onrender.com/api/:path*'
            }
        ]
    }
}

module.exports = nextConfig
