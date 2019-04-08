const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  env: {
    wpApi: 'http://thebottletreenc.com/wp-json/wp/v2/'
  },
  webpack(config) {
    const sassResourceSettings = {
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [path.resolve(__dirname, 'assets/scss/project.scss')]
          }
        }
      ]
    };
    const sassRuleModules = {
      test: /\.module\.s(a|c)ss$/,
      ...sassResourceSettings
    };
    const normalSassRules = {
      test: /\.s(a|c)ss$/,
      ...sassResourceSettings
    };

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, sassRuleModules, normalSassRules]
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname),
          components: path.resolve(__dirname, 'components')
        }
      }
    };
  }
});
