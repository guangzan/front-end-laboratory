const __PROD__ = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: __PROD__ ? './' : '/',
  devServer: {
    port: 3000,
    open: true,
  },
  pluginOptions: {},
  outputDir: 'docs',
}
