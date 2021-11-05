exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'bread'},
    {ingredient_name: 'avocado'},
    {ingredient_name: 'nutritional yeast'},
    {ingredient_name: 'everything bagel seasoning'},
    {ingredient_name: 'crushed red peppers'},
    {ingredient_name: 'coffee'},
    {ingredient_name: 'raw honey'},
    {ingredient_name: 'oatmilk'},
  ])
};