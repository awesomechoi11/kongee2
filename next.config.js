/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.glsl$/i,
      loader: 'raw-loader',
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
