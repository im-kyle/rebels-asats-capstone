/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('demographics', table => {
        table.increments('id');
        table.boolean('is_female').unique();
        table.boolean('is_african_american').unique();
        table.boolean('is_asian_pacific_american').unique();
        table.boolean('is_hispanic').unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('demographics');
};