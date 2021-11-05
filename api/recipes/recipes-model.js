const db = require('../../data/db-config')

const getAll = () => {
    return db('recipes')
}

// function getRecipeById(id)

module.exports = {
    getAll
}