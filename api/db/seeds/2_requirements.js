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
    {afscs_code: null, rank_category: 'JE'}, //1
    {afscs_code: null, rank_category: 'NCO'}, //2 Non-Commissioned Officer
    {afscs_code: null, rank_category: 'SNCO'}, //3 Senior NCO
    {afscs_code: null, rank_category: 'CGO'}, //4 Company Grade Officer
    {afscs_code: null, rank_category: 'FGO'}, //5 Field Grade Officer
    //AFSCS
    {afscs_code: '8B000', rank_category: null}, //6 MTI
    {afscs_code: '8B100', rank_category: null}, //7 MTL
    {afscs_code: '8F000', rank_category: null}, //8 First Sergeant
    {afscs_code: '8G000', rank_category: null}, //9 Honor Guard
    {afscs_code: '9T200', rank_category: null}, //10 Pre-Cadet Assigned
    {afscs_code: '9T100', rank_category: null} //11 Officer Trainee
  ]);
};