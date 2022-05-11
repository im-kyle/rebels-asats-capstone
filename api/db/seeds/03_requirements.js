/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('awards').del()
  await knex('requirements').del()
  await knex('requirements').insert([
    {afscs_code: '5C0X1-K', rank_category: 'Junior Enlisted', demographic: 'Age'},
    {afscs_code: '5C0X1-C', rank_category: 'NCO', demographic: 'Religion'},
    {afscs_code: '5C0X1-S', rank_category: 'SNCO', demographic: 'Ethnicity'},
    {afscs_code: '17S', rank_category: 'CGO', demographic: 'Gender'},
    {afscs_code: '17D', rank_category: 'FGO', demographic: 'Gender'}
  ]);
};
