const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Character = require('./Character')

Item.belongsTo(User, {
    foreignKey: {
        name: 'userID',
        allowNull: false
    }
})

Item.belongsToMany(Character)

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue: 'O Item não tem descrição'
    }
})

Item.sync()
module.exports = Item