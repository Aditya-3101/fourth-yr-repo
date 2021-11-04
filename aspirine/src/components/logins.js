import React from "react";
import { BiFirstAid } from "react-icons/bi";

const Logins = () => {
  return (
    <>
      <div className="loginText">
        Hello User kindly select Proper Login option
      </div>
      <section class="section-container">
        <div className="hospital">
          <BiFirstAid className="first-aid-logo" />
        </div>
      </section>
    </>
  );
};

export default Logins;
