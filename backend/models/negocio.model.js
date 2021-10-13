const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const NegocioSchema = new Schema({
    nombre_negocio: {type: String,required: true},
    tipo_negocio:   {type: String,required: true},
    mail_vendedor:  {type: String,required: true, unique:true},
},{
        timestamps: true,
})

const Negocio = mongoose.model('Client', NegocioSchema)

module.exports = Negocio;