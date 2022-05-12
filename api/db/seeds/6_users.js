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
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Kyle', last_name: 'Horne', middle_initial: 'S', rank_grade: 'Sgt', afsc_id: 1, duty_title: 'Cybersecurity Analyst', majcom_foa_dru: 'DEL 6', phone_dsn: '276-1093', phone_comm: '(805) 606-1093', unit_id: 2, demographic_id: null,  is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Nathan', last_name: 'Johnston', middle_initial: 'S', rank_grade: '2Lt', afsc_id: 2, duty_title: 'Cyberspace Effects', majcom_foa_dru: 'DEL 6', phone_dsn: '566-7221', phone_comm: '719-567-7221', unit_id: 1, demographic_id: null,  is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Charles', last_name: 'Fisher', middle_initial: 'X', rank_grade: 'X', afsc_id: 3, duty_title: 'Cyber Operations', majcom_foa_dru: 'DEL 6', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 1, demographic_id: null, is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Andrew', last_name: 'Gorospe', middle_initial: 'X', rank_grade: 'X', afsc_id: 4, duty_title: 'Cyberspace Operations', majcom_foa_dru: 'DEL 6', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 3, demographic_id: null,  is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'David', last_name: 'Clay', middle_initial: 'X', rank_grade: 'X', afsc_id: 5, duty_title: 'System Administrator', majcom_foa_dru: 'DEL 6', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: null,  is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Martha', last_name: 'Blackburn', middle_initial: 'Q', rank_grade: 'X', afsc_id: 9, duty_title: 'First Sergeant', majcom_foa_dru: 'DEL 13', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: 4, is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'George', last_name: 'Velasquez', middle_initial: 'P', rank_grade: 'X', afsc_id: 6, duty_title: 'Military Training Instructor', majcom_foa_dru: 'DEL 13', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: 1, is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Randy', last_name: 'Marsh', middle_initial: 'L', rank_grade: 'X', afsc_id: 7, duty_title: 'Military Training Leader', majcom_foa_dru: 'DEL 13', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: 2, is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Allie', last_name: 'Zhang', middle_initial: 'Q', rank_grade: 'X', afsc_id: 8, duty_title: 'Honor Guard', majcom_foa_dru: 'DEL 13', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: 3, is_admin: true},
    {fb_uid: '123ABCIDKIDCFBUID', first_name: 'Dani', last_name: 'Fisher', middle_initial: 'Q', rank_grade: 'X', afsc_id: 10, duty_title: 'Pre-Cadet Assigned', majcom_foa_dru: 'DEL 13', phone_dsn: 'XXX-XXXX', phone_comm: 'XXX-XXX-XXXX', unit_id: 4, demographic_id: null, is_admin: true}
  ]);
};
