const { queries, schema: queriesSchema } = require('./queries'),
  { mutations, schema: mutationSchema } = require('./mutations'),
  { subscriptions, schema: subscriptionsSchema } = require('./subscriptions');
const middlewares = require('./middlewares');

module.exports = {
  queries,
  mutations,
  subscriptions,
  middlewares,
  schemas: [queriesSchema, mutationSchema, subscriptionsSchema]
};
