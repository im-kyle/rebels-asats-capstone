/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('awards').del()
  await knex('requirements').del()
  await knex('requirements').insert([
    //Rank Categories
    {afscs_code: null, rank_category: 'Junior Enlisted'}, //1
    {afscs_code: null, rank_category: 'NCO'}, //2
    {afscs_code: null, rank_category: 'SNCO'}, //3
    {afscs_code: null, rank_category: 'CGO'}, //4
    {afscs_code: null, rank_category: 'FGO'}, //5
    //AFSCS
    {afscs_code: '8B000', rank_category: null}, //6
    {afscs_code: '8B100', rank_category: null}, //7
    {afscs_code: '8F000', rank_category: null}, //8
    {afscs_code: '8G000', rank_category: null}, //9
    {afscs_code: '9T200', rank_category: null}, //10
    {afscs_code: '9T100', rank_category: null} //11
  ]);
};