var knex = require('../connection')
var authUtils = require('../utils/auth')
module.exports = {
  getUserById: function (id) {
    return knex('users').select().where('id', id)
  },
  getUserByUsername: function (username) {
    return knex('users').select().where('username', username).first()
  },
  getPhotosByUserId: function (id) {
    return knex('photos')
      .where('madeby_id', id)
  },
  addPhoto: function (id, data) {
    return knex('photos').where('madeby_id', id).insert(data).returning('*')
  },
  create(body) {
    return knex('users').insert(
      {
        username: body.username,
        password: authUtils.hashPassword(body.password)
      }).returning('*')
  },
  deletePhoto(id) {
    return knex('photos').where('id', id).del()
  },
  updatePhoto(id, newData) {
    return knex('photos').where('id', id).update(newData)
  }
};
