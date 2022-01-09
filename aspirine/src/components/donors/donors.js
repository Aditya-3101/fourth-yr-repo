import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headings from "../header/headings";
import { InputAdornment, TextField, Button } from "@material-ui/core";
import { GoSearch } from "react-icons/go";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [bgrp, setBgrp] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/donors")
      .then((res) => res.json())
      .then((result) => {
        setDonors(result);
        setTable(result);
        setLoading(false);
        setVisible(false);
        setSearch("");
        setBgrp("");
      });
  }, []);

  const submit = () => {
    if (bgrp != null) {
      setBgrp("");
    }

    fetch(`http://localhost:4000/api/donors/search?name=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setDonors(result);
        setLoading(false);
        setVisible(true);
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

    fetch(`http://localhost:4000/api/donors/sort?grp=${grp}`)
      .then((res) => res.json())
      .then((result) => {
        setDonors(result);
        setVisible(true);
      });
  };

  const recover = () => {
    setSearch("");
    setBgrp("");
    setVisible(false);
    setDonors(table);
  };

  if (loading) {
    return (
      <div
        style={{
          background: "rgb(20,20,20)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ color: "white" }}>Loading...</h1>
      </div>
    );
  }

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
        <Headings heading="Donors" />
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
      </div>
      <main className="tables">
        <table className="tableBody">
          <thead className="tableC">
            <tr>
              <th className="tableRow" align="Center">
                ID
              </th>
              <th className="tableRow" align="Center">
                Name{" "}
              </th>
              <th className="tableRow" align="Center">
                Age{" "}
              </th>
              <th className="tableRow" align="Center">
                Gender{" "}
              </th>
              <th className="tableRow" align="Center">
                Date of Birth
              </th>
              <th className="tableRow" align="Center">
                Phone no
              </th>
              <th className="tableRow" align="Center">
                Blood group
              </th>
              <th className="tableRow" align="Center">
                Weight
              </th>
              <th className="tableRow" align="Center">
                Hemoglobin Level
              </th>
              <th className="tableRow" align="Center">
                Diagonse Hepatities
              </th>
              <th className="tableRow" align="Center">
                Diagonse Jaundice
              </th>
            </tr>
          </thead>
          {donors.map((para, index) => {
            return (
              <React.Fragment key={index}>
                <tr className="tableRow" onClick={() => alert(para.Id_no)}>
                  <td className="tableData" align="center">
                    {para.Id_no}
                  </td>
                  <td className="tableData" align="center">
                    {para.Name}
                  </td>
                  <td className="tableData" align="center">
                    {para.Age}
                  </td>
                  <td className="tableData" align="center">
                    {para.Gender}
                  </td>
                  <td className="tableData" align="center">
                    {String(para.DOB).slice(0, 10)}
                  </td>
                  <td className="tableData" align="center">
                    {para.Phone_no}
                  </td>
                  <td className="tableData" align="center">
                    {para.Blood_grp}
                  </td>
                  <td
                    className="tableData"
                    align="center"
                  >{`${para.Weight_in_kg}kg`}</td>
                  <td className="tableData" align="center">
                    {`${para.Hemoglobin_level}g/dl`}
                  </td>
                  <td className="tableData" align="center">
                    {para.Diagonse_Hepatities}
                  </td>
                  <td className="tableData" align="center">
                    {para.Diagonse_Jaundice}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </table>
      </main>
      <div className="buttons">
        <Link to="/api/main/donors/register">
          <abbr title="Register new Donor">
            <IoMdAdd className="addIcon" />
          </abbr>
        </Link>
      </div>
    </main>
  );
};
export default Donors;
