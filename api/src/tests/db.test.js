const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[env]
const knex = require('knex')(config)


beforeAll(() => console.log(config));
afterAll(() => knex.destroy());

describe('Database Structure:', () => {
    test('Should have a units table.', async () => {
        await knex.schema.hasTable('units')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have an SFSC table.', async () => {
        await knex.schema.hasTable('afscs')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have a demographics table.', async () => {
        await knex.schema.hasTable('demographics')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have an awards table.', async () => {
        await knex.schema.hasTable('awards')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have an award packages table.', async () => {
        await knex.schema.hasTable('award_packages')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have an users/mentors join table.', async () => {
        await knex.schema.hasTable('users_mentors')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have a users table.', async () => {
        await knex.schema.hasTable('users')
        .then(result => {
            expect(result).toBe(true);
        });
    });
    test('Should have a requirements table.', async () => {
        await knex.schema.hasTable('requirements')
        .then(result => {
            expect(result).toBe(true);
        });
    });
})

describe('Database Seeding', () => {
    test('Demographics should be seeded.', async () => {
        await knex.select('*').from('demographics').where('is_female', '=', 'true')
        .then(result => {
            expect(result[0].is_female).toBe(true);
        });
    });
    test('Units should be seeded.', async () => {
        await knex.select('*').from('units').where('name', '=', '61 CYS')
        .then(result => {
            expect(result[0].name).toBe('61 CYS');
        });
    });
    test('Requirements should be seeded.', async () => {
        await knex.select('*').from('requirements').where('afscs_code', '=', '8B100')
        .then(result => {
            expect(result[0].afscs_code).toBe('8B100');
        });
    });
    test('Awards should be seeded.', async () => {
        await knex.select('*').from('awards').where('title', '=', 'Junior Enlisted - Airman/Guardian of the Quarter')
        .then(result => {
            expect(result[0].requirements_id).toBe(1);
        });
    });
    test('SFSCs should be seeded.', async () => {
        await knex.select('*').from('afscs').where('code', '=', '5C0X1-K')
        .then(result => {
            expect(result[0].title).toBe('Cybersecurity Analyst');
        });
    });
    test('Users should be seeded.', async () => {
        await knex.select('*').from('users').where('last_name', '=', 'Horne')
        .then(result => {
            expect(result[0].first_name).toBe('Kyle');
        });
    });
    test('Award Packages should be seeded.', async () => {
        await knex.select('*').from('award_packages').where('user_id', '=', '5')
        .then(result => {
            expect(result[0].award_id).toBe(1);
        });
    });
});