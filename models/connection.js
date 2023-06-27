require('dotenv').config()
const mongoose = require('mongoose');

//Establish connection
mongoose.connect(process.env.DATABASE_URL);


//Connection event 
mongoose.connection
.on("open", () => {console.log('Connected to Mongo')})
.on("close", () => {console.log('Disconnected to Mongo')})
.on("error", (err) => {console.log(err.message)});

//Export the mongoose object
module.exports = mongoose