/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_mentors').del()
  await knex('users_mentors').insert([
    {user_id: 8, mentor_id: 6},
    {user_id: 9, mentor_id: 6},
    {user_id: 10, mentor_id: 6},
    {user_id: 11, mentor_id: 6},
    {user_id: 11, mentor_id: 7},
    {user_id: 9, mentor_id: 8},
    {user_id: 10, mentor_id: 8}
  ]);
};
