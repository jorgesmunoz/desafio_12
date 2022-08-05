const login = (req, res, next) => {
  if (req.session?.name) {
    next();
  } else {
    res.render("login");
  }
};

module.exports = {
  login,
};
