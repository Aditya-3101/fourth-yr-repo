import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { VscAccount, VscListSelection } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import Headings from "../header/headings";

const Logger = () => {
  const [empId, setEmpId] = useState("");
  const [user, setUser] = useState("");
  const [psword, setPsword] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if ((user !== null) & (psword !== null)) {
      if ((empId.length <= 5) & (user.length <= 14) & (psword.length <= 8)) {
        fetch("http://localhost:4000/api/login/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            empId: empId,
            name: user,
            psword: psword,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            alert(`Data inserted for Id ${empId}`);
            setEmpId("");
            setUser("");
            setPsword("");
          })
          .catch((err) => console.log(err));
      } else {
        alert("Length of credentials is too long");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="heading">
        <Headings heading="Register New user" />
      </div>
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          height: "100vh",
          background: "rgb(20,20,20)",
        }}
      >
        <Card
          variant="filled"
          style={{
            background: "black",
            color: "white",
            width: "40vw",
            padding: "2rem 0 2rem 0",
            fontFamily: "Arial",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          color="primary"
        >
          <Typography
            variant="h4"
            color="secondary"
            style={{
              marginBottom: "1rem",
            }}
          >
            Aspirine Blood Bank Services
          </Typography>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", marginBottom: "2rem" }}
          >
            Register
          </Typography>
          <TextField
            id="outlined-basic"
            label="Employment Id"
            variant="outlined"
            color="secondary"
            type="number"
            value={empId}
            style={{
              fontFamily: "Arial",
              borderRadius: "10px",
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
              borderBottomLeftRadius: "1px",
              borderBottomRightRadius: "1px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VscListSelection
                    style={{
                      color: "#f9f9f9",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setEmpId(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            color="secondary"
            type="text"
            value={user}
            style={{
              fontFamily: "Arial",
              borderRadius: "10px",
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
              borderBottomLeftRadius: "1px",
              borderBottomRightRadius: "1px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VscAccount
                    style={{
                      color: "#f9f9f9",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="password"
            id="outlined-basic"
            color="secondary"
            type="password"
            value={psword}
            style={{
              fontFamily: "Arial",
              borderRadius: "10px",
              marginTop: "1rem",
              borderBottom: "1px solid gray",
              borderBottomLeftRadius: "1px",
              borderBottomRightRadius: "1px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine
                    style={{
                      color: "#f9f9f9",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPsword(e.target.value)}
          />
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: "2rem", textDecoration: "none" }}
            onClick={submit}
          >
            Log in
          </Button>
        </Card>
      </article>
    </>
  );
};

export default Logger;
