const express = require("express");
const server = express();
const routes = require("./routes/indexRoutes");
const { connectMongo } = require("./models/mongoConnection");
const session = require("express-session");

const PORT = 8000;

server.use(
  session({
    secret: "session",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000,
    },
  })
);

server.set("views", "./views");
server.set("view engine", "ejs");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(process.env.PORT || PORT, async () => {
  await connectMongo();
  console.log(`server running on PORT ${PORT}`);
});
