const express = require('express')
const router = express.Router()
const Joke = require('../models/joke')



// Paginated
router.get('/limit', paginatedResults(Joke), (req, res) => {
    console.log("aa")
    res.json(res.paginatedResults)
})

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

// Search
router.get('/search/:searchWord', async (req, res) => {
    let searchWord = req.params.searchWord;

    try {


        const jokes = await Joke.find({
            $or: [
                { "jokeText": { "$regex": searchWord, "$options": "i" } },
                { "title": { "$regex": searchWord, "$options": "i" } }
            ]
        })
        res.json(jokes);

    } catch (err) {
        res.status(500).json({ message: err.message });
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



function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const length = await model.countDocuments();

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        let results = {}

        // if (endIndex < await model.countDocuments().exec()) {
        //     results.next = {
        //         page: page + 1,
        //         limit: limit,
        //     }
        // }

        // if (startIndex > 0) {
        //     results.previous = {
        //         page: page - 1,
        //         limit: limit
        //     }
        // }
        try {
            results = {
                length,
                results: await model.find().limit(limit).skip(startIndex).exec()
            }
            res.paginatedResults = results
            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}




module.exports = router