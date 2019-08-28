const errors = require('../../errors');

const album = (resolve, root, args, context) => {
  const { user } = context;
  if (!user) {
    throw errors.unauthorizedError('unauthorized token');
  }
  return resolve(root, args, { user });
};

module.exports = {
  queries: {
    album
  }
};
