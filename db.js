path = require('path')

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

