const jwt = require("jsonwebtoken");

// utilize the jwt verify method and use it to replace
// the passport method of authenticating a user.
function rejectUnauthenticated(req, res, next) {
  // if(req.isAuthenticated()) {
  //     next();
  // } else {
  //     res.sendStatus(403);
  // }
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);

    if (verified) {
      // res.send("Successfully Verified.");
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = { rejectUnauthenticated };
