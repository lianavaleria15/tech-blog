const { Router } = require("express");

const { login, signIn, logout } = require("../../controllers/auth");

const router = Router();

router.post("/login", login);

router.post("/signIn", signIn);

router.post("/logout", logout);

module.exports = router;
