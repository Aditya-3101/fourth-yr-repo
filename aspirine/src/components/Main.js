import React from "react";
import { useEffect } from "react";
import { BiDonateBlood } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import Card from "@material-ui/core/Card";
import { IoMdAdd } from "react-icons/io";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Main = (props) => {
  const [donors, setDonors] = React.useState([]);
  const [drop, setDrop] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/donors")
      .then((res) => res.json())
      .then((result) => {
        setDonors(result);
        setLoading(false);
        setUser(sessionStorage.getItem("user"));
      });
  }, []);

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
    <div
      className="Container"
      style={{
        background: "rgb(20,20,20)",
        width: "auto",
        height: "auto",
        position: "relative",
      }}
    >
      <Card
        variant="outlined"
        color="secondary"
        style={{
          background: "rgb(20,20,15)",
          height: "8vh",
          borderBottom: "1px solid white",
          display: "flex",
          justifyContent: "Center",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <li>
            <Typography
              variant="h5"
              className="cName"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f9f9f9",
                fontWeight: "bold",
              }}
            >
              <BiDonateBlood
                style={{
                  fontSize: "1.9rem",
                  fontWeight: "lighter",
                  color: "red",
                }}
              />
              Aspirine
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="secondary">
              {user}
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="secondary">
              <div
                style={{ color: "#f9f9f9" }}
                onMouseEnter={(e) => setDrop(!drop)}
                className="dropdown"
              >
                Register
                <IoMdArrowDropdown
                  className="downIcon"
                  style={{
                    verticalAlign: "middle",
                  }}
                />
                <div className="dropdown-content">
                  <Link className="regDon" to="/api/main/donors/register">
                    Register a donor
                  </Link>
                  <Link className="regHos" to="/api/main/hospitals/new">
                    Register hospital
                  </Link>
                  <Link className="regHos" to="/api/main/register/buyer/new">
                    Register Buyer
                  </Link>
                </div>
              </div>
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="secondary">
              <Link
                to="/api/main/orders"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Orders
              </Link>
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="secondary">
              <Link
                to="/api/main/eligibility"
                style={{ textDecoration: "none", color: "white" }}
              >
                Eligibility Criteria
              </Link>
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="secondary">
              <div
                style={{ color: "#f9f9f9" }}
                onMouseEnter={(e) => setDrop(!drop)}
                className="dropdown"
              >
                Configure E-mail
                <IoMdArrowDropdown
                  className="downIcon"
                  style={{
                    verticalAlign: "middle",
                  }}
                />
                <div className="dropdown-content">
                  <Link
                    className="regDon"
                    onClick={window.open(
                      "https://mail.google.com/mail/u/2/#inbox",
                      "_blank"
                    )}
                  >
                    Check Inbox
                  </Link>
                  <Link className="regHos" to="/api/main/sendMail">
                    Write Mail
                  </Link>
                </div>
              </div>
            </Typography>
          </li>
        </ul>
      </Card>
      <div
        className="table"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="container">
          <Card className="sidebar">
            <ul>
              <li
                className="sideBarAttr"
                style={{
                  color: "#f9f9f9",
                  fontFamily: "Arial",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#f9f9f9",
                    fontFamily: "Arial",
                  }}
                  to="/api/main/donors"
                >
                  Donors
                </Link>
              </li>
              <li className="sideBarAttr">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#f9f9f9",
                    fontFamily: "Arial",
                  }}
                  to="/api/test_results"
                >
                  Test Results
                </Link>
              </li>
              <li
                className="sideBarAttr"
                style={{
                  color: "#f9f9f9",
                  fontFamily: "Arial",
                }}
              >
                <Link
                  to="/api/main/orders"
                  style={{
                    color: "#f9f9f9",
                    textDecoration: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Orders
                </Link>
              </li>
              <li
                className="sideBarAttr"
                style={{
                  color: "#f9f9f9",
                  fontFamily: "Arial",
                }}
              >
                Notifications
              </li>
            </ul>
          </Card>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
