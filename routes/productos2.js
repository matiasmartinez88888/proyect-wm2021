const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
//Conexion MYSQL
const db = require('../config/db')
//Model Tabla Productos
const tablaProductos = require('../models/tablaProductos')

// const productos = [
  //     {id : 1, nombre : 'Termo Stanley 1.3lts con tapa para mate', descripcion : 'El mejor termo para alimentos es el Thermos Stainless King, con una práctica cuchara y tapa que sirve como plato. Dura hasta 7 horas de frío y calor de hasta 9 horas', precio : 108, imagen : 'termo1.jpg', stock : 0, categoria: "Aire libre"},
  //     {id : 2, nombre : 'Bicicleta Mointain Rod. 27', descripcion : 'Olmo Wish 265, rodado 26 con frenos v-brake, cuadro de aluminio, 21 velocidades marca Shimano, amortiguación seteada de fábrica y un cuadro especial ideal para subir sin inconvenientes. Realmente una excelente opción para aquellas personas que buscan una bici bajita, de buena calidad, eficiente y cómoda.', precio : 21000, stock : 5, imagen : 'bike1.jpg', categoria: 'Aire libre'},
  //     {id : 3, nombre : 'Poltrona Venecia', descripcion : 'Moderno diseño con estructura 60% de madera maciza y 40% MDF. Su tapizado con doble costura reforzada con pespunte. Asiento con poliéster y cinchas elásticas con relleno de guata y poliéster de alta densidad. Patas de madera maciza lustrada.', precio : 400, imagen : 'sillon1.jpg', stock : 10, categoria: "Art. del hogar" },
  //     {id : 4, nombre : 'Vans U OLD SKOOL', descripcion : 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se', precio : 520, stock : 10, imagen : 'zapa2.jpg', categoria: "calzado" },
  //     {id : 5, nombre: 'Nike Air Max', descripcion : 'En 1990, la línea Air Max dio un gran paso con el lanzamiento de un modelo que enseguida transcendió su función como zapatillas de running. Los más jóvenes las conocerán como las Air Max 90, pero tras su lanzamiento, el diseño fue visto como una evolución de las Air Max originales de 1987 y se las acabó llamando Air Max III.', precio : 120, imagen : 'zapa1.jpg', stock : 0, categoria: "calzado" },
  //     {id : 6, nombre: 'Sillon oficina', descripcion: 'No es un sillon cualquiera, este es negro, sube y baja como los otros, pero mejor', precio : 5000, imagen: 'sillon2.jpg', stock: 6, categoria: "art. de oficina" },
  //     {id : 7, nombre : 'EPSON L3150 Multifuncion Wifi EcoTank', descripcion : 'La multifunctional inalámbrica EcoTank L3150 te ofrece la revolucionaria impresión sin cartuchos, con nuevo diseño de tanques frontales, botellas de tinta con llenado automático y codificadas para llenado fácil de cada color.', precio : 18000, imagen : null , stock : 8, categoria: "art. de oficina"  }     
  // ]
  
let title = "Productos2"
let year = new Date().getFullYear()
let legales = 'Metodos de Pago: VISA , MASTERCARD , AMERICAN CARD , NARANJA , PAGOFACIL , RAPIPAGO , LINK , BANELCO , ICBC .'
let envios = 'ENVIOS x CORREO A TODO EL PAIS.  Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

// arrow function
router.get('/', async (req,res) => {
        //consulta
      const traerProd = await tablaProductos.findAll({
        //attributes:['id','nombre','descripcion'],
        order:[
          ['id', 'DESC']
        ]
      })
      //console.log(traerProd)
      res.render('listadoProductos2.hbs',{title,year,productos:traerProd})
})

router.get('/:id',async (req,res) => {
    let paramURL = req.params.id

    const consultaProd = await tablaProductos.findOne({where:{id:paramURL}});
    //console.log(consultaProd.dataValues)
    /*
    para Bruno
    if(!user){
      res.render("error.hbs",{data})
    }else{
      res.render("gracias.hbs",{data})
    }*/

    res.render('productoSimple.hbs',{prodSingle:consultaProd,legales,envios,title,year})
    // res.json(prodSingle)
})

module.exports = router;