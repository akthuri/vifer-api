const assert = require('assert');
const app = require('../../src/app');

describe('\'cotizaciones\' service', () => {
  it('registered the service', () => {
    const service = app.service('cotizaciones');

    assert.ok(service, 'Registered the service');
  });
});
