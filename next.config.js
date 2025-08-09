module.exports = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ]
    });
    return config;
  }
};