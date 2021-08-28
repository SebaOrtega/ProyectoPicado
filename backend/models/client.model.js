const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nombre_cliente: {type: String,required: true},
    apellido_cliente: {type: String,required: true},
    mail: {type: String,required: true, unique:true},
    password: {type: String,required: true},
    rep_pw: {type: String,required: true},
},{
        timestamps: true,
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;