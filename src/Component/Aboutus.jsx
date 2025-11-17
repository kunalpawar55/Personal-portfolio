import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/About.css";
import kunal from "../images/KunalpawarPhoto.jpg";
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";

export default function Aboutus() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Kunal_Pawar_Resume.pdf";
    link.click();
  };

  return (
    <div>
      <Header />
      <div className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
              Welcome to my portfolio! I’m <span className="blue">Kunal Pawar</span>, a dedicated Full Stack Developer who
              enjoys crafting both the frontend and backend of web applications.
              My passion lies in creating <b>user-friendly</b>, <b>responsive</b>,
              and <b>efficient</b> digital experiences.
            </p>

            <h3 className="journey-title">My Journey 🚀</h3>
            <p className="about-text">
              My journey in web development began with HTML & CSS. I graduated from{" "}
              <b>Z.B. Patil College</b> and have represented my university in
              <b> Kabaddi (State Level twice & University once)</b>. When not
              coding, I enjoy trekking and exploring nature!
            </p>

            <div className="what-i-do">
              <h2>What I Do 💻</h2>
              <ul>
                <li>
                  <b>Frontend Development:</b> I build interactive UIs using
                  modern frameworks like <b>React.js</b>.
                </li>
                <li>
                  <b>Backend Development:</b> Skilled in <b>Java</b> and
                  <b>Springboot</b> for building scalable backend systems.
                </li>
                <li>
                  <b>UI/UX Design:</b> Creating visually stunning and intuitive
                  user interfaces.
                </li>
                <li>
                  <b>Continuous Learning:</b> Always exploring new tech and
                  staying updated with the latest trends.
                </li>
              </ul>
            </div>

            <div className="btn-container">
              <button className="download-btn" onClick={handleDownload}>
                Download Resume
              </button>
            </div>
          </div>

          <div className="about-right">
            <div className="image-wrapper">
              <img src={kunal} alt="Kunal" className="kunal-img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
