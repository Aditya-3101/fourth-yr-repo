const express = require("express");
const router = express.Router();
const db = require("../dbconn/database");
const connection = db();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM hospitals", (err, rows, fields) => {
    if (err) throw err;
    res.status(200);
    res.json(rows);
  });
});

router.post("/new_reg", (req, res) => {
  connection.query(
    `INSERT INTO hospitals (Reg_Id, Hospital_name, Hospital_Address, Hospital_city,Hospital_phone,Hospital_mail,ORDER_Id,Ordered_Blood_grp, NO_of_units,Order_bill,Order_date,transType,transID) 
    VALUES ('${req.body.Reg_Id}','${req.body.Hospital_name}','${req.body.Hospital_Address}','${req.body.Hospital_city}','${req.body.Hospital_Phone}','${req.body.Hospital_mail}','${req.body.ORDER_Id}','${req.body.Ordered_Blood_grp}','${req.body.NO_of_units}','${req.body.Order_bill}','${req.body.Order_date}','${req.body.transType}','${req.body.transID}')`,
    (err, rows, fields) => {
      if (err) throw err;
      res.status(200);
      res.send(rows);
      console.log("Data Inserted successfully for table hospitals");
    }
  );
});

module.exports = router;
