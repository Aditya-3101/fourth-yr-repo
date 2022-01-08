import React from "react";
import Tables from "./Table";
import Headings from "./headings";
import { useEffect, useState } from "react";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { GoSearch } from "react-icons/go";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";

const Orders = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [oid, setoid] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/orders")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        setVisible(false);
        setTable(result);
        setSearch("");
        setoid("");
      });
  }, []);

  const submit = () => {
    if (oid != null) {
      setoid("");
    }

    fetch(`http://localhost:4000/api/orders/search?name=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        setVisible(true);
      });
  };

  const checkBgrp = () => {
    if (search !== null) {
      setSearch("");
    }

    fetch(`http://localhost:4000/api/orders/search/id?id=${oid}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setVisible(true);
      });
  };

  const recover = () => {
    setSearch("");
    setoid("");
    setVisible(false);
    setData(table);
  };

  if (loading) {
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
        <Headings heading="Orders" />
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
          label="Search by Order ID"
          color="secondary"
          value={oid}
          onChange={(e) => {
            setoid(e.target.value);
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
                {oid ? (
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
          aria-label
          style={{
            overflowX: "hidden",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ color: "white" }}>
                OID
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Hospital Name
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Fully packed RBC
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                units
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                bill
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                status
              </TableCell>
            </TableRow>
          </TableHead>
          {data.map((para, index) => {
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

export default Orders;
