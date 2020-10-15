module.exports = log = (req, res, next) => {
  const { method, protocol, originalUrl } = req;
  console.log(`${method} ${protocol}://${req.get("host")}${originalUrl}`);

  next();
};
