const { Blog, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({ include: { model: User } });

    const blogs = allBlogs.map((blog) => blog.get({ plain: true }));

    return res.render("homepage", { blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};

const renderDashboard = (req, res) => {
  return res.render("dashboard");
};

const renderLoginPage = (req, res) => {
  // return res.render("login");
  res.send("login");
};

const renderSignupPage = (req, res) => {
  return res.render("signup");
};

const renderBlog = (req, res) => {
  return res.render("single-blog");
};

module.exports = {
  renderHomePage,
  renderDashboard,
  renderLoginPage,
  renderSignupPage,
  renderBlog,
};
