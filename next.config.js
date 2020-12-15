const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, './public/svg'),
  webpack(config, options) {
    return config
  }
});

module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/carrier": { page: "/carrier" },
      "/collection": { page: "/collection" },
      "/store": { page: "/store" },
    };
  }
};
