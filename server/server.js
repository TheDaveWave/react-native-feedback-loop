// separate server from app in the future.
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user.router.js");
const feedbackRouter = require("./routes/feedback.router.js");

app.use("/api/user", userRouter);
app.use("/api/feedback", feedbackRouter);

app.use(express.static("build"));

// 192.168.0.88
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
