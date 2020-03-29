const driverInfo = require("./driverInfo.json");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/login", (req, res, next) => {
  console.log("req.query", req.body);
  if (validateEmail(req.body.email) && req.body.password.length > 3) {
    setTimeout(function() {
      return res.sendStatus(200);
    }, 3000);
  } else {
    console.log("in invalid email");
    return res.status(400).jsonp({
      error: "Invalid Email or password"
    });
  }
});

server.post("/signup", (req, res, next) => {
  if (validateEmail(req.body.email) && req.body.password.length > 3) {
    setTimeout(function() {
      return res.sendStatus(200);
    }, 3000);
  } else {
    console.log("in invalid email");
    return res.status(400).jsonp({
      error: "Invalid Email or password"
    });
  }
});

server.post("/driver/search", (req, res, next) => {
  console.log("req.query", req.body);
  if (req.body.postCode.length === 6) {
    setTimeout(function() {
      return res.sendStatus(200);
    }, 3000);
  } else {
    console.log("in invalid postcode");
    return res.status(400).jsonp({
      error: "Invalid postcode or area code"
    });
  }
});

server.post("/learner/home", (req, res) => {
  console.log("res body", req.body);
  if (req.body.postCode.length < 6) {
    return res.status(400).jsonp({
      error: "Bad Request",
      message: "Sorry, Cannot find drivers for this location"
    });
  } else {
    let number = Math.floor(Math.random() * 86 + 1);
    const drivers = driverInfo.data.slice(number, number + 12);
    console.log(
      "drivers",
      drivers.map(r => r.firstName)
    );

    setTimeout(function() {
      return res.send(drivers);
    }, 3000);
  }
});

server.use(router);
server.listen(9000, () => {
  console.log("JSON Server is running");
});

function validateEmail(mail) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  console.log("You have entered an invalid email address!");
  return false;
}
