exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_progression', (table) => {
      table.dateTime('last_crate_awarded_at');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_progression', (table) => {
      table.dropColumn('last_crate_awarded_at');
    }),
  ]);
};
