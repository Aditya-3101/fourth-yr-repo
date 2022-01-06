import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import Headings from "./headings";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_2T6OaIrf40LkLEOKOzaCo");

const Mail = () => {
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oi1y236",
        "template_jont0i3",
        e.target,
        "user_2T6OaIrf40LkLEOKOzaCo"
      )
      .then(
        (result) => {
          alert("Email sent successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="mailContainer">
      <div className="heading">
        <Headings heading="Configure E-Mails" />
      </div>
      <form className="emailForm" autoComplete="off" onSubmit={sendMail}>
        <TextField
          className="emailSender"
          variant="outlined"
          id="outlined-basic"
          color="secondary"
          label="Name"
          focused="true"
          name="to_name"
          type="name"
          startAdornment={
            <InputAdornment position="start">
              <AiOutlineMail className="mailIcon" />
            </InputAdornment>
          }
        />
        <TextField
          className="emailSubject"
          variant="outlined"
          id="outlined-basic"
          color="secondary"
          label="Email"
          focused="true"
          type="email"
          name="email"
        />
        <TextField
          className="emailMessage"
          id="outlined-basic"
          label="Message"
          variant="outlined"
          color="secondary"
          multiline="true"
          rows="15"
          focused="true"
          name="message"
          InputLabelProps={{ shrink: "true" }}
        />
        <input type="submit" className="submitBtn" value="Send" />
      </form>
    </main>
  );
};
export default Mail;
