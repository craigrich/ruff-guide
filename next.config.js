const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/region/devon': { page: '/Region/[id]' },
      '/hotel/123': { page: '/Hotel/[id]' }
    };
    // Use this for dymanic routes
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();
    // const shows = data.map(entry => entry.show);
    // shows.forEach(show => {
    //   paths[`/region/${show.id}`] = {
    //     page: '/Region/[id]'
    //   };
    // });
    return paths;
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules = [__dirname, 'node_modules'];
    return config;
  }
};
