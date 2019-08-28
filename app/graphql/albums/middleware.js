const { checkAuthenticated } = require('../../helpers');

const buyAlbum = (resolve, root, args, context) => {
  const { user } = context;
  checkAuthenticated(user);
  return resolve(root, args, { user });
};

module.exports = {
  mutations: {
    buyAlbum
  }
};
