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
import Headings from "../header/headings";
import { BsTelephone } from "react-icons/bs";
import { InputAdornment } from "@material-ui/core";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Buyer = () => {
  const [id, setId] = useState(2010);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [obgrp, setObgrp] = useState("");
  const [units, setUnits] = useState("");
  const [bill, setBill] = useState("");
  const [oid, setOID] = useState(3100);
  const [transType, setTransType] = useState("");
  const [transId, setTransId] = useState(100);
  const [popup, setPopup] = useState(false);

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
      if (transId !== 100) {
        fetch("http://localhost:4000/api/buyers/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            name: name,
            contact: contact,
            date: dateFormat(date, "yyyy-mm-dd"),
            obgrp: obgrp,
            units: units,
            bill: onCalculate(),
            oid: oid,
            transtype: transType,
            transid: transId,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            alert(`Data inserted for ID${oid}.`);
            setPopup(!popup);
          })
          .catch((err) => console.log(err));
      } else {
        fetch("http://localhost:4000/api/buyers/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            name: name,
            contact: contact,
            date: dateFormat(date, "yyyy-mm-dd"),
            obgrp: obgrp,
            units: units,
            bill: onCalculate(),
            oid: oid,
            transtype: transType,
            transid: transId,
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
    <>
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
                label="Name"
                className="basic-grid-item-1"
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                color="secondary"
                id="outlined-basic"
                label="Phone No"
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BsTelephone
                        style={{
                          color: "#f9f9f9",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                id="outlined-basic"
                variant="outlined"
                label="Date"
                color="secondary"
                InputLabelProps={{ shrink: "false" }}
                type="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </article>
          </Card>
          <Card variant="filled" id="secondCard">
            <h2>Detailed Info</h2>
            <article className="basic-grid-container">
              <TextField
                required
                select
                id="outlined-select-currency"
                variant="outlined"
                label="Order group(fully packed RBC)"
                color="secondary"
                InputLabelProps={{ shrink: "false" }}
                value={obgrp}
                onChange={(e) => setObgrp(e.target.value)}
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
                      onChange={(e) => setTransType(e.target.value)}
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="UPI"
                      control={<Radio color="secondary" />}
                      label="UPI"
                      onChange={(e) => setTransType(e.target.value)}
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
    </>
  );
};

export default Buyer;
