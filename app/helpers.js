const bcrypt = require('bcryptjs'),
  salt_sync = require('../config').encryption,
  { MAP_ORDER } = require('./constants');

exports.encryptPassword = password =>
  new Promise((resolve, reject) =>
    bcrypt.genSalt(salt_sync, (error, salt) => {
      if (!error) {
        return bcrypt.hash(password, salt, (err, hash) => {
          if (!err) {
            resolve(hash);
          }
          reject(err);
        });
      }
      return reject(error);
    })
  );

exports.checkPassword = (password, hashed) => bcrypt.compareSync(password, hashed);

exports.paginate = (data, params) => {
  const { offset, limit } = params;
  return data.slice(offset, offset + limit);
};

exports.order = (data, sortKey, sortOrder) => {
  const ordering = MAP_ORDER[sortOrder];
  const sorting = (x, y) => (x >= y ? 1 : -1) * ordering;
  return data.sort((x, y) => sorting(x[sortKey], y[sortKey]));
};

exports.search = (data, filter, value) => data.filter(album => album[filter].toString() === value);

exports.changeUserIdByArtist = album => {
  album.artist = album.userId;
  delete album.userId;
  return album;
};
