const { makeExecutableSchema } = require('graphql-tools'),
  { applyMiddleware } = require('graphql-middleware'),
  ConstraintDirective = require('graphql-constraint-directive'),
  types = require('./types'),
  inputs = require('./inputs'),
  users = require('./users'),
  albums = require('./albums'),
  healthCheck = require('./healthCheck');

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
      ...users.mutations,
      ...albums.mutations
    },
    Subscription: {
      ...users.subscriptions
    },
    Album: {
      ...albums.typeResolvers
    }
  },
  schemaDirectives: {
    constraint: ConstraintDirective
  }
});

const middlewares = {
  Query: {
    ...albums.middlewares.queries
  }
};

const schemaWithMiddleware = applyMiddleware(schema, middlewares);

module.exports = schemaWithMiddleware;
