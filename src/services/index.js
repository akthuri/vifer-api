const cotizaciones = require('./cotizaciones/cotizaciones.service.js');
const pedidos = require('./pedidos/pedidos.service.js');
const productos = require('./productos/productos.service.js');
const clientes = require('./clientes/clientes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cotizaciones);
  app.configure(pedidos);
  app.configure(productos);
  app.configure(clientes);
};
