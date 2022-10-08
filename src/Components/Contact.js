import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import Loader from "./Loader";

function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dzovcj2",
        "template_qo4v4xu",
        "form",
        "UvbaAW7-q9BLVMFyQ"
      )
      .then(() => {
        alert("Message Sent Successfully.");
        window.location.reload(false);
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="head">Contact Me</div>
      <div className="form">
        <form className="form" ref={refForm} onSubmit={sendEmail}>
          <div className="name">
            <input type="text" name="name" id="" placeholder="Name" />
            <input type="email" name="email" id="" placeholder="Email" />
          </div>
          <input type="text" name="subject" id="" placeholder="Subject" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div className="send">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
