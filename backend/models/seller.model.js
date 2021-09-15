const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nombre_vendedor:    {type: String,required: true},
    apellido_vendedor:  {type: String,required: true},
    mail_vendedor:      {type: String,required: true, unique:true},
    password_vendedor:  {type: String,required: true},
},{
        timestamps: true,
})

clientSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
            if(err){
                next(err);
            }else{
                document.password=hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

clientSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

const Seller = mongoose.model('Seller', clientSchema)

module.exports = Seller;