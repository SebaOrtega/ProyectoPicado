const { Schema, model} = require ('mongoose');

const clientSchema = new Schema({
    nombre_cliente: {
        tpye: String,
        required: true,
        trim: true
    },
    apellido_cliente: String,
    mail: {
        tpye: String,
        required: true,
        trim: true,
        unique: true
    },
    password: password,
    rep_password: password

})

module.exports = model('Users', clientSchema);