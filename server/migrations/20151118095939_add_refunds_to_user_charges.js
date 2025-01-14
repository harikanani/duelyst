exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_charges', (table) => {
      table.dateTime('refunded_at');
      table.string('memo');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('user_charges', (table) => {
      table.dropColumn('refunded_at');
      table.dropColumn('memo');
    }),
  ]);
};
