/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products-old/:id',
        destination: '/products/:id',
        permanent: true,
      },
      {
        source: '/about-us-old',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
