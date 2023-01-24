const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

// get feedback for current user.
router.get("/:userId", rejectUnauthenticated, (req, res) => {
    // maybe add a limit or just limit the amount displayed on the client portion.
  const queryText = `SELECT * FROM "feedback" WHERE "user_id"=$1 ORDER BY "date" DESC, "id" DESC;`;
  pool
    .query(queryText, [req.params.userId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("Error getting feedback", err);
      res.sendStatus(500);
    });
});

// route for posting feedback
router.post("/", rejectUnauthenticated, (req, res) => {
  const { feeling, support, understanding, comment } = req.body;
  const userId = req.body.userId;
  const queryText = `INSERT INTO "feedback" ("user_id", "feeling", "support", "understanding", "comment")
        VALUES ($1, $2, $3, $4, $5);`;
  const values = [userId, feeling, support, understanding, comment];
  pool
    .query(queryText, values)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error submitting feedback", err);
      res.sendStatus(500);
    });
});

// route for deleting feedback
router.delete("/", rejectUnauthenticated, (req, res) => {
  const id = req.body.id;
  const userId = req.body.userId;
  const queryText = `DELETE FROM "feedback" WHERE "id"=$1 AND "user_id"=$2;`;
  pool
    .query(queryText, [id, userId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error deleting feedback", err);
      res.sendStatus(500);
    });
});

module.exports = router;
