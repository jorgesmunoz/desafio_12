const loginRouter = require("express").Router();
const { login } = require("../middleware/auth");
const { get, post, home, destroy } = require("../controllers/auth");

loginRouter.get("/", login, get);
loginRouter.post("/", login, post);
loginRouter.post("/home", home);
loginRouter.post("/logout", destroy);

module.exports = loginRouter;
