const express = require('express');
const Animal = require('../models/animal');

const router = express.Router();

router.get("/animals", async (req, res) => {
    const allAnimals = await Animal.find({})
    res.render(
        'animals/index.ejs',
        { animals: allAnimals}
    )
})

router.get("/new", (req, res) => {
    res.render('animals/new.ejs')
})


router.post('/animals', async (req, res) => {
    if(req.body.extinct === 'on'){
        req.body.extinct = true;
    }else{
        req.body.extinct = false;
    }

    await Animal.create(req.body);
    res.redirect('/animals')
    
})

module.exports = router;