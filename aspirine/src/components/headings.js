import React from "react";
import { Link } from "react-router-dom";
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
      <div className="blank"></div>
    </>
  );
};
export default Headings;
