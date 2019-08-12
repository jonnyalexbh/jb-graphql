const { makeExecutableSchema } = require('graphql-tools'),
  types = require('./types'),
  inputs = require('./inputs'),
  users = require('./users'),
  albums = require('./albums'),
  healthCheck = require('./healthCheck'),
  { applyMiddleware } = require('graphql-middleware');

const typeDefs = [types, inputs, ...users.schemas, ...healthCheck.schemas, ...albums.schemas];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...users.queries,
      ...healthCheck.queries,
      ...albums.queries
    },
    Mutation: {
      ...users.mutations
    },
    Subscription: {
      ...users.subscriptions
    }
  }
});

const middlewares = {
  Mutation: {
    ...users.middlewares
  }
};

module.exports = applyMiddleware(schema, middlewares);
