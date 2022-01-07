const { Router } = require("express");

//import controller fs
const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderBlog,
} = require("../../controllers/view/publicControllers");

const router = Router();

router.get("/login", renderLoginPage);

router.get("/signup", renderSignupPage);

router.get("/blogs/:id", renderBlog);

router.get("/", renderHomePage);

module.exports = router;
