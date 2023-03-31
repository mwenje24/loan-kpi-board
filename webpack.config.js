const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      // Add any aliases for modules that you want to use as CommonJS modules
      // For example, to use Chart.js as a CommonJS module:
      'chart.js': 'chart.js/dist/Chart.js'
    }
  },
  plugins: [
    // Add any necessary plugins here
    // For example, to provide jQuery as a global variable:
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
};
