const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, './public/svg'),
  webpack(config, options) {
    return config
  }
})

module.exports = {
  async rewrites() {
    return [{ source: '/api/:path*', destination: '/pages/api/:path*' }]
  }
}
