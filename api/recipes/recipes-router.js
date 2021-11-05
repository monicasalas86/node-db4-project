const express = require('express')
const {checkRecipeId} = require('./recipes-middleware')
const Recipes = require('./recipes-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.getAll()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
    const {recipe_id} = req.params

    Recipes.getRecipeById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

module.exports = router