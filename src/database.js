const mongoose = require('mongoose');


//Conectarse a Mongodb Atlas:

const usuario = 'Admin';

const password = '1234';

const dbName = 'software_solidario';

const uri = `mongodb+srv://${usuario}:${password}@cluster0.y8hkh.mongodb.net/${dbName}?retryWrites=true&w=majority;
`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

/*Conectarse localmente:
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

connection.once('open', () =>{
  console.log('DB is connected  )
})

*/



