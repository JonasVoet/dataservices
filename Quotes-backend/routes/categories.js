const express = require('express');
const router = express.Router();
const Categories = require('../models/category');


// Getting all
router.get('/', async (req, res) => {

    const categories = await Categories.find().populate("quotes");
    res.send(categories);

})

// POST ONE
router.post("/", async (req, res) => {
    const category = new Categories(req.body);

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error })
    }
});



module.exports = router
