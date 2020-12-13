const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, './public/svg'),images: {
    domains: ['cdn.valorantinfo.gg'],
  },
  webpack(config, options) {
    return config
  }
})
