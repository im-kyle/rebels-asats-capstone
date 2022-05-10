/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('requirements', table => {
    table.increments('id');
    table.string('afscs_code');
    table.foreign('afscs_code').references('afscs.code');
    table.string('rank_category', 25);
    table.string('demographic', 250);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.alterTable('requirements', table => {
    table.dropForeign('afscs_code')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('requirements');
  })
};
