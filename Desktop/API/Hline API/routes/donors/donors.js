const { query } = require("express");
const express = require("express");
const { nextTick } = require("process");
const router = express.Router();
const db = require("../dbconn/database.js");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM donors", (err, rows, fields) => {
    if (err) {
      res.status(404);
      throw err;
    } else {
      res.status(200);
      res.json(rows);
    }
  });
});

router.post("/new", (req, res) => {
  connection.query(
    `Insert Into donors (Name, Age,Gender, Phone_no, Blood_grp, Weight_in_kg, Hemoglobin_level, Diagonse_Hepatities, Diagonse_jaundice, DOB) VALUES ('${req.body.Name}','${req.body.Age}','${req.body.Gender}','${req.body.Phone_no}','${req.body.Blood_grp}','${req.body.Weight_in_kg}','${req.body.Hemoglobin_level}','${req.body.Diagonse_Hepatities}','${req.body.Diagonse_jaundice}','${req.body.DOB}') `,
    (err, rows, fields) => {
      if (err) {
        res.status(400);
        throw err;
      } else {
        res.status(200);
        console.log("data inserted successfully");
        res.send(rows);
      }
    }
  );
});

router.get("/search", (req, res) => {
  connection.query(
    `Select * From donors Where Name REGEXP '${req.query.name}'`,
    (err, rows, fields) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200);
        res.send(rows);
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
    `Select * From donors Where Blood_grp LIKE '${grp}'`,
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
