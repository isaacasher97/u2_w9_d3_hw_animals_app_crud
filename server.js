//Import Dependencies 
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT;
const methodOverride = require('method-override');
const Animal = require('./animal');

//MIDDLEWARE
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));


//ROUTES
app.get("/", (req, res) => {
    res.send('server is running')
})

app.get("/animals", async (req, res) => {
    const allAnimals = await Animal.find({})
    res.render('animals/index.ejs', { animals: allAnimals})
})

//LISTENER
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})