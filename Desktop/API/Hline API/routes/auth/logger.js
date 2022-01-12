const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const db = require("../dbconn/database");
const connection = db();

router.post("/", (req, res) => {
  connection.query(
    `Insert Into users Values ('${req.body.empId}','${req.body.name}','${req.body.psword}')`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(rows);
        console.log("Data inserted for Login");
      }
    }
  );
});

module.exports = router;
