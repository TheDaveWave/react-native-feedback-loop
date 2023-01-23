// separate server from app in the future.
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user.router.js");
const feedbackRouter = require("./routes/feedback.router.js");
// temporary to test jwt
const jwtRouter = require("./routes/jwt.router.js");

app.use("/api/user", userRouter);
app.use("/api/feedback", feedbackRouter);
// temporary to test jwt
app.use("/api/jwt", jwtRouter);

app.use(express.static("build"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
