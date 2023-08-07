const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Character = require('./Character')

Trait.belongsToMany(Character, { through: "TraitCharacter" })
Trait.belongsTo(User)

const Trait = sequelize.define('Trait', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    source: {
        type: DataTypes.TEXT,
        defaultValue: 'Homebrew'
    },
    description: {
        type: DataTypes.TEXT
    }
})

Trait.sync()

module.exports = Trait