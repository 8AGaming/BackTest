// With God's Help
const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.get("/users/", userController.getUsers);
// router.get("/users/:id", userController.getUserById);
router.post("/users/login", userController.logIn);
router.post("/users/signup", userController.signUp);

module.exports = router;
