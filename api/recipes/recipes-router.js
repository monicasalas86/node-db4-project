const express = require('express')
const Recipes = require('./recipes-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.getAll()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch(next)
})

module.exports = router