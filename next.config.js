/** @type {import('next').NextConfig} */
const nextConfig = {
  images: ["netlify.com", "app.netlify.com"],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
