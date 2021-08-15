//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> wamp
let database = 'utn2021'
let userMYSQL = 'root'
let passMySQL = ''
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