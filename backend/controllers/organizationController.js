const Organization = require("../models/Organization");
const factory = require("./handlerFactory");

exports.list = factory.list(Organization, {
  path: "employees",
  select: "name email role",
});
exports.read = factory.read(Organization, {
  path: "employees",
  select: "name email role",
});
exports.create = factory.create(Organization);
exports.update = factory.update(Organization);
exports.remove = factory.remove(Organization);
