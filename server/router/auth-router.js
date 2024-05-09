const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");
const validate = require("../middleware/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validator");


router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(validate(loginSchema), authcontrollers.login);

module.exports = router;
