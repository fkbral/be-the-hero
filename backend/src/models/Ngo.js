const { Sequelize, Model } = require('sequelize');

class Ngo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}

module.exports = Ngo;