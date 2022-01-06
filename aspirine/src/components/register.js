import React from "react";
import dateFormat from "dateformat";
import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import Headings from "./headings";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [bgrp, setBgrp] = useState("");
  const [weight, setWeight] = useState("");
  const [hemo, setHemo] = useState("");
  const [hepa, setHepa] = useState("");
  const [jaun, setJaun] = useState("");

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

  const submit = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (
      (name !== re) &
      (hemo < 20) &
      (phone < 10) &
      (hepa === "N") &
      (jaun === "N")
    ) {
      fetch("http://localhost:4000/api/donors/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: `${name}`,
          Age: age,
          Gender: gender,
          Phone_no: phone,
          Blood_grp: bgrp,
          Weight_in_kg: weight,
          Hemoglobin_level: `${hemo}`,
          Diagonse_Hepatities: hepa,
          Diagonse_jaundice: jaun,
          DOB: dateFormat(dob, "yyyy-mm-dd"),
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          alert("Congratulations, you are successfully registerd as donor");
        })
        .catch((err) => console.log(err));
    } else {
      alert("You are not eligible for Blood donation");
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
        <Headings heading="Register New Donor" />
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
              label="Name"
              className="basic-grid-item-1"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-number"
              type="number"
              required
              label="Age"
              className="basic-grid-item-2"
              onChange={(e) => setAge(e.type.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-number"
              type="number"
              required="Age"
              label="Phone No"
              className="basic-grid-item-3"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-basic"
              type="date"
              required
              label="Date of Birth"
              className="basic-grid-item-4"
              InputLabelProps={{ shrink: "false" }}
              onChange={(e) => setDob(e.target.value)}
            />
            <TextField
              color="secondary"
              id="outlined-select-currency"
              select
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              variant="outlined"
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </TextField>
          </article>
        </Card>
        <Card id="secondCard" variant="filled">
          <h2>Biological Info</h2>
          <article className="basic-grid-container">
            <TextField
              color="secondary"
              variant="outlined"
              id="outlined-basic"
              required
              label="Weight"
              type="number"
              className="basic-grid-item-1"
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              color="secondary"
              id="outlined-select-currency"
              select
              label="Blood group"
              value={bgrp}
              onChange={(e) => setBgrp(e.target.value)}
              required
              variant="outlined"
            >
              {grps.map((para) => {
                return (
                  <MenuItem key={para.value} value={para.value}>
                    {para.value}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              color="secondary"
              id="outlined-basic"
              variant="outlined"
              label="Hemoglobin level"
              value={hemo}
              setHemo={(e) => e.target.value}
            />
            <TextField
              color="secondary"
              id="outlined-select-currency"
              select
              label="Have you Diagonsed with Hepatities before?"
              value={hepa}
              onChange={(e) => setHepa(e.target.value)}
              required
              variant="outlined"
            >
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
            <TextField
              color="secondary"
              id="outlined-select-currency"
              select
              label="Have you Diagonsed with jaundice before"
              value={jaun}
              onChange={(e) => setJaun(e.target.value)}
              required
              variant="outlined"
            >
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
          </article>
        </Card>
        <Button
          id="submitBtn"
          value="submit"
          variant="outlined"
          color="secondary"
          onClick={submit}
        >
          Submit
        </Button>
      </article>
    </main>
  );
};

export default Register;
