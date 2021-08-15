//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> wamp
let database = 'heroku_5dbc6540559a7b8'
let userMYSQL = 'bbb5b750b9b9ae'
let passMySQL = 'ce37bb6c'
let hostMySQL = '127.0.0.1'

const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualiizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

module.exports = db;
