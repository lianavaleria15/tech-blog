const { Blog, User, Comment } = require("../../models");

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

const renderBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blogData = await Blog.findByPk(id, {
      include: [{ model: User }, { model: Comment, include: User }],
    });

    const blog = blogData.get({ plain: true });

    return res.render("single-blog", { blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to render single blog page" });
  }
};

module.exports = {
  renderHomePage,
  renderDashboard,
  renderLoginPage,
  renderSignupPage,
  renderBlog,
};
