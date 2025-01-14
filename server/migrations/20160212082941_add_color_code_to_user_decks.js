exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_decks', (table) => {
      table.integer('color_code').notNullable().defaultTo(knex.raw('0'));
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_decks', (table) => {
      table.dropColumn('color_code');
    }),
  ]);
};
