import React from "react";
import { Link } from "react-router-dom";
import Tables from "../table/Table";
import { Table } from "@material-ui/core";
import { TableContainer, TextField } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { InputAdornment, Button } from "@material-ui/core";
import { MdRefresh } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { FiPrinter } from "react-icons/fi";
import { BiDonateBlood } from "react-icons/bi";
import Headings from "../header/headings";
import Print from "./printTests";

const Tests = () => {
  const [loading, setLoading] = React.useState(true);
  const [test, setTest] = React.useState([]);
  const [table, setTable] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [bgrp, setBgrp] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:4000/api/lab/results")
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setTest(result);
        setTable(result);
        setVisible(false);
        setSearch("");
        setBgrp("");
      });
  }, []);

  const submit = () => {
    if (bgrp != null) {
      setBgrp("");
    }

    fetch(`http://localhost:4000/api/lab/results/search?name=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setTest(result);
        setVisible(true);
      });
    fetch(`http://localhost:4000/api/donors/search?name=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  const checkBgrp = () => {
    let grp;
    if (String(bgrp).includes("+")) {
      grp = String(bgrp).replace("+", "positive");
    } else {
      grp = String(bgrp).replace("-", "negative");
    }

    if (search !== null) {
      setSearch("");
    }
    fetch(`http://localhost:4000/api/lab/results/sort?grp=${grp}`)
      .then((res) => res.json())
      .then((result) => {
        setTest(result);
        setVisible(true);
      });
    fetch(`http://localhost:4000/api/donors/sort?grp=${grp}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setVisible(true);
      });
  };

  const recover = () => {
    setBgrp("");
    setSearch("");
    setVisible(false);
    setTest(table);
  };

  const printTest = () => {
    return <Print />;
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          background: "rgb(20,20,20)",
          alignItems: "center",
          overflowX: "hidden",
          color: "white",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="testresults">
      <div className="heading">
        <Headings heading=" Blood Test Result" />
      </div>
      <div className="queries">
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
        {test.length === 1 ? (
          <Button
            variant="outlined"
            color="secondary"
            onclick={<Print para={test} />}
          >
            {" "}
            <div onClick={() => window.print()}>
              <FiPrinter style={{ color: "white", zoom: "120%" }} />
            </div>
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
          minHeight: "10vh",
          overflowY: "auto",
        }}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label
          style={{
            overflowX: "hidden",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Id No
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Donor Name
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Blood Grp
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Hemoglobin Level
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Diagonse Hepatities
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Diagonse Jaundice
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                WBC Count
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                RBC Count
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Mean Platelet Volume
              </TableCell>
              <TableCell id="tableHd" align="center" style={{ color: "white" }}>
                Results
              </TableCell>
            </TableRow>
          </TableHead>
          {test.map((para, index) => {
            return (
              <TableRow>
                <Tables key={index} data={para} />
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
      <article>
        {test.length === 1 ? (
          <>
            {data.map((para, index) => {
              return (
                <div id="extraDonors" key={index}>
                  <section id="systemHeader">
                    <BiDonateBlood
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: "100 !important",
                        color: "red",
                      }}
                    />
                    Aspirine Blood Bank Services
                  </section>
                  <section id="firstSec">
                    <p id="firstP">Registration Id:{` ${para.Id_no}`}</p>
                    <p id="firstP">Name:{` ${para.Name}`}</p>
                    <p id="firstP">Age:{` ${para.Age}`}</p>
                    <p id="firstP">Gender:{` ${para.Gender}`}</p>
                    <p id="firstP">
                      Date of Birth:{` ${String(para.DOB).slice(0, 10)}`}
                    </p>
                  </section>
                  <section id="secondSec">
                    <p id="secondP">Blood Group : {` ${para.Blood_grp}`}</p>
                    <p id="secondP">Weight :{` ${para.Weight_in_kg}`}Kg</p>
                    <p id="secondP">
                      Hemoglobin level : {` ${para.Hemoglobin_level}`}
                    </p>
                    <p id="secondP">
                      Have donor diagonsed with hepatities berfore? :{" "}
                      {para.Diagonse_Hepatities}
                    </p>
                    <p id="secondP">
                      Have donor diagonsed with jaundice before :{" "}
                      {para.Diagonse_Jaundice}
                    </p>
                  </section>
                  <section id="testFooter">
                    generated by {sessionStorage.getItem("user")} at{" "}
                    {Date().toLocaleString()}
                  </section>
                </div>
              );
            })}{" "}
          </>
        ) : null}
      </article>
    </main>
  );
};
export default Tests;
