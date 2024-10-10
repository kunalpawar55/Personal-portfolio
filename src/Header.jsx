import React from 'react';
import logo from './images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();
      
  const handleClick = () => {
    navigate('/Home');
  };


  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={handleClick} />
      <div className={styles.pages}>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Project">Project</Link></li>
          <li><Link to="/Language">Skills</Link></li>
          <li><Link to="/contect">Contact-me</Link></li>
          <li><Link to="/About">About-me</Link></li>
        </ul>
      </div>
    </div>
  );
}
