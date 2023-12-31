const validateBody = require("./validateBody");
module.exports = { validateBody };
const validateFavorite = require("./validateFavorite");
const handleMongooseError = require("./handleMongooseError");
const isValidId = require("./isValidId");

module.exports = {
  validateBody,
  validateFavorite,
  handleMongooseError,
  isValidId,
};