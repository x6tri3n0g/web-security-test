const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", Date.now());
  let message = req.query.message;
  const lang = req.headers["x-lang"];

  if (message === "") {
    res.status(400);
    message = "message 값이 비었음";
  }

  if (lang === "en") {
    message = "message is empty.";
  } else {
    message = "message 값이 비었음";
  }

  res.send({ message });
});

router.use(express.json());
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
