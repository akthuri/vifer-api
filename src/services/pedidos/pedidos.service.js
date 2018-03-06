// Initializes the `pedidos` service on path `/pedidos`
const createService = require('feathers-nedb');
const createModel = require('../../models/pedidos.model');
const hooks = require('./pedidos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pedidos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pedidos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pedidos');

  service.hooks(hooks);
};
