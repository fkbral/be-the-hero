const { Sequelize } = require('sequelize');

const Ngo = require('../models/Ngo');
const Incident = require('../models/Incident');

const databaseConfig = require('../config/database');

const models = [
  Ngo,
  Incident,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();