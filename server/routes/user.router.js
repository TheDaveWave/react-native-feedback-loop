const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");
const encryptLib = require("../modules/encryption.js");
const jwt = require("jsonwebtoken");

// add authentication here
router.get("/", (req, res) => {
  // may not work - look into sessions
  res.send(req.user);
});

// create a user account and store it onto the database.
router.post("/register", (req, res, next) => {
  const { username } = req.body;
  const password = encryptLib.encryptPassword(req.body.password);
  const queryText = `INSERT INTO "users" ("username", "password")
        VALUES ($1, $2) RETURNING *;`;
  pool
    .query(queryText, [username, password])
    .then((response) => {
      // get user info that was sent back in response.
      const user = response && response.rows && response.rows[0];
      // delete password from user object.
      delete user.password;
      // create secretKey
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let tokenDate = Date();
      user.token_date = tokenDate;
      // create token.
      const token = jwt.sign(user, jwtSecretKey);
      // UPDATE the user and add their token and token date.
      const queryText = `UPDATE "users" SET "token"=$1 WHERE "id"=$2;`;
      pool
        .query(queryText, [token, user.id])
        .then(() => {
          res.sendStatus(201);
        })
        .catch((err) => {
          console.log("Error in generating token for new user", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.sendStatus(500);
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const queryText = `SELECT * FROM "users" WHERE "username"=$1;`;
  pool
    .query(queryText, [username])
    .then((response) => {
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

// may not be needed, check auth context.
router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
