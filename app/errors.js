const { ApolloError } = require('apollo-server');

const createError = (message, statusCode) => new ApolloError(message, statusCode);

const DEFAULT_ERROR = 500,
  BAD_REQUEST = 400,
  SIGN_IN_ERROR = 401,
  EMAIL_EXIST_ERROR = 422,
  ALREADY_EXISTS = 409,
  UNAUTHORIZED = 401,
  DATABASE_ERROR = 503;

exports.defaultError = message => createError(message, DEFAULT_ERROR);
exports.badRequest = message => createError(message, BAD_REQUEST);
exports.emailExistError = message => createError(message, EMAIL_EXIST_ERROR);
exports.signInError = message => createError(message, SIGN_IN_ERROR);
exports.unauthorizedError = message => createError(message, UNAUTHORIZED);
exports.alreadyExistsError = message => createError(message, ALREADY_EXISTS);
exports.externalApiError = message => createError(message, DEFAULT_ERROR);
exports.databaseError = message => createError(message, DATABASE_ERROR);
