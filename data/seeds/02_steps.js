exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      step_number: 1,
      step_instructions: 'toast two slices of bread',
      recipe_id: 1
    },
    {
      step_number: 2,
      step_instructions: 'cut avocado in half and smash the inside with a fork',
      recipe_id: 1
    },
    {
      step_number: 3,
      step_instructions: 'when bread is done, spread the avocado evenly on both slices of bread',
      recipe_id: 1
    },
    {
      step_number: 4,
      step_instructions: 'sprinkle nutrional yeast, everything bagel seasoning, and crushed red pepper',
      recipe_id: 1
    },
    {
      step_number: 1,
      step_instructions: 'brew coffee',
      recipe_id: 2
    },
    {
      step_number: 2,
      step_instructions: 'dissolve 1 tablespoon of raw honey into coffee',
      recipe_id: 2
    },
    {
      step_number: 3,
      step_instructions: 'add oatmilk and swirl',
      recipe_id: 2
    },
    {
      step_number: 4,
      step_instructions: 'optional step: sprinkle cinammon for extra coziness',
      recipe_id: 2
    }
  ])
};