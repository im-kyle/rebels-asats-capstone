/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('award_packages').del()
  await knex('users_mentors').del()
  await knex('users').del()
  await knex('awards').del()
  await knex('requirements').del()
  await knex('afscs').del()
  await knex('afscs').insert([
    {code: '5C0X1-K', title: 'Cybersecurity Analyst'},
    {code: '5C0X1-C', title: 'Cyber Operations'},
    {code: '5C0X1-S', title: 'Systems Administrator'},
    {code: '17S', title: 'Cyberspace Effects'},
    {code: '17D', title: 'Cyberspace Operations'},
    
    {code: '8B000', title: 'Military Training Instructor'},
    {code: '8B100', title: 'Military Training Leader'},
    {code: '8G000', title: 'Honor Guard'},
    {code: '8F000', title: 'First Sergeant'},
    {code: '9T200', title: 'Pre-Cadet'},
    {code: '9T100', title: 'Officer Trainee'}
  ]);
};
