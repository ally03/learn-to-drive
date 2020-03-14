const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post("/login", (req, res, next) => {
  if (validateEmail(req.query.email) && req.query.password.length > 3) {
    return res.sendStatus(200);
  } else {
    console.log("in invalid email");
    return res.status(400).jsonp({
      error: "Invalid Email or password"
    });
  }
});

server.post("/signup", (req, res, next) => {
  if (validateEmail(req.query.email) && req.query.password.length > 3) {
    return res.sendStatus(200);
  } else {
    console.log("in invalid email");
    return res.status(400).jsonp({
      error: "Invalid Email or password"
    });
  }
});

server.use(router);
server.listen(9000, () => {
  console.log("JSON Server is running");
});

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  console.log("You have entered an invalid email address!");
  return false;
}
