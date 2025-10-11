import React from "react";
import avatar from "../assets/avatar-content.jpg";
import side_image from "../assets/dev.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="container">
        <div className="home-content">
          <img src={avatar} alt="" className="image-header" />
          <div className="content-header">Front end developer</div>
          <div className="content">
            I am a front end developer for entry level, I have used html css,
            javascript to build some front end project .Open to volunteering on
            projects to gain experience, with a strong commitment to delivering
            quality results
          </div>
          <div className="content-footer">
            <a
              href="https://www.linkedin.com/in/ayomide-adediji-082813329"
              target="_blank"
            >
              <i class="fab fa-linkedin icon"></i>
            </a>
            <a href="https://wa.me/08124737260" target="_blank">
              <i class="fab fa-whatsapp icon"></i>
            </a>
            <a href="https://t.me/Ayomideadediji" target="_blank">
              <i class="fa-brands fa-telegram icon"></i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src={side_image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
