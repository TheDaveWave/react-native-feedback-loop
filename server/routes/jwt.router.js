const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const encryptLib = require("../modules/encryption.js");

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
      const user = response && response.rows && response.rows[0];
      console.log(user);
      if (user) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
          time: Date(),
          userId: 5,
        };

        const token = jwt.sign(data, jwtSecretKey);

        res.send(token);
      } else {
        res.sendStatus(500);
      }
    })
    .catch((err) => {
      console.log("Error with query for user", err);
      res.sendStatus(500);
    });
});

// get request that contains the JWT in the header and sends
// verification as response.
router.get("/validateToken", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);

    if (verified) {
      res.send("Successfully Verified");
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).send(err);
  }
});

module.exports = router;
