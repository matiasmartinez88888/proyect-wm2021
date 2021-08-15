const express = require('express')
const router = express.Router()

let title = "Alta de productos"
let year = new Date().getFullYear();

router.get('/',function(request,response){
    response.render('form-altaProd.hbs',{title,year})
})

//Cargar productos
const tablaProductos = require('../models/tablaProductos')

router.post('/', async (req,res) => {
    const newProd = {
        id:0,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,

    }
    console.log(newProd)
    //ojo el orden de los campos -> ver la tabla antes
    try {
        const cargarProd = await tablaProductos.create({
            id: newProd.id,
            nombre:newProd.nombre,
            descripcion:newProd.descripcion,
            precio:newProd.precio,
            imagen:newProd.imagen,
            stock:newProd.stock,
            categoria:newProd.categoria,

        })    
        //console.log(cargarProd)
    
        res.render("form-altaProd.hbs",{title,year,alta:true})
        
    } catch (error) {
        console.log("Error en el alta "+error)
        res.render("form-altaProd.hbs",{data,year,alta:false,error})
    }
})

module.exports = router;