const renderCreateBlog = (req, res) => {
  return res.render("add-blog");
};

const renderDashboard = (req, res) => {
  return res.render("dashboard");
};

const renderEditBlog = (req, res) => {
  return res.render("edit-blog");
};
module.exports = {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
};
