exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_progression', (table) => {
      table.integer('loss_streak').notNullable().defaultTo(knex.raw('0'));
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_progression', (table) => {
      table.dropColumn('loss_streak');
    }),
  ]);
};
