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

};

export default nextConfig;