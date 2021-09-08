const router = require('express').Router();
let Client = require('../models/client.model')


//@route GET /clients
//@desc  Get all clients
//@acces Public
router.route('/').get((req,res) => {
    Client.find()
    .then(clients => res.json(clients))
    .catch(err => res.status(400).json('Error: ' + err));
});

//http://localhost:5000/clients/add

//@route POST /clients/add
//@desc  Adds a client 
//@acces Public
router.route('/add').post((req, res) => {
    const nombre_cliente = req.body.nombre_cliente;
    const apellido_cliente = req.body.apellido_cliente;
    const mail = req.body.mail;
    const password = req.body.password;
    const rep_pw = req.body.rep_pw;

    if( password === rep_pw ){

        const newClient = new Client({nombre_cliente, apellido_cliente, mail, password, rep_pw});
        newClient.save()
        .then(() => res.json('¡Client added!'))
        .catch(err => res.status(400).json('Error: ' + err)).then();
    }else{
        prompt("Las contraseñas no son iguales");
    }
});

//@route POST /login/Cliente
//@desc  Trying to make a login
//@acces Public
router.route('/login/Cliente').post((req,res) => {
    //Client.find( {mail:"a", password: "a"} )
    const mail = req.body.mail;
    const password = req.body.password;
    console.log("Parametros: " + mail + " + " + password );
    
    Client.find( {mail: mail, password: password} )
    .then(         client => res.json(client)           )
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Client.findByIdAndDelete(req.params.id)
    .then(() => res.json('Client deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Client.findById(req.params.id)
    .then(client => {
        client.nombre_cliente = req.body.nombre_cliente;
        client.apellido_cliente = req.body.apellido_cliente;
        client.mail = req.body.mail;
        client.password = req.body.password;
        client.rep_pw = req.body.rep_pw;

        client.save()
        .then(() => res.json('Client updated'))
        .catch(err => res.stats(400).json('Error: ' + err));
    })
    .catch(err => res.stats(400).json('Error: ' + err))
});

module.exports = router;