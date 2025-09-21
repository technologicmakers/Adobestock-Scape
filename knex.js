const knexLib = require('knex');
const path = require('path');
const knex = knexLib({
  client: 'sqlite3',
  connection: { filename: path.join(__dirname, 'data.sqlite') },
  useNullAsDefault: true
});

async function initDb() {
  const hasUsers = await knex.schema.hasTable('users');
  if (!hasUsers) {
    await knex.schema.createTable('users', t => {
      t.increments('id').primary();
      t.string('name');
      t.string('email').unique();
      t.string('password_hash');
      t.timestamps(true, true);
    });
  }
  const hasPhotos = await knex.schema.hasTable('photos');
  if (!hasPhotos) {
    await knex.schema.createTable('photos', t => {
      t.increments('id').primary();
      t.integer('user_id').references('id').inTable('users');
      t.string('title');
      t.text('description');
      t.string('tags');
      t.string('file_path');
      t.integer('downloads').defaultTo(0);
      t.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
}

module.exports = { initDb, knex };
