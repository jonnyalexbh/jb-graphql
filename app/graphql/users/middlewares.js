const errors = require('../../errors'),
  { EMAIL_REGEX, PASSWORD_REGEX } = require('../../constants');

exports.createUser = (resolve, root, args) => {
  const { user } = args;

  if (!EMAIL_REGEX.test(user.email)) {
    throw errors.validation('email is not valid or does not belong to the wolox domain');
  }

  if (!PASSWORD_REGEX.test(user.password)) {
    throw errors.validation('password must have at least 8 alphanumeric characters.');
  }

  return resolve(root, args);
};
