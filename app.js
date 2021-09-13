const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://EquipoBedu:equipobedupassword@cluster0.5egal.mongodb.net/BeduSocial?retryWrites=true&w=majority');
mongoose.set("debug", true)

require('./models/User')
require('./models/Post')
require('./models/Course')

app.use('/v1', require('./routes'))

const PORT = 4001; 
app.listen(PORT, () =>{
    console.log(`Server is listening on port: ${PORT}`);
});