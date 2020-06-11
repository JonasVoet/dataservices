const express = require('../node_modules/express');
const router = express.Router();
const Riddle = require('../models/riddle.model');

// Getting all riddles
router.get('/', async (req, res) => {
    try {
        const riddles = await Riddle.find();
        res.json(riddles)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Getting one
router.get('/:id', getRiddle, (req, res) => {
    res.json(res.riddle)
});

// Creating one
// http://localhost:3000/riddles/admin
router.post('/admin', async (req, res) => {
    console.log(req.body);
    const riddle = new Riddle({
        riddleText: req.body.riddleText,
        answer: req.body.answer
    })
    try {
        const newRiddle = await riddle.save();
        res.status(201).json(newRiddle);
        
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// Updating One
router.patch('/admin/:id', getRiddle, async (req, res) => {
    if (req.body.riddleText != null) {
        res.riddle.riddleText = req.body.riddleText
    }
    if (req.body.answer != null) {
        res.riddle.answer = req.body.answer
    }
    try {
        const updatedRiddle = await res.riddle.save()
        res.json(updatedRiddle)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// Deleting one
router.delete('/:id', getRiddle, async (req, res) => {
    try {
        await res.riddle.remove()
        res.json({message: 'Deleted Riddle'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

async function getRiddle(req, res, next) {
    let riddle
    try {
        riddle = await Riddle.findById(req.params.id)
        if (riddle == null) {
            return res.status(404).json({message: 'Cannot find riddle'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.riddle = riddle
    next();
}

module.exports = router;