const mongoose = require('./connection');

const {Schema, model} = mongoose;

const animalSchema = new Schema({
    species: String,
    location: String,
    extinct: Boolean,
    lifeExpectancy: Number,
    img: String
});

const Animal = model('animals', animalSchema);

module.exports = Animal;