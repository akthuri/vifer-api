// Initializes the `cotizaciones` service on path `/cotizaciones`
const createService = require('feathers-nedb');
const createModel = require('../../models/cotizaciones.model');
const hooks = require('./cotizaciones.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cotizaciones',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cotizaciones', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cotizaciones');

  service.hooks(hooks);
};
