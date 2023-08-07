const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Character = require('./Character')

Campaign.belongsTo(User, {
    foreignKey: {
        name: 'owner',
        allowNull: false
    }
})
Campaign.hasMany(Character)

const Campaign = sequelize.define('Campaign', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

Campaign.sync()

module.exports = Campaign