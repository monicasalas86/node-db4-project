const db = require('../../data/db-config')

const getAll = () => {
    return db('recipes')
}

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .join('steps as st', 'r.recipe_id', 'st.recipe_id')
        .where('r.recipe_id', recipe_id)
        .select('r.*', 'st.step_id', 'st.step_number', 'st.step_instructions')

    const result = {
        recipe_id: Number(recipe_id),
        recipe_name: rows[0].recipe_name,
        steps: rows.map((item) => {
            return {
                step_id: item.step_id,
                step_number: item.step_number,
                step_instruction: item.step_instruction,
            }
        })
    }
    return result
}

module.exports = {
    getAll,
    getRecipeById
}