const regRoutes = require('./register_routes');
const authROutes = require('./auth_routes');
const newROutes = require('./new_routes');
const postROutes = require('./post_routes');
const pageROutes = require('./page_routes');
const authorROutes = require('./author_routes');

module.exports = function (app, db) {
  regRoutes(app, db);
  authROutes(app, db);
  newROutes(app, db);
  postROutes(app, db);
  pageROutes(app, db);
  authorROutes(app, db);
};
