const router = require('express').Router();
let Seller = require('../models/seller.model')

router.route('/').get((req,res) => {
    Seller.find()
    .then(sellers => res.json(sellers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//http://localhost:5000/clients/add

router.route('/add').post((req, res) => {
    const nombre_vendedor = req.body.nombre_vendedor;
    const apellido_vendedor = req.body.apellido_vendedor;
    const mail_vendedor = req.body.mail_vendedor;
    const password_vendedor = req.body.password_vendedor;
    const rep_pw_vendedor = req.body.rep_pw_vendedor;

    const newSeller = new Client({nombre_vendedor, apellido_vendedor, mail_vendedor, password_vendedor, rep_pw_vendedor});

    newSeller.save()
    .then(() => res.json('Seller added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*

router.route('/:id').get((req,res) => {
    Client.findById(req.params.id)
    .then(client => res.json(client))
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
*/

module.exports = router;