const router = require('express').Router();
let Negocio = require('../models/negocio.model')

router.route('/').get((req,res) => {
    Negocio.find()
    .then(negocios => res.json(negocios))
    .catch(err => res.status(400).json('Error: ' + err));
});


//http://localhost:5000/negocio/add

//@route POST /negocio/add
//@desc  Adds a client 
//@acces Public
router.route('/add').post((req, res) => {
    const nombre_negocio = req.body.negocio;
    const tipo_negocio = req.body.emailNegocio;
    const mail = req.body.mail;


    const newNegocio = new Negocio({nombre_negocio, tipo_negocio, mail, });

    newNegocio.save(err =>{
        
        if(err){
            res.status(500).send('ERROR AL REGISTRAR EL NEGOCIO');
        }else{
            res.status(200).send('NEGOCIO REGISTRADO');
        }
    });
        /*
        newClient.save()
        .then(() => res.json('¡Client added!'))
        .catch(err => res.status(400).json('Error: ' + err)).then();*/

});