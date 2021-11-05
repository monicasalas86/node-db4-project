exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 128)
                .notNullable()
                .unique()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number')
                .notNullable()
                .unsigned()
            table.string('step_instructions', 500)
                .notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
            
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 128)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
