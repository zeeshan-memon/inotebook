const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(200).send({ error: "Please athenticate valid token" });
  }
  try {
    const data = jwt.verify(token, "shhhhh");
    console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(200).send({ error: "Please athenticate valid token" });
  }
};

module.exports = fetchUser;