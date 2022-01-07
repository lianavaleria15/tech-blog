const { Router } = require("express");

//import controller fs
const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
} = require("../../controllers/view/privateControllers");

const router = Router();

router.get("/dashboard", renderDashboard);

router.get("/add-blog", renderCreateBlog);

router.get("/edit-blog", renderEditBlog);

module.exports = router;
