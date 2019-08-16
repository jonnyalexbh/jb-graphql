const axios = require('axios');
const albumsFactory = require('../factories/album');
const photosFactory = require('../factories/photos');

jest.mock('axios');

exports.getAlbum = axios.get
  .mockImplementationOnce(() => Promise.resolve({ status: 200, data: albumsFactory.oneAlbum }))
  .mockImplementationOnce(() => Promise.resolve({ status: 200, data: photosFactory.allPhotos }));
