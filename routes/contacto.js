const express = require('express')
const router = express.Router()
//importamos Nodemailer
const nodemailer = require("nodemailer");


let title = "Contacto"

let year = new Date().getFullYear();

router.get('/',function(request,response){
    // response.send("Esto es el contacto")
    //render('vista a renderizar',{data a enviar a la vista})
    response.render('contacto.hbs',{year})
})

router.post('/', (req,res) => {
    // console.log(req.body.nombre)
    // console.log(req.body.email)

    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        mensaje: req.body.mensaje
    } 

    //Enviar datos por email -> Nodemailer
    async function main(){

        //transporter
        const transporter = require('../config/transporter')

        // Envio, segun la conexion del Transport
        let info = await transporter.sendMail({
            from: `${user.nombre} <${user.email}>`, // sender address
            to: "chikigamer54@gmail.com", // list of receivers
            subject: "Nuevo Mensaje", // Subject line
            text: "Hello world?", // plain text body
            html: `<strong>Nuevo Contacto</strong>
            <p>Nombre: ${user.nombre}</p>
            <p>Email: ${user.email}</p>
            <p>Mensaje: ${user.mensaje}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log(info)
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        res.render('contacto.hbs',{user, title:"Contacto", year, envio:true})
    }

   
        
})

module.exports = router;