const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./User')
const Campaign = require('./Campaign')
const Trait = require('./Trait')
const Spell = require('./Spell')
const Item = require('./Item')

Character.belongsTo(User)
Character.belongsTo(Campaign)
Character.hasMany(Trait)
Character.hasMany(Item)
Character.hasMany(Spell)

const Character = sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true  
    },
    strenght: {
        type: DataTypes.INTEGER,
    },
    dexterity: {
        type: DataTypes.INTEGER(3)
    },
    constitution: {
        type: DataTypes.INTEGER(3)
    },
    intelligence: {
        type: DataTypes.INTEGER(3)
    },
    wisdom: {
        type: DataTypes.INTEGER(3)
    },
    charisma: {
        type: DataTypes.INTEGER(3)
    },
    inspiration: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    proeficiency: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 2
    },
    strenght_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dexterity_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    constitution_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    intelligence_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    wisdom_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    charisma_save: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    acrobatics: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    animal_handling: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    arcana: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    athletics: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    deception: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    history: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    insight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    intimidation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    investigation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    medicine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    nature: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    perception: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    performance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    persuasion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    religion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    sleight_of_hand: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    stealth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    survival: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    proeficiency_and_languages: {
        type: DataTypes.TEXT,
        defaultValue: 
        `Armaduras: Nenhuma\nArmas: Nenhuma\nFerramentas: Nenhuma\nLínguas: Nenhuma`
    },
    armor_class: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 10
    },
    initiative: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 0
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 30
    },
    hit_point_maximum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    hit_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    temporary_hit_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    hit_dice: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 0
    },
    hit_dice_quantity: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 0
    },
    death_saves_sucesses: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0
    },
    death_saves_failures: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0
    },
    inventory_capacity: {
        type: DataTypes.FLOAT(3, 2),
        allowNull: false,
        defaultValue: 0
    },
    inventory_weight: {
        type: DataTypes.FLOAT(3, 2),
        allowNull: false,
        defaultValue: 0
    },
    personality_traits: {
        type: DataTypes.TEXT,
    },
    ideals: {
        type: DataTypes.TEXT,
    },
    bonds: {
        type: DataTypes.TEXT
    },
    flaws: {
        type: DataTypes.TEXT
    },
    backhistory: {
        type: DataTypes.TEXT()
    }


})

Character.sync()

module.exports = Character