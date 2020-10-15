const ErrorResponse = require("../utils/errorResponse");
module.exports = errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // Mongoose bad objId
  if (err.name === "CastError") {
    error = new ErrorResponse("Resource not found!", 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error = new ErrorResponse("Duplicate field value entered", 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error"
  });
};
