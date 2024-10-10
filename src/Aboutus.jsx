import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";
import kunal from "./images/kunal.jpg";
import resumePDF from "./images/KUNAL_PAWAR_RESUME (3).pdf";

export default function Aboutus() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "KUNAL_PAWAR_RESUME (3)";
    link.click();
  };

  return (
    <div>
      <Header />
      <div className="main1">
        <div className="grid-container">
          <div className="grid-item grid-item-70">
            <h1 className="about text-center">About Me</h1>
            <p>Welcome to my portfolio! I’m Kunal, a dedicated Full Stack developer who enjoys building both the front and back end of web applications. My passion lies in creating user-friendly, responsive, and efficient digital experiences.</p>

            <h3 className="text-center blue-text">My Journey</h3>
            <p>
              My journey in web development began with learning the basics of HTML and CSS. I graduated from <b>Z.B. Patil College</b> and have played Kabaddi at the university level once and at the state level twice. Apart from web development, I enjoy trekking and exploring new trails!
            </p>

            <div className="IDO">
              <h2>What I Do:</h2>
              <ul>
                <li>
                  <b>Frontend Development:</b> I specialize in building responsive, interactive, and visually appealing web interfaces using modern technologies like React.js.
                </li>
                <li>
                  <b>Backend Development:</b> I have hands-on experience with Java, Node.js, and various backend frameworks to create robust and scalable server-side applications.
                </li>
                <li>
                  <b>UI/UX Design:</b> I design user-centric interfaces that provide seamless and engaging user experiences.
                </li>
                <li>
                  <b>Continuous Learning:</b> I am dedicated to staying updated with the latest trends and advancements in web development.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-item grid-item-30">
            <img src={kunal} alt="Kunal" className="kunal" />
          </div>
        </div>
        <br />
        <div className="parent-container">
          <button className="btn-1" onClick={handleDownload}>
            Download Resume
          </button>
        </div>
        <br /><br /><br />
      </div>
      <Footer />
    </div>
  );
}
