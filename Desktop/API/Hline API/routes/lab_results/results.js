const express = require("express");
const db = require("../dbconn/database");
const connection = db();
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM blood_test", (err, rows, fields) => {
    if (err) {
      res.status(404);
      console.log("errors are ", err);
    } else {
      res.status(200);
      res.json(rows);
    }
  });
});

router.get("/search", (req, res) => {
  connection.query(
    `Select * From blood_test Where Donor_name REGEXP '${req.query.name}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).send(rows);
      }
    }
  );
});

router.get("/sort", (req, res) => {
  let grp;

  if (String(req.query.grp).includes("positive")) {
    grp = String(req.query.grp).replace("positive", "+");
    console.log(grp);
  } else {
    grp = String(req.query.grp).replace("negative", "-");
    console.log(grp);
  }

  connection.query(
    `Select * From blood_test Where Blood_grp LIKE '${grp}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).send(rows);
      }
    }
  );
});

module.exports = router;
