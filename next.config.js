// const fetch = require('isomorphic-unfetch');

module.exports = {
  env: {
    CONTENTFUL_SPACE: 'tqywocep0fhp',
    CONTENTFUL_ACCESS_TOKEN: 'FmQby4t4SpZqLncvSYDBqPfcuCZdZJ77yAF9xR7G2P8'
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules = [__dirname, 'node_modules'];
    return config;
  }
};
