const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaProductos = db.define('productos',{
    id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false
    },
    nombre:{type:Sequelize.STRING},
    descripcion:{type:Sequelize.TEXT},
    precio:{type:Sequelize.DECIMAL},
    imagen: { type: Sequelize.STRING},
    stock: { type: Sequelize.INTEGER},
    categoria: {type: Sequelize.STRING},
      // Timestamps
      //createdAt: Sequelize.DATE,
      //updatedAt: Sequelize.DATE,
  });

module.exports = tablaProductos