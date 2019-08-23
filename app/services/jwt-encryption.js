const jwt = require('jwt-simple'),
  config = require('../../config'),
  { secret_key } = config.common.jwt,
  logger = require('../logger');

exports.generateToken = user => {
  const tokenPayload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };
  return jwt.encode(tokenPayload, secret_key);
};

exports.verifyToken = token => {
  try {
    return jwt.decode(token, secret_key);
  } catch (error) {
    logger.error(error);
    return null;
  }
};
