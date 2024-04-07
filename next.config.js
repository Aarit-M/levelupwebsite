/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output:"export",
};

module.exports = nextConfig;

// next.config.js

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/'
        }
      }
    });

    return config;
  }
};
