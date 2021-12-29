const { Router } = require("express");

//import controller fs
const {
  renderHomePage,
  renderDashboard,
  renderLoginPage,
  renderSignupPage,
} = require("../../controllers/view/index");

const router = Router();

router.get("/homepage", renderHomePage);

router.get("/dashboard", renderDashboard);

router.get("/login", renderLoginPage);

router.get("/signup", renderSignupPage);

router.use("/blogs", singleBlogRoutes);
