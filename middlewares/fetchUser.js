const jwt = require("jsonwebtoken");
const SECRET_KEY = "BMSPROJECT";

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add user id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, SECRET_KEY);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
