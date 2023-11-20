const mongoose = require("mongoose");
const dbConnect = () =>
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Something went wrong with Database"));

module.exports = dbConnect;
