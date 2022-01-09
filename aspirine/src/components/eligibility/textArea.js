import React from "react";

const Area = (props) => {
  return (
    <section className="txtArea" style={{ color: "white" }}>
      <h2>{props.data.id}</h2>
      <div className="Statistics">
        {Object.entries(props.data.rules).map(([key, val]) => (
          <h4 key={key}>
            {key}: {val}
          </h4>
        ))}
      </div>
    </section>
  );
};
export default Area;
