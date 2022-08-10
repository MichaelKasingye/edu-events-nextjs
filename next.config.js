module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["api.mapbox.com"],
  },
  async redirects() {
    return [
      {
        source: '/enrollment',
        destination: 'https://enrollment.vercel.app/',
        permanent: false,
      },
      {
        source: '/linkages',
        destination: 'https://outboxlinkages.vercel.app/',
        permanent: false
      },
      {
        source: '/learning',
        destination: 'https://outboxlms.vercel.app/',
        permanent: false
      },
      {
        source: '/',
        destination: '/events',
        permanent: true
      }
    ]
  },
};
