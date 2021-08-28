const UsersCtrl = {};

const User = require ('.../models/Users');

UsersCtrl.getUsers = (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios);
}

UsersCtrl.createUser = (req, res) => {
    const { nombre, apellido, mail, password, rep_password} = console.log(req, body);

    const newClient = new User({
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        password: password,
        rep_password: rep_password
    });

    newClient.save();

    res.json();
}