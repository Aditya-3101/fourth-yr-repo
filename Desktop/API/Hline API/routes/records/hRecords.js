const express = require("express");
const router = express.Router();
const db = require("../dbconn/database");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM Hrecords", (err, rows, fields) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(rows);
    }
  });
});

router.get("/search", (req, res) => {
  connection.query(
    `SELECT * FROM Hrecords WHERE Hospital_Name REGEXP '${req.query.name}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

router.get("/sort", (req, res) => {
  let grp;
  if (String(req.query.grp).includes("positive")) {
    grp = String(req.query.grp).replace("positive", "+");
  } else {
    grp = String(req.query.grp).replace("negative", "-");
  }

  connection.query(
    `SELECT * FROM Hrecords WHERE OBgrp LIKE '${grp}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

router.get("/contact", (req, res) => {
  connection.query(
    `SELECT * FROM Hrecords Where phone REGEXP ${req.query.contact}`,
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
