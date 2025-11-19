import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../CSS/Footer.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logoSection">
        <img src={logo} alt="Logo" className="footerLogo" />
        <h2 className="footerName">Kunal Pawar</h2>
        <p className="tagline">Building experiences with code ⚡</p>
      </div>

      <div className="footerPages">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Project">Projects</Link></li>
          <li><Link to="/Language">Skills</Link></li>
          <li><Link to="/contect">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </div>

      <div className="footerSocialIcons">
        <a
          href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/7719000398?text=Hello%20Kunal"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.instagram.com/kunal_pawar77"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:kunalpawar9230@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <p className="copyText">
        © {new Date().getFullYear()} <b>Kunal Pawar</b> | All Rights Reserved
      </p>
    </footer>
  );
}
