const express = require("express");
const { userRegister, loginUser } = require("../Controller/userController");
const router = express.Router();

router.route("/register").post(userRegister);
router.route("/login").post(loginUser);

module.exports = router;
