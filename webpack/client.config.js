const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const webpackConfig = module.exports = require('./common.config')

const dev = process.env.NODE_ENV !== 'production'

webpackConfig.plugins = webpackConfig.plugins || []

const resolve = path.resolve
const client = path.resolve(__dirname, '../client')

const moduleAlias = {}
fs.readdirSync(resolve(client))
  .filter(dir => {
    try {
      return fs.statSync(resolve(client, dir)).isDirectory()
    } catch (e) {
      return false
    }
  })
  .forEach(dir => { moduleAlias['@' + dir] = resolve(client, dir) })

webpackConfig.resolve.alias = Object.assign({}, webpackConfig.resolve.alias, moduleAlias)


if (!dev) {
  webpackConfig.output.filename = '[name]-[chunkhash].js'
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    })
  )
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    })
  )
}

