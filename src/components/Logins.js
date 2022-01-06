import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Logins = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/api/login")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAuthUser(result);
      });
  }, []);

  const submit = () => {
    search(user, password);
    if (isFound === true) {
      sessionStorage.setItem("user", user);
      history.push("/api/main");
    } else {
      alert("Wrong Credentials");
    }
  };

  let isFound = false;

  const search = (log, pss) => {
    authUser.forEach((para) => {
      if (para.userName === log) {
        if (para.password === pss) {
          isFound = true;
        }
      }
    });
  };

  return (
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
          Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          color="secondary"
          type="text"
          style={{
            fontFamily: "Arial",
            borderRadius: "10px",
            marginBottom: "1rem",
          }}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="password"
          id="outlined-basic"
          color="secondary"
          type="password"
          style={{
            fontFamily: "Arial",
            borderRadius: "10px",
            marginTop: "1rem",
          }}
          onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Logins;
