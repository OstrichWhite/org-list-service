const express = require("express");
const {
  list,
  create,
  read,
  update,
  remove,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

router.route("/me").get(getMe, read);
router.route("/").get(list).post(create);
router.route("/:id").get(read).put(update).delete(remove);

module.exports = router;
