module.exports = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack(config, options) {
    const remarkGfm = require('remark-gfm');
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkGfm],
          },
        },
      ]
    });
    return config;
  }
};