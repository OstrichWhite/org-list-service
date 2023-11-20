const Organization = require("../models/Organization");
const factory = require("./handlerFactory");

exports.list = factory.list(Organization);
exports.read = factory.read(Organization);
exports.create = factory.create(Organization);
exports.update = factory.update(Organization);
exports.remove = factory.remove(Organization);
