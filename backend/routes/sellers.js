const router = require('express').Router();
let Seller = require('../models/seller.model')

router.route('/').get((req,res) => {
    Seller.find()
    .then(sellers => res.json(sellers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//http://localhost:5000/sellers/add

router.route('/add').post((req, res) => {
    const nombre_vendedor = req.body.nombre_vendedor;
    const apellido_vendedor = req.body.apellido_vendedor;
    const mail_vendedor = req.body.mail_vendedor;
    const password_vendedor = req.body.password_vendedor;
    const rep_pw_vendedor = req.body.rep_pw_vendedor;

    const newSeller = new Seller({nombre_vendedor, apellido_vendedor, mail_vendedor, password_vendedor});

    newSeller.save(err =>{
        
        if(err){
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        }else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});

module.exports = router;