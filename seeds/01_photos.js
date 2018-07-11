exports.seed = function (knex, Promise) {
  return knex('photos').del().then(function () {
    return knex('photos').insert([
      {
        id: 1,
        madeby_id: 1,
        picName: "South Colorado Shot",
        picUrl: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350',
        coords: '38.8339° N, 104.8214° W'
      },
      {
        id: 2,
        madeby_id: 1,
        picName: "Breckenridge weekend - 5/15",
        picUrl: 'http://www.therivermountainlodge.com/images/featured/featured-1.jpg',
        coords: '39.4817° N, 106.0384° W'
      }, {
        id: 3,
        madeby_id: 1,
        picName: "New Orleans Music Fest - 6/10/18",
        picUrl: 'http://www.poboyfest.com/files/images/music.jpg',
        coords: '29.9511° N, 90.0715° W'
      }, {
        id: 4,
        madeby_id: 1,
        picName: "Secret Mountain Spot 👀",
        picUrl: 'https://www.colorado.com/sites/default/files/styles/420x280/public/Needle-Mtn-View---300-dpi.jpg?itok=gaaT61-t',
        coords: '39.39277° N, 105.53584° W'
      }
    ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE photos_id_seq RESTART WITH 5;");
  });
};
