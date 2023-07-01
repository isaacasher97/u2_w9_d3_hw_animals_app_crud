//Import Dependencies 
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT;
const methodOverride = require('method-override');
const AnimalRouter = require('./controllers/animal')
const animals = require('./models/animal');

//MIDDLEWARE
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"))
app.use('/', AnimalRouter )

//LISTENER
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})