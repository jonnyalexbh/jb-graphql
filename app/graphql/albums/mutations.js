const { gql } = require('apollo-server'),
  { buyAlbum } = require('../albums/resolvers');

module.exports = {
  mutations: { buyAlbum },
  schema: gql`
    extend type Mutation {
      buyAlbum(albumId: ID!): Album!
    }
  `
};
