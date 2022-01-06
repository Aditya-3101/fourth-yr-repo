import React from "react";
import Tables from "./Table";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Headings from "./headings";

const Tests = () => {
  const [loading, setLoading] = React.useState(true);
  const [test, setTest] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/api/lab/results")
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setTest(result);
      });
  }, []);

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
                Id No
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Donor Name
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Blood Grp
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Hemoglobin Level
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Diagonse Hepatities
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Diagonse Jaundice
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                WBC Count
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                RBC Count
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Mean Platelet Volume
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
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
    </main>
  );
};
export default Tests;
