const mongoose = require('./connection');
const Animal = require('./animal');

mongoose.connection.on('open', async () => {
 //1. ceate entries into db usting the startFruits
 //1a. in order to do this, we need to delete everything
 await Animal.deleteMany();

//1b. then using startFruits, we will insert that into the db
const startAnimals = [
    { species: "Giant Panda", location: "Central China", extinct: false, lifeExpectancy: 20, img: "https://i.imgur.com/HvnRQF5.jpg" },
    { species: "Wolf", location: "Eurasia", extinct: false, lifeExpectancy: 8, img: "https://i.imgur.com/JzccRzl.jpg" },
    { species: "Sea Otter", location: "Northern Japan", extinct: false, lifeExpectancy: 15, img: "https://i.imgur.com/1odieq8.jpg" },
];
await Animal.create(startAnimals);
//2. we are going to close the connection
mongoose.connection.close();


});