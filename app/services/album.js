const axios = require('axios'),
  config = require('../../config'),
  base_uri = config.common.albumsApi.url,
  logger = require('../logger'),
  helpers = require('../helpers'),
  { DEFAULT_SORTKEY } = require('../constants');

exports.allAlbums = params => {
  const { sortField = DEFAULT_SORTKEY, sortOrder } = params.order || {};
  const { fieldFilter, valueFilter } = params.filter || {};
  return axios
    .get(`${base_uri}/albums`)
    .then(response => response.data)
    .then(albums => (fieldFilter ? helpers.search(albums, fieldFilter, valueFilter) : albums))
    .then(albums => helpers.order(albums, sortField, sortOrder))
    .then(albums => helpers.paginate(albums, params))
    .catch(error => {
      logger.error(error);
      throw new Error('Cannot fetch albums from external api');
    });
};

exports.albumById = id =>
  axios
    .get(`${base_uri}/albums/${id}`)
    .then(response => response.data)
    .catch(error => {
      logger.error(error);
      throw new Error('Cannot fetch album from external api');
    });

exports.photosByAlbumId = id =>
  axios
    .get(`${base_uri}/photos?albumId=${id}`)
    .then(response => response.data)
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot fetch photos from external api');
    });
