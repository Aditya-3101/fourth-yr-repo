import React from "react";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { MenuItem } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import Headings from "./headings";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NewReg = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState(50010);
  const [mail, setMail] = useState("");
  const [doo, setDoo] = useState("");
  const [units, setUnits] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [oid, setOID] = useState(2700);
  const [bgrp, setBgrp] = useState("");
  const [city, setCity] = useState("");
  const [popup, setPopup] = useState(false);
  const [transType, settransType] = useState(null);
  const [transId, setTransId] = useState(100);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const grps = [
    {
      value: "A+",
    },
    {
      value: "B+",
    },
    {
      value: "AB+",
    },
    {
      value: "O+",
    },
    {
      value: "A-",
    },
    {
      value: "B-",
    },
    {
      value: "AB-",
    },
    {
      value: "O-",
    },
  ];

  const onCalculate = () => {
    const price = units * 1050;
    return price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const showPopup = (e) => {
    setPopup(!popup);
    setOID((prev) => prev + 20);
    setId((prev) => prev + 1);
  };

  const submit = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if ((name !== re) & (transType !== null)) {
      if (transId !== null) {
        fetch("http://localhost:4000/api/hospitals/new_reg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Reg_Id: id,
            Hospital_name: name,
            Hospital_Address: address,
            Hospital_city: city,
            Hospital_Phone: phone,
            Hospital_mail: mail,
            ORDER_Id: oid,
            Ordered_Blood_grp: bgrp,
            NO_of_units: units,
            Order_bill: onCalculate(),
            Order_date: dateFormat(doo, "yyyy-mm-dd"),
            transType: transType,
            transID: transId,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            alert(`Data inserted for ID${oid}.`);
            setName("");
            setMail("");
            setDoo("");
            setUnits("");
            setAddress("");
            setPhone("");
            setBgrp("");
            setCity("");
            settransType(null);
            setPopup(!popup);
          })
          .catch((err) => console.log(err));
      } else {
        fetch("http://localhost:4000/api/hospitals/new_reg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Reg_Id: id,
            Hospital_name: name,
            Hospital_Address: address,
            Hospital_city: city,
            Hospital_Phone: phone,
            Hospital_mail: mail,
            ORDER_Id: oid,
            Ordered_Blood_grp: bgrp,
            NO_of_units: units,
            Order_bill: onCalculate(),
            Order_date: dateFormat(doo, "yyyy-mm-dd"),
            transType: transType,
            transID: transId,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            alert(`Data inserted for ID${oid}.`);
            setPopup(!popup);
          })
          .catch((err) => console.log(err));
      }
    } else {
      alert("Inappropiate data");
    }
  };

  return (
    <main
      style={{
        width: "auto",
        height: "auto",
        background: "rgb(20,20,20)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div className="heading">
        <Headings heading="Enter Details" />
      </div>
      <article className="formcontainer">
        <Card id="firstCard" variant="filled">
          <h2>Basic Details</h2>
          <article className="basic-grid-container">
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-basic"
              required
              value={name}
              label="Hospital Name"
              className="basic-grid-item-1"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-number"
              type="mail"
              required
              label="Mail"
              value={mail}
              className="basic-grid-item-3"
              onChange={(e) => setMail(e.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-basic"
              type="text"
              required
              label="Address"
              value={address}
              className="basic-grid-item-4"
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              color="secondary"
              id="outlined-basic"
              label="Phone No"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </article>
        </Card>
        <Card variant="filled" id="secondCard">
          <h2>Detailed Info</h2>
          <article className="basic-grid-container">
            <TextField
              required
              id="outlined-basic"
              variant="outlined"
              label="Date"
              color="secondary"
              InputLabelProps={{ shrink: "false" }}
              type="Date"
              value={doo}
              onChange={(e) => setDoo(e.target.value)}
            />
            <TextField
              required
              select
              id="outlined-select-currency"
              variant="outlined"
              label="Order group(fully packed RBC)"
              color="secondary"
              InputLabelProps={{ shrink: "false" }}
              value={bgrp}
              onChange={(e) => setBgrp(e.target.value)}
            >
              {grps.map((ops) => (
                <MenuItem color="secondary" key={ops.value} value={ops.value}>
                  {ops.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="units"
              color="secondary"
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="Price"
              color="secondary"
              type="text"
              value={`Rs.${onCalculate()}`}
            />
          </article>
        </Card>
        <Button
          variant="outlined"
          id="submitBtn"
          color="secondary"
          onClick={showPopup}
        >
          submit
        </Button>
        {popup ? (
          <div className="popup">
            <div className="popupInner">
              <div>
                {" "}
                <h3 className="pophead">Payment Method</h3>{" "}
                <AiOutlineCloseCircle
                  onClick={() => setPopup(!popup)}
                  className="closeIcon"
                />
              </div>
              <main className="paymentContainer">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                  className="radioGroup"
                >
                  <FormControlLabel
                    value="Cash"
                    control={<Radio color="secondary" />}
                    label="Cash"
                    onChange={(e) => settransType("Cash")}
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="UPI"
                    control={<Radio color="secondary" />}
                    label="UPI"
                    onChange={(e) => settransType("UPI")}
                    labelPlacement="top"
                  />
                </RadioGroup>
                <article className="inputGrps">
                  <TextField
                    required
                    variant="outlined"
                    label="Name"
                    id="outlined-basic"
                    className="popname"
                    color="secondary"
                    value={name ? name : null}
                  />
                  <TextField
                    disabled
                    variant="outlined"
                    label="OID"
                    id="outlined-basic"
                    className="oid"
                    color="secondary"
                    value={name ? oid : null}
                  />
                </article>
                <article className="anotherContainer">
                  {transType === "UPI" ? (
                    <TextField
                      required
                      id="outlined-basic"
                      variant="outlined"
                      label="Transaction ID"
                      color="secondary"
                      value={transId}
                      onChange={(e) => setTransId(e.target.value)}
                      className="transType"
                      style={{ marginBottom: "0.9em" }}
                    />
                  ) : null}
                  <TextField
                    required
                    disabled
                    id="outlined-basic"
                    label="Registered Id"
                    variant="outlined"
                    color="secondary"
                    value={id}
                    style={{ marginBottom: "0.9em" }}
                  />
                </article>
                <Button
                  variant="contained"
                  color="Secondary"
                  className="submitBtn"
                  value="submit"
                  onClick={submit}
                >
                  submit
                </Button>
              </main>
            </div>
          </div>
        ) : null}
      </article>
    </main>
  );
};
export default NewReg;
