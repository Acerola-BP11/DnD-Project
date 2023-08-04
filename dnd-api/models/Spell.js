const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Character = require('./Character')

Spell.belongsToMany(Character, { through: "CharacterSpell" })
Spell.belongsTo(User)


const Spell = sequelize.define('Spell', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Homebrew'
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "Está magia não tem descrição"
    },
    range: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        defaultValue: 0
    },
    components: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'V, S, M'
    },
    materials: {
        type: DataTypes.STRING
    }

})

Spell.sync()
module.exports = Spell