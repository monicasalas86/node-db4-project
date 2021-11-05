exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Avocado Toast'},
    {recipe_name: 'Honey Oatmilk Coffee'}
  ])
};
