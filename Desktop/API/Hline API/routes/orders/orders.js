const express = require("express");
const router = express.Router();
const db = require("../dbconn/database");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM orders", (err, rows, fields) => {
    if (err) res.status(400).json(err);
    res.status(200);
    res.json(rows);
  });
});

router.get("/search", (req, res) => {
  connection.query(
    `Select * From orders Where Hospital_Name REGEXP '${req.query.name}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

router.get("/search/id", (req, res) => {
  connection.query(
    `Select * From orders Where OID=${req.query.id}`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

module.exports = router;
