const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  
  context: path.resolve(__dirname, './src/js/'),

  entry: './backend-demo.js',

  output: {
    filename: 'backend-demo-bundle.js',
    path: path.resolve(__dirname, './src/js'),
  },

  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};