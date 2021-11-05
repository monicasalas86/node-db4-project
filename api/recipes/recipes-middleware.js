const Recipes = require('./recipes-model')

const checkRecipeId = async (req, res, next) => {
    try{
        const validRecipeId = await db('recipes')
            .where('recipe_id', req.params.recipe_id)
            .first()
        
        if(!validRecipeId) {
            next({
                status: 404,
                message: `recipe with recipe_id of ${req.params.recipe_id} not found`
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = checkRecipeId