import React from 'react';
import logo from './images/logo.png'; 
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faInstagram,faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>

<div className={styles.socialIcons}>
        <a className={styles.linkdin} href="https://www.linkedin.com/in/kunal-pawar-4b6942289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className={styles.Whatsapp} href="https://wa.me/7719000398?text=Hello%20Kunal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
       
      </div>
      <img src={logo} alt="Logo" className={styles.logo} />

      <a className={styles.instagram} href="https://www.instagram.com/kunal_pawar77?igsh=aGg4dG1xcjVmaHli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className={styles.tele} href="mailto:kunalpawar9230@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      <div className={styles.pages}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Project">Project</Link></li>
          <li><Link to="/Language">Language</Link></li>
          <li><Link to="/contect">Contact-me</Link></li>
          <li><Link to="/About">About-me</Link></li>
        </ul>
      </div>
      
    </div>
  );
}
