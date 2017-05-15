const path = require('path')
const fs = require('fs')
const merge = require('merge')

const style = require('./style')
const babelConfig = require('../babel.config')
const resolve = path.resolve
const relative = path.relative

const root = resolve(__dirname, '..')
const client = resolve(root, 'client')
const entryContext = resolve(client, 'pages')
const webroot = resolve(root, 'webroot')

const webAssetsDir = 'app-proto-vue'

const entries = {}
fs.readdirSync(entryContext)
  .filter(file => /^[a-zA-Z0-9]/.test(file) && /\.jsx?$/.test(file))
  .forEach(file => {
    entries[file.replace(/\.[^\.]+$/, '')] =
      './' + relative(root, resolve(entryContext, file))
  })

const config = {
  entry: entries,
  output: {
    path: resolve(webroot, webAssetsDir),
    publicPath: resolve('/', webAssetsDir) + '/',
    filename: '[name].js?[chunkhash]',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: style.cssLoaders()
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      }

    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    },
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false,
  },
}

config.module.rules = config.module.rules.concat(style.styleLoaders({sourceMap:false}));
module.exports = config;

