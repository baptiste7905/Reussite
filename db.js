path = require('path')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

const cartes = sequelize.define('cartes', {
    nom : {
      type: DataTypes.STRING,
      allowNull: false
    },
    position_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position_l: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
});

const Classement = sequelize.define('Table', {
  nom: {
      type: DataTypes.STRING,
      allowNull: false
  },
  Temps: {
      type: DataTypes.INTEGER,
      allowNull: false
  },

});

module.exports = {
  sequelize: sequelize,
  model: {
      cartes: cartes,
  }
}

