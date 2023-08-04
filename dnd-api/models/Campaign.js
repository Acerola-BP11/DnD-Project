const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Character = require('./Character')
const { data } = require('cheerio/lib/api/attributes')

Campaign.belongsToMany(User, { through: 'CampaignUser' })
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
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

Campaign.sync()

module.exports = Campaign