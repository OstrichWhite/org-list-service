const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const doc = await User.find();

  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      data: doc,
    },
  });
};
