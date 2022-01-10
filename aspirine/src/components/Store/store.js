import React from "react";
import { Card } from "@material-ui/core";
import { Container } from "@material-ui/core";

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
        <Container id="store-grid-item-1" variant="outlined"></Container>
      </Card>
    </>
  );
};

export default Store;
