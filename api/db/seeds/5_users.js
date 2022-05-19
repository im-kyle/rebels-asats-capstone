/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('award_packages').del()
  await knex('users_mentors').del()
  await knex('users').del()
  await knex('users').insert([
    {fb_uid: '4GiFuZ74l4hhjOIXUyplBcHYsz23', first_name: 'Kyle', last_name: 'Horne', middle_initial: 'S', rank_grade: 'Sgt', rank_category: 'NCO', afsc_id: 1, duty_title: 'Cybersecurity Analyst', majcom_foa_dru: 'DEL 6', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 2, is_admin: true},
    {fb_uid: 'fmq9fKGGruQpINoRTLV37KfwJRm1', first_name: 'Nathan', last_name: 'Johnston', middle_initial: 'S', rank_grade: '2Lt', rank_category: 'CGO', afsc_id: 2, duty_title: 'Cyberspace Effects', majcom_foa_dru: 'DEL 6', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 1, is_admin: true},
    {fb_uid: '869ztoRu34UKCSeiPBfUG6HoUit1', first_name: 'Charles', last_name: 'Fisher', middle_initial: 'M', rank_grade: 'Spc4', rank_category: 'JE', afsc_id: 6, duty_title: 'Military Training Instructor', majcom_foa_dru: 'DEL 6', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 1, is_admin: true},
    {fb_uid: 'NCmltjCDnaVKOrpaXPgetEvrqTw2', first_name: 'Andrew', last_name: 'Gorospe', middle_initial: 'X', rank_grade: 'Capt', rank_category: 'CGO', afsc_id: 4, duty_title: 'Cyberspace Operations', majcom_foa_dru: 'DEL 6', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 3, is_admin: true},
    {fb_uid: 'pikK11nG4ggAIgYrnROZssi4i472', first_name: 'David', last_name: 'Clay', middle_initial: 'X', rank_grade: 'GS-13', rank_category: 'CIV2', afsc_id: 8, duty_title: 'Honor Guard', majcom_foa_dru: 'DEL 6', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: '3wKho9S78CWHSuXbOosgXouydQz2', first_name: 'Martha', last_name: 'Blackburn', middle_initial: 'Q', rank_grade: 'SMSgt', rank_category: 'SNCO', afsc_id: 9, duty_title: 'First Sergeant', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: 'M2Uq5GDYddVRAGPdT7BGJtL6kmo2', first_name: 'George', last_name: 'Velasquez', middle_initial: 'P', rank_grade: 'Maj', rank_category: 'FGO', afsc_id: 7, duty_title: 'Military Training Leader', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: '1faMgmjsvZeB9ASISQAbHHOitGi2', first_name: 'Randy', last_name: 'Marsh', middle_initial: 'L', rank_grade: 'TSgt', rank_category: 'NCO', afsc_id: 7, duty_title: 'Military Training Leader', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: 'Q4lxq4dmm3cNEXifVnDKbHnSDi32', first_name: 'Allie', last_name: 'Zhang', middle_initial: 'Q', rank_grade: 'Sgt', rank_category: 'JE', afsc_id: 7, duty_title: 'Military Training Leader', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: 'LIAwS2MosCWWs4QV6S6Css7C8tZ2', first_name: 'John', last_name: 'Doe', middle_initial: 'H', rank_grade: 'Sgt', rank_category: 'JE', afsc_id: 7, duty_title: 'Military Training Leader', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true},
    {fb_uid: 'H0UvNECPG7Pxtq3j6sYb3Vss1oK2', first_name: 'Dani', last_name: 'Fisher', middle_initial: 'Q', rank_grade: '1Lt', rank_category: 'CGO', afsc_id: 10, duty_title: 'Pre-Cadet Assigned', majcom_foa_dru: 'DEL 13', phone_dsn: '555-5555', phone_comm: '555-555-5555', unit_id: 4, is_admin: true}
  ]);
  await knex('units').where("id", "=", 4).update({cc_user_id: 7})
};
