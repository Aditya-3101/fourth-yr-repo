import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { GoSearch } from "react-icons/go";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import Headings from "../header/headings";
import Tables from "../table/Table";

const Drecords = () => {
  const [records, setRecords] = useState([]);
  const [copy, setCopy] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [bgrp, setBgrp] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/donors/records")
      .then((res) => res.json())
      .then((result) => {
        setRecords(result);
        setCopy(result);
        setLoading(false);
      });
  }, []);

  const submit = () => {
    if (bgrp != null) {
      setBgrp("");
    }
    if (contact != null) {
      setContact("");
    }

    fetch(`http://localhost:4000/api/donors/records/search?name=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setRecords(result);
        setLoading(false);
        setVisible(true);
      });
  };

  const checkContact = () => {
    fetch(`http://localhost:4000/api/donors/records/contact?contact=${contact}`)
      .then((res) => res.json())
      .then((result) => {
        setRecords(result);
        setLoading(false);
        setVisible(true);
      });
  };

  const checkBgrp = () => {
    let grps;
    console.log(bgrp);

    if (String(bgrp).includes("+")) {
      grps = String(bgrp).replace("+", "positive");
    } else {
      grps = String(bgrp).replace("-", "negative");
    }

    if (search !== null) {
      setSearch("");
    }
    if (contact !== null) {
      setContact("");
    }

    fetch(`http://localhost:4000/api/donors/records/sort?grp=${grps}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setRecords(result);
        setVisible(true);
      });
  };

  const recover = () => {
    setSearch("");
    setBgrp("");
    setContact("");
    setVisible(false);
    setRecords(copy);
  };

  if (Loading) {
    return (
      <div
        style={{
          background: "rgb(20,20,20)",
          width: "100vw",
          height: "100vh",
          display: "Flex",
          WebkitJustifyContent: "center",
          WebkitAlignItems: "Center",
          overflowX: "hidden",
          msOverflowX: "hidden",
        }}
      >
        <h1 style={{ color: "white" }}>Loading...</h1>
      </div>
    );
  }

  return (
    <article style={{ background: "rgb(20,20,20)" }}>
      <div className="heading" style={{ background: "rgb(20,20,20)" }}>
        <Headings heading="Donor Records" />
      </div>
      <div className="queries" style={{ background: "rgb(20,20,20)" }}>
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Search By Name"
          color="secondary"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            borderBottom: "1px solid gray",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GoSearch style={{ color: "#f9f9f9" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                {search ? (
                  <RiSendPlaneLine
                    className="sendIcon"
                    style={{ color: "#f9f9f9", zoom: "115%" }}
                    onClick={submit}
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Search by Phone Number"
          color="secondary"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          style={{
            borderBottom: "1px solid gray",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GoSearch style={{ color: "#f9f9f9" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                {contact ? (
                  <RiSendPlaneLine
                    className="sendIcon"
                    style={{ color: "#f9f9f9", zoom: "115%" }}
                    onClick={checkContact}
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Search by Blood Group"
          color="secondary"
          value={bgrp}
          onChange={(e) => {
            setBgrp(e.target.value);
          }}
          style={{
            borderBottom: "1px solid gray",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GoSearch style={{ color: "#f9f9f9" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                {bgrp ? (
                  <RiSendPlaneLine
                    className="sendIcon"
                    style={{ color: "#f9f9f9", zoom: "115%" }}
                    onClick={checkBgrp}
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="backToTable">
        {visible ? (
          <Button variant="outlined" color="secondary" onClick={recover}>
            <MdRefresh style={{ color: "white", zoom: "120%" }} />
          </Button>
        ) : null}
      </div>
      <TableContainer
        component={Paper}
        style={{
          background: "rgb(20,20,20)",
          overflowX: "hidden",
          width: "100vw",
          maxHeight: "90vh",
          minHeight: "70vh",
          overflowY: "scroll",
        }}
      >
        <Table
          sx={{ minWidth: 650 }}
          style={{
            overflowX: "hidden",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ color: "white" }}>
                Id
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Gender
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Age
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Weight
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Phone
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Blood Group
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Hemoglobin Level
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          {records.map((para, index) => {
            return (
              <TableRow>
                <Tables key={index} data={para} />;
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </article>
  );
};

export default Drecords;
