import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Header.css';
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    navigate('/');
    setMenuOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "KUNAL_PAWAR_RESUME";
    link.click();
  };

  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="Logo" id="logo" onClick={handleClick} />
      </div>

      {/* Hamburger for mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      <nav className={menuOpen ? "active" : ""}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Project" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/Language" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      </nav>

      <div id="rightSection">
        <button onClick={handleDownload}>Download Resume</button>
        <div id="socialIcons">
          <a href="https://www.linkedin.com/in/kunal-pawar-4b6942289" target="_blank" rel="noreferrer">
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
