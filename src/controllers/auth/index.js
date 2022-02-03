const signIn = (req, res) => {
  res.send("signin");
};

const login = (req, res) => {
  res.send("signin");
};

const logout = (req, res) => {
  res.send("signin");
};

const auth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("login");
  }

  next();
};

module.exports = { signIn, login, logout, auth };
