const router = require('express').Router();
let Client = require('../models/client.model')


/*Why promt doesn't work?
It seems you run this code in a Node.js environment, 
in the site that provides this environment. window object is not defined in this environment.*/

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

    const newClient = new Client({nombre_cliente, apellido_cliente, mail, password});

    newClient.save(err =>{
        
        if(err){
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        }else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
        /*
        newClient.save()
        .then(() => res.json('¡Client added!'))
        .catch(err => res.status(400).json('Error: ' + err)).then();*/

});

//@route POST /login/Cliente
//@desc  Trying to make a login
//@acces Public
router.route('/login/Cliente').post((req,res) => {

    const mail = req.body.mail;
    const password = req.body.password;

    Client.findOne( {mail}, ( err,client) =>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR EL USUARIO');
        }else if(!mail){
            res.status(500).send('NO SE HA REGISTRADO NINGUN USUARIO CON ESE MAIL');
        }else{
            client.isCorrectPassword( password, (err, result) =>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            })
        }
    })

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
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;