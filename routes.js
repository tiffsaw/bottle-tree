const routes = require('next-routes');

// Setup router.
module.exports = routes()
  .add('index', '/')
  .add('posts')
  .add('single', '/posts/:slug');

// // Setup router.
// module.exports = routes()
//   .add('index', '/')
//   .add('posts')
//   .add('page', '/:slug')
//   .add('single', '/posts/:slug');
