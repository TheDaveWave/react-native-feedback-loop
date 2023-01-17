const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");
const userStrategy = require("../strategies/user.strategy.js");
const encryptLib = require("../modules/encryption.js");

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
        VALUES ($1, $2);`;
  pool
    .query(queryText, [username, password])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.send(500);
    });
});

router.post("/login", userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

router.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
});

module.exports = router;
