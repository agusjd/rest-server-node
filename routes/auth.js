const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");

const router = Router();

router.post(
  "/",
  [
    check("userId", "user es obligatorio"),
    check("password", "password es obligatorio"),
  ],
  login
);
router.get("/", login);

module.exports = router;
