/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('fb_uid');
        table.string('first_name', 250);
        table.string('last_name', 250);
        table.string('middle_initial', 1);
        table.string('rank_grade', 10);
        table.string('rank_category', 4);
        table.integer('afsc_id')
        table.foreign('afsc_id').references('afscs.id');
        table.string('duty_title', 128);
        table.string('majcom_foa_dru', 25);
        table.string('phone_dsn', 15);
        table.string('phone_comm', 15);
        table.integer('unit_id', 15);
        table.boolean('is_admin');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('users', table => {
      table.dropForeign('afsc_id');
    })
    .then(function() {
      return knex.schema.dropTableIfExists('users');
    })
};