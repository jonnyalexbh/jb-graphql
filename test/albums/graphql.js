const { gql } = require('apollo-server'),
  { DEFAULT_OFFSET, DEFAULT_LIMIT } = require('../../app/constants');

const getAlbum = id => gql`
  query {
    album(id: ${id}) {
      id
      title
      artist
      photos {
        id
        title
      }
    }
  }
`;

const getAlbums = params => {
  const { offset, limit } = params;
  return gql`
  query {
    albums(
      offset: ${offset || DEFAULT_OFFSET}, 
      limit: ${limit || DEFAULT_LIMIT}) {
      id
      title
      artist
      photos {
        id, title
      }
    }
  }
`;
};

module.exports = { getAlbum, getAlbums };
