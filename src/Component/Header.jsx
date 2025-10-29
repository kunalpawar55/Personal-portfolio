import React from 'react';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Header.css';
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faLinkedin,  faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "KUNAL_PAWAR_RESUME";
    link.click();
  };

  return (
    <header>
      <div id="leftSection">
        <img
          src={logo}
          alt="Logo"
          id="logo"
          onClick={handleClick}
        />
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Project">Projects</Link></li>
          <li><Link to="/Language">Skills</Link></li>
          <li><Link to="/contect">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>

      <div id="rightSection">
        <button onClick={handleDownload}>Download Resume</button>
        <div id="socialIcons">
          <a href="www.linkedin.com/in/kunal-pawar-4b6942289" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/917719000398" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://github.com/kunalpawar55" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
        </div>
      </div>
    </header>
  );
}
