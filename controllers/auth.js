const get = (req, res) => {
  res.render("base");
};

const post = (req, res) => {
  res.redirect("/");
};

const home = (req, res) => {
  const { name } = req.body;
  req.session.name = name;
  res.redirect("/");
};

const destroy = (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("error: ", error);
  }
};

module.exports = {
  get,
  post,
  home,
  destroy,
};
