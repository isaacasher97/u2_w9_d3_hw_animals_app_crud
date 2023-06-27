//////////////////////////////////////
//Dependencies
/////////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')

//////////////////////////////////////
//Appication Object
/////////////////////////////////////
const app = express()

//////////////////////////////////////
//Middleware
/////////////////////////////////////
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('public'))

//////////////////////////////////////
//Routes + Routers
/////////////////////////////////////
app.get("/", (req, res) => {
    res.send('server is working')
})



//////////////////////////////////////
//Listener
/////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})