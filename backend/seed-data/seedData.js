const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("../models/User");
const Organization = require("../models/Organization");

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

// READ JSON FILE
const organizations = JSON.parse(
  fs.readFileSync(`${__dirname}/organizations.json`, "utf-8")
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    await Organization.create(organizations);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Organization.deleteMany();
    await User.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
