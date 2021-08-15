var express = require('express');
var router = express.Router();

let users = [
  {
    nombre: ["Ford","Bronco"],
    anioNac: 1952,
    localidad: "Modelo:2021",
    profesion:"5 Puertas , Top Gama",
    genero:1,
    activo: true
  },{
    nombre: ["Ford Focus"],
    anioNac: 1930,
    localidad:"Modelo 2020",
    profesion:"Gama intermedia",
    genero:1,
    activo: true
  },{
    nombre:["EcoSport"],
    anioNac: 1925,
    localidad: "Modelo 2020",
    profesion:"Gama baja ",
    genero: 0,
    activo: false
  },{
    nombre:["Ford Mondeo"],
    anioNac: 1987,
    localidad: "Modelo 2021",
    profesion:"Gama alta",
    genero: 0,
    activo: false
  },{
    nombre:["Ford Mustang"],
    anioNac: 1987,
    localidad: "Modelo 2021",
    profesion:"Gama alta",
    genero: 1,
    activo: false
  },{
    nombre:["Ford Ranger"],
    anioNac: 1987,
    localidad: "Modelo 2019",
    profesion:"Gama Media",
    genero: 0,
    activo: false
  },{
    nombre:["Ford Ka"],
    anioNac: 1987,
    localidad: "Modelo 2021",
    profesion:"Gama Baja",
    genero: 1,
    activo: false
  }
]

let title = "Usuarios"
let date = new Date() 
let animales = ["perro","gato","elefante"]

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('usuarios.hbs',{users,title,animales, year:date.getFullYear()})

});

module.exports = router;