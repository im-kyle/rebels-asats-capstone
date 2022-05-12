/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('awards').del()
  await knex('requirements').del()
  await knex('requirements').insert([
    //Rank Categories
    {afscs_code: null, rank_category: 'JE', demographic_id: null},
    {afscs_code: null, rank_category: 'NCO', demographic_id: null},
    {afscs_code: null, rank_category: 'SNCO', demographic_id: null},
    {afscs_code: null, rank_category: 'CGO', demographic_id: null},
    {afscs_code: null, rank_category: 'FGO', demographic_id: null},
    //Gender/Ethnicities/Race
    {afscs_code: null, rank_category: null, demographic_id: 1},
    {afscs_code: null, rank_category: null, demographic_id: 2},
    {afscs_code: null, rank_category: null, demographic_id: 3},
    {afscs_code: null, rank_category: null, demographic_id: 4},
    //AFSCS
    {afscs_code: '8B000', rank_category: null, demographic_id: null},
    {afscs_code: '8B100', rank_category: null, demographic_id: null},
    {afscs_code: '8F000', rank_category: null, demographic_id: null},
    {afscs_code: '8G000', rank_category: null, demographic_id: null},
    {afscs_code: '9T200', rank_category: null, demographic_id: null},
    {afscs_code: '9T100', rank_category: null, demographic_id: null}
  ]);
};