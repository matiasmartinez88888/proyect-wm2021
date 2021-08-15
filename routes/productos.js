const express = require('express')
const router = express.Router()

var title = "Catalogo"
var year = new Date().getFullYear()
const productos = [
    {id : 1, nombre : 'Ford Mustang', descripcion : 'El Ford Mustang es un automóvil deportivo muscle car de dos puertas, producido por el fabricante estadounidense Ford Motor Company desde 1964. Originalmente fue concebido por Lee Iacocca como un concurso entre departamentos como algo personal y deportivo que atraería a las mujeres.', precio : 10000000, imagen : 'ingreso1.png', stock : 1, categoria: "SuperAuto"},
    {id : 2, nombre : 'Ford Bronco', descripcion : 'A diferencia de su hermano mayor que se basa en la pick-up Ranger, la Bronco Sport toma como punto de partida la Kuga, esto quiere decir que tiene carrocería autoportante. El propulsor de acceso es un 1.5 L turbo con 181 CV y 258 de torque. En la parte alta estará el conocido 2.0L turbo capaz de producir 245 caballos y 393 Nm de par. En ambos casos la transmisión es una automática de ocho cambios. Con el fin de estar a la altura del nombre, la tracción es integral. La suspensión delantera es McPherson y la trasera multibrazo.', precio : 2100000, stock : 5, imagen : 'ingreso2.png', categoria: 'Camioneta 4x4'},
    {id : 3, nombre : 'Ford Focus', descripcion : 'Ford Focus Active 2021 1.0 Ecoboost 125 CV – Desde 23.800 euros Ford Focus Active 2021 1.5 Ecoboost 150 CV – Desde 25.300 euros Ford Focus Active 2021 1.5 Ecoblue 120 CV – Desde 25.300 euros Ford Focus Active 2021 2.0 Ecoblue 150 CV – Desde 27.300 euros Ford Focus Active Sportbreak 2021 1.0 Ecoboost 125 CV – Desde 24.800 euros Ford Focus Active Sportbreak 2021 1.5 Ecoboost 150 CV – Desde 26.300 euros Ford Focus Active Sportbreak 2021 1.5 Ecoblue 120 CV – Desde 26.300 euros Ford Focus Active Sportbreak 2021 2.0 Ecoblue 150 CV – Desde 28.300 euros', precio : 40000000, imagen : 'ingreso3.png', stock : 10, categoria: "Automovil" },
    {id : 4, nombre : 'Ford Ranger', descripcion : 'Capacidades de Ford Ranger 2021 Capacidad de Carga Hasta 1,377 kg (Versión XLT Gasolina Plus 4X2) Capacidad de Arrastre Hasta 3,500 kg (Versión XLT Diesel 4X4) Potencia Motor Gasolina: 164HP Motor Diésel: hasta 197HP Torque Motor Gasolina: hasta 167 lb-pie de torque Motor Diésel: hasta 347 lb-pie de torque', precio : 520000, stock : 2, imagen : 'ingreso4.png', categoria: "Camioneta 4x4" },
    {id : 5, nombre: 'Ford Ka', descripcion : 'Combustible nafta Cilindrada 1499 cc Potencia 123/6500 cv/rpm Torque 151/4500 N·m/rpm Alimentación inyección electrónica Cilindros 3 en línea Válvulas 12 Sistema start / stop no', precio : 1200000, imagen : 'ingreso5.png', stock : 0, categoria: "Miniauto" },
    {id : 6, nombre: 'Ford Mondeo', descripcion: 'Combustible nafta Cilindrada 1999 cc Potencia 240/5500 cv/rpm Torque 340/1750-4000 N·m/rpm Alimentación inyección directa turbo Cilindros 4 en línea Válvulas 16 Sistema start / stop sí', precio : 50000000, imagen: 'ingreso6.png', stock: 6, categoria: "Pistero" },
    {id : 7, nombre: 'Ford Lemans', descripcion: 'El auto de ford con mas huevos', precio : 5000000000000, imagen: 'cargado.jpg', stock: 1, categoria: "Superauto" },
    
         
]
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS.Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'


//Conexion MySQL
const Sequelize = require('sequelize')

const db = new Sequelize('utn2021', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
})

//verificamos la conexion
db.authenticate()
//promise
  .then( () => {
    console.log('Conectados a la base de datos!')
  })
  .catch(err => {
    console.log('No estamos conectados :( '+err)
  })



// arrow function
router.get('/', (req,res) => {

    res.render('listadoProductos.hbs',{title,year,productos})
})

router.get('/:id',(req,res) => {
    //console.log(req.params.id)
    let paramURL = req.params.id
    //find() -> busca dentro de un array, y devuelve el 1er indice que coincida, en un nuevo array
    let prodSingle = productos.find(productos => productos.id == paramURL)
    // console.log(prodSingle)
    res.render('productoSimple.hbs',{prodSingle,legales,envios,title,year})
    // res.json(prodSingle)
})

module.exports = router;