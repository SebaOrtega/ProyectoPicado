const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('DB is connected');
})

const clientsRouters = require('./routes/clients');
const sellersRouters = require('./routes/sellers');
const negociosRouters = require('./routes/negocio');


app.use('/negocio', negociosRouters)
app.use('/clients', clientsRouters);
app.use('/sellers', sellersRouters)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
