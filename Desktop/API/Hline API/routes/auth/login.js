const express = require("express");
const router = express.Router();
const db = require("../dbconn/database");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;
    res.status(200);
    res.json(rows);
  });
});

router.post("/new_user", (req, res) => {
  connection.query(
    `INSERT INTO users (userId,userName,password) VALUES('${req.body.userId}','${req.body.userName}','${req.body.password}' )`,
    (err, rows, fields) => {
      if (err) throw err;
      res.status(200);
      console.log("data inserted for table users");
      res.send(rows);
    }
  );
});

module.exports = router;
