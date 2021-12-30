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

//does this go here? or after /homepage and /dashboard - ask Suraj
router.use("/blogs", singleBlogRoutes);
