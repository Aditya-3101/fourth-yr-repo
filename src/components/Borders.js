import React from "react";
import Tables from "./Table";
import Headings from "./headings";
import { useEffect, useState } from "react";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/orders")
      .then((res) => res.json())
      .then((result) => setData(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

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
    <>
      <div className="heading" style={{ background: "rgb(20,20,20)" }}>
        <Headings heading="Orders" />
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
    </>
  );
};

export default Orders;
