const authUtils = require('../utils/auth')


exports.seed = function (knex, Promise) {
  return knex('users').del().then(function () {
    return knex('users').insert([
      {
        id: 1,
        username: 'admin',
        password: authUtils.hashPassword('admin')
      },
      {
        id: 2,
        username: 'bobGuy',
        password: authUtils.hashPassword('spook')
      }
    ])
  }).then(() => {
    return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 3;");
  });
};