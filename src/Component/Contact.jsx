import React from "react";
import picture from "../assets/picture.jpg";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <div className="contact-card">
            <div className="bold-text">Phone: &nbsp;</div>
            <div className="contact">08124737260</div>
          </div>
          <div className="contact-card">
            <div className="bold-text">E-mail: &nbsp;</div>
            <div className="contact">adedijiay123@gmail.com</div>
          </div>
          <div className="contact-card">
            <div className="bold-text">LinkedIn: &nbsp;</div>
            <div className="contact">linkedin profile</div>
          </div>
        </div>
        <div className="contact-image">
          <img src={picture} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
