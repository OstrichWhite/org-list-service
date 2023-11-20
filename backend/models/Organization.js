const mongoose = require("mongoose");
const validator = require("validator");
const organizationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide organization name."],
  },
  address: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
