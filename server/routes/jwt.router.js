const express = require("express");
const pool = require("../modules/pool.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const encryptLib = require("../modules/encryption.js");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

//  /api/jwt

/**
 * make a route to check if the date generated is expired,
 * and if expired either have user log in again / logout user
 * or generate a new token.
 */

// post route to send JWT in the response.
router.post("/generate", (req, res) => {
  // validate user
  // then generate JWT
  const { username, password } = req.body;
  res.send("Needs to generate token.");
});

// need to create a post request that validates user
// checks expiration of token and if expired and user is valid
// generate a new token.

// get request that contains the JWT in the header and sends
// verification as response.
router.get("/validateToken", rejectUnauthenticated, (req, res) => {
  res.send("Successfully Verifified.");
});

module.exports = router;
