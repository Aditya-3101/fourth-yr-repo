import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { IoIosArrowBack } from "react-icons/io";

const Headings = (props) => {
  return (
    <>
      <div className="back">
        <Link to="/api/main" className="backlink">
          <IoIosArrowBack className="backlogo" /> <p> back</p>
        </Link>
      </div>

      <p>{props.heading}</p>
      {props.heading === "Register New Donor" ? (
        <div
          className="blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "Center",
          }}
        >
          <Link
            to="/api/main/eligibility"
            style={{
              width: "100%",
              height: "70%",
              display: "flex",
              justifyContent: "Center",
              alignItems: "Center",
              textDecoration: "none",
              color: "#f9f9f9",
              borderRadius: "35px",
              border: "1px solid #f50057",
              boxShadow:
                "2px 2px 4px #f50057, 2px -2px 4px #f50057,-2px 2px 4px #f50057",
            }}
          >
            Check Eligibility
          </Link>
        </div>
      ) : (
        <div className="blank"></div>
      )}
    </>
  );
};
export default Headings;
