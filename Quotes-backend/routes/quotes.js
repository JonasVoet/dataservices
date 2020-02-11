const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

// Getting all qoutes
router.get('/', async (req, res) => {
    try {
        const qoutes = await Quote.find().populate("category");
        res.json(qoutes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Getting one
router.get('/:id', getQuote, (req, res) => {
    res.json(res.quote)
});

// Creating one
router.post('/', async (req, res) => {
    const quote = new Quote({
        title: req.body.title,
        quoteText: req.body.quoteText,
        author: req.body.author
    })
    try {
        const newQuote = await quote.save();
        const category = await Categories.findById(req.body.category).populate("qoutes");
        if (category) {
            category.quotes.push(newQuote);
            category.save();
            newQuote.category = category;
            res.status(201).json(newQuote)
        } else {
            throw `Category with id: ${req.body.category} does not exist.`;
        }

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Updating One
router.patch('/:id', getQuote, async (req, res) => {
    if (req.body.title != null) {
        res.joke.title = req.body.title
    }
    if (req.body.quoteText != null) {
        res.joke.quoteText = req.body.quoteText
    }
    if (req.body.author != null) {
        res.joke.author = req.body.author
    }
    try {
        const updatedQuote = await res.quote.save()
        res.json(updatedQuote)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});


// Deleting One
router.delete('/:id', getQuote, async (req, res) => {
    try {
        await res.quote.remove()
        res.json({ message: 'Deleted Quote' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Search
router.get('/search/:searchWord', async (req, res) => {
    let searchWord = req.params.searchWord;

    try {


        const quotes = await Quote.find({
            $or: [
                { "quoteText": { "$regex": searchWord, "$options": "i" } },
                { "author": { "$regex": searchWord, "$options": "i" } },
                { "title": { "$regex": searchWord, "$options": "i" } }
            ]
        })
        res.json(quotes);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getQuote(req, res, next) {
    let quote
    try {
        quote = await Quote.findById(req.params.id)
        if (quote == null) {
            return res.status(404).json({ message: 'Cannot find quote' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.quote = quote
    next()
}

module.exports = router

