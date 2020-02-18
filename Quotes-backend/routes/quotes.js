const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');
const Categories = require('../models/category');



// Paginated
router.get('/limit', paginatedResults(Quote), (req, res) => {
    console.log("aa")
    res.json(res.paginatedResults)
})

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
        author: req.body.author,
        category: req.body.category
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
        res.quote.title = req.body.title
    }
    if (req.body.quoteText != null) {
        res.quote.quoteText = req.body.quoteText
    }
    if (req.body.author != null) {
        res.quote.author = req.body.author
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

