import React from "react";
import { Card } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Store = () => {
  const grps = [
    {
      id: 1,
      value: "A+",
    },
    {
      id: 2,
      value: "B+",
    },
    {
      id: 3,
      value: "O+",
    },
    {
      id: 4,
      value: "AB+",
    },
    {
      id: 5,
      value: "A-",
    },
    {
      id: 6,
      value: "B-",
    },
    {
      id: 7,
      value: "O-",
    },
    {
      id: 8,
      value: "AB-",
    },
  ];

  return (
    <>
      <Card
        variant="outlined"
        id="storeContainer"
        color="secondary"
        style={{ border: "1px solid red" }}
      >
        <Container id="store-progress">
          <h2>Vault Details</h2>
          <div id="odd-container">
            <div id="first-odd">
              A+
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="second-odd">
              B+
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="third-odd">
              O+
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="fourth-odd">
              AB+
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
          </div>
          <div id="even-container">
            <div id="first-even">
              A-
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="second-even">
              B-
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="third-even">
              O-
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
            <div id="fourth-even">
              AB-
              <CircularProgressbar
                value="70"
                text="70%"
                styles={buildStyles({
                  pathColor: "#f50057",
                  textColor: "#f50057",
                })}
              />
            </div>
          </div>
        </Container>
      </Card>
    </>
  );
};

export default Store;
