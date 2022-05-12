/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('demographics').del();
  await knex('requirements').del();
  await knex('users').del();
  await knex('demographics').insert([
    {is_hispanic: true, is_african_american: null, is_asian_pacific_american: null, is_female: null},
    {is_hispanic: null, is_african_american: true, is_asian_pacific_american: null, is_female: null},
    {is_hispanic: null, is_african_american: null, is_asian_pacific_american: true, is_female: null},
    {is_hispanic: null, is_african_american: null, is_asian_pacific_american: null, is_female: true}
  ]);
};