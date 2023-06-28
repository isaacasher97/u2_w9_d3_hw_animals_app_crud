//Import Dependencies 
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT;
const methodOverride = require('method-override');


//MIDDLEWARE
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));


//ROUTES
app.get("/", (req, res) => {
    res.send('server is running')
})



//LISTENER
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})