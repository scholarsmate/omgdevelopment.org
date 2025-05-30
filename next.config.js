module.exports = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
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