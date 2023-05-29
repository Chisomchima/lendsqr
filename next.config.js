const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.join(__dirname, 'styles')],
            },
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['cloudflare-ipfs.com'],
  },
};
