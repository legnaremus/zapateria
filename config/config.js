var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = 'production';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'zapateria'
    },
    port: 3000,
    db: 'mysql://localhost/dbzem'
  },

  test: {
    root: rootPath,
    app: {
      name: 'zapateria'
    },
    port: 3000,
    db: 'mysql://localhost/zapateria-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'zapateria'
    },
    port: 3000,
    db: 'mysql://localhost/dbzem'
  }
};

module.exports = config[env];
