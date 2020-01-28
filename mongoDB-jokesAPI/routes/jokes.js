const express = require('express')
const router = express.Router()
const Joke = require('../models/joke')

// Getting all
router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find()
        res.json(jokes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getJoke, (req, res) => {
    res.json(res.joke)
})

// Creating one
router.post('/', async (req, res) => {
    const joke = new Joke({
        title: req.body.title,
        jokeText: req.body.jokeText
    })
    try {
        const newJoke = await joke.save()
        res.status(201).json(newJoke)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getJoke, async (req, res) => {
    if (req.body.title != null) {
        res.joke.title = req.body.title
    }
    if (req.body.jokeText != null) {
        res.joke.jokeText = req.body.jokeText
    }
    try {
        const updatedJoke = await res.joke.save()
        res.json(updatedJoke)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getJoke, async (req, res) => {
    try {
        await res.joke.remove()
        res.json({ message: 'Deleted Joke' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getJoke(req, res, next) {
    let joke
    try {
        joke = await Joke.findById(req.params.id)
        if (joke == null) {
            return res.status(404).json({ message: 'Cannot find joke' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.joke = joke
    next()
}

module.exports = router