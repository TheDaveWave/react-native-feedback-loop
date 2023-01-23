const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const encryptLib = require("../modules/encryption.js");
const {
    rejectUnauthenticated,
  } = require("../modules/authentication-middleware.js");

//  /api/jwt

// post route to send JWT in the response.
router.post("/generate", (req, res) => {
  // validate user
  // then generate JWT
  const { username, password } = req.body;
  console.log(username);
  const queryText = `SELECT * FROM "users" WHERE "username"=$1;`;
  pool
    .query(queryText, [username])
    .then((response) => {
      console.log("Post login", response.rows);
      const user = response && response.rows && response.rows[0];
      // make sure the user exists and password matches.
      if (user && encryptLib.comparePassword(password, user.password)) {
        // delete the password so it is not sent back.
        delete user.password;
        // let jwtSecretKey = process.env.JWT_SECRET_KEY;

        // const token = jwt.sign(user, jwtSecretKey);
        res.send(user);
      } else {
        console.log("User does not exist");
        res.status(500).send("User does not exist");
      }
    })
    .catch((err) => {
      console.log("Error with query for user", err);
      res.sendStatus(500);
    });
});

// need to create a post request that validates user
// checks expiration of token and if expired and user is valid
// generate a new token.

// get request that contains the JWT in the header and sends
// verification as response.
/* router.get("/validateToken", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);
    
    if (verified) {
      res.send("Successfully Verified");
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    res.status(401).send(err);
  }
}); */

router.get("/validateToken", rejectUnauthenticated, (req, res) => {  
    res.send("Successfully Verifified.");
});

module.exports = router;
