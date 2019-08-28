const { queries, schema: queriesSchema } = require('./queries'),
  { mutations, schema: mutationSchema } = require('./mutations'),
  { typeResolvers } = require('./resolvers'),
  middlewares = require('./middlewares');

module.exports = {
  queries,
  mutations,
  middlewares,
  typeResolvers,
  schemas: [queriesSchema, mutationSchema]
};
