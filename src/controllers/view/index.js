const renderHomePage = (req, res) => {
  return res.render("homepage");
};

const renderDashboard = (req, res) => {
  return res.render("dashboard");
};

const renderLoginPage = (req, res) => {
  return res.render("login");
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
