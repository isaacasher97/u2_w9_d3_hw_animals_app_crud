const mongoose = require('./connection')

// ANIMAL SCHEMA - Definition or shapr of the data type

const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

// ANIMAL Model - Interface with the database for animals
const Animal = mongoose.model('animal', animalSchema)

//export the ANIMAL model
module.exports = Animal
