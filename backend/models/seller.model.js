const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nombre_vendedor: {type: String,required: true},
    apellido_vendedor: {type: String,required: true},
    mail_vendedor: {type: String,required: true, unique:true},
    password_vendedor: {type: String,required: true},
    rep_pw_vendedor: {type: String,required: true},
},{
        timestamps: true,
})

const Seller = mongoose.model('Seller', clientSchema)

module.exports = Seller;