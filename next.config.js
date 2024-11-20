/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'], // Add all image hostnames you use
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/, // Match GLSL, vertex, and fragment shader files
      use: [
        {
          loader: 'raw-loader',
        },
        {
          loader: 'glslify-loader',
        },
      ],
    });
    return config;
  },
};
