// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {

    if (isServer) {
      config.externals.push('lightningcss');
    }
    return config;
  },

  output: 'export', // Add this line for static export

  images: {
    unoptimized: true, // If you're using <Image>, needed for static export
  },
};

export default nextConfig;
