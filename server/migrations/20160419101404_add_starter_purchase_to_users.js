exports.up = function (knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.boolean('has_purchased_starter_bundle');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('has_purchased_starter_bundle');
  });
};
