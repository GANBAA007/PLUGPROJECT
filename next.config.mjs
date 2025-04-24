/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images-dynamic-arcteryx.imgix.net', 'assets2.oakley.com'],
    },
    async rewrites() {
        return [
          {
            source: '/ecomm/:path*',
            destination: 'http://localhost:8080/ecomm/:path*', // Proxy to backend
          },
        ];
      },
};

export default nextConfig;
