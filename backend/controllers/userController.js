const User = require("../models/User");
const factory = require("./handlerFactory");

exports.list = factory.list(User);
exports.read = factory.read(User);
exports.update = factory.update(User);
exports.remove = factory.remove(User);

exports.create = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined please use /signup instead",
  });
};
