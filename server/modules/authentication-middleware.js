const jwt = require("jsonwebtoken");

// utilize the jwt verify method to authorize user requests.
// validates token and allows user to make requests.
function rejectUnauthenticated(req, res, next) {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);

    if (verified) {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = { rejectUnauthenticated };
