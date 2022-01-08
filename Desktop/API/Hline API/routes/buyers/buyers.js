const express = require("express");
const router = express.Router();
const db = require("../dbconn/database.js");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM buyers", (err, rows, fields) => {
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
    `INSERT INTO buyers (ID,Name,Contact,date,OBGrp,units,bill,oid,TransType,TransId) VALUES ('${req.body.id}','${req.body.name}','${req.body.contact}','${req.body.date}','${req.body.obgrp}','${req.body.units}','${req.body.bill}','${req.body.oid}','${req.body.transtype}','${req.body.transid}')`,
    (err, rows, fields) => {
      if (err) {
        res.status(400);
        throw err;
      } else {
        res.status(200);
        console.log("data inserted for table buyers");
        res.send(rows);
      }
    }
  );
});

module.exports = router;
