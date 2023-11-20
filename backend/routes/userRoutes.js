const express = require("express");
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(list).post(create);
router.route("/:id").get(read).put(update).delete(remove);

module.exports = router;
