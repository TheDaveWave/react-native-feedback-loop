const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

router.get("/", (req, res) => {
    res.send("Hello World!");
});

// add authentication here
// get feedback for current user.
router.get("/user", (req, res) => {
    const queryText = `SELECT * FROM "feedback" WHERE "user_id"=$1;`;
    pool.query(queryText, [req.user.id])
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log("Error getting feedback", err);
        res.sendStatus(500);
    });
});

// route for posting feedback
router.post("/", (req, res) => {
    const { feeling, support, understanding, comment } = req.body;
    const userId = req.user.id;
    const queryText = `INSERT INTO "feedback" ("user_id", "feeling", "support", "understanding", "comment")
        VALUES ($1, $2, $3, $4, $5);`;
    const values = [userId, feeling, support, understanding, comment];
    pool.query(queryText, values)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log("Error submitting feedback", err);
        res.sendStatus(500);
    });
});

// route for deleting feedback 
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;
    const queryText = `DELETE FROM "feedback" WHERE "id"=$1 AND "user_id"=$2;`;
    pool.query(queryText, [id, userId])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log("Error deleting feedback", err);
        res.sendStatus(500);
    });
});

module.exports = router;