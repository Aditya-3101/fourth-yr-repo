import React from "react";
import { MdBloodtype } from "react-icons/md";
import { BiFirstAid } from "react-icons/bi";

const Logins = () => {
  return (
    <section className="login-container">
      <div className="loginText">
        Hello User kindly select Proper Login option
      </div>
      <section class="section-container">
        <div className="hospital">
          <BiFirstAid className="first-aid-logo" />
          <p>Hospital Login</p>
        </div>
        <div className="blood-bank">
          <MdBloodtype className="blood-bank-logo" />
          <p>Blood Bank</p>
        </div>
      </section>
    </section>
  );
};

export default Logins;
