const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mariadb',
    dialectOptions: {
        user: 'root',
        password: '123mudar',
        database: ''
    },
    logging: (...msg) => console.log(msg)
})

module.exports = sequelize