const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();

// create a user account and store it onto the database.
router.post("/register", (req, res) => {
  const { username } = req.body;
  const password = req.body.password;
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

module.exports = router;
