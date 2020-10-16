const { Sequelize, Model } = require('sequelize');

class Incident extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.DECIMAL,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models){
    this.belongsTo(models.Ngo, {
      foreignKey:'ngo_id',
      as: 'ngo',
    });
  }
}

module.exports = Incident;