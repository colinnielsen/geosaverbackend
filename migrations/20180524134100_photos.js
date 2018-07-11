exports.up = function (knex, Promise) {
  return knex.schema.createTable('photos', table => {
    table.increments()
    table.text('picName')
    table.text('picUrl')
    table.text('coords')
    table.integer('madeby_id').references('users.id').onDelete('cascade')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('photos')
};
