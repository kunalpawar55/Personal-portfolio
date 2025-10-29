import React, { useState } from 'react';
import java from './images/java.png';
import Html from './images/Html.png';
import css from './images/css.png';
import sql from './images/sql.png';
import react from './images/react.png';
import js from './images/js.png';
import styles from './lan.module.css';
import uiux from './images/th.jpeg'
import Spring from './images/Spring.png'

import { Link, useNavigate } from 'react-router-dom';

function Lan_com() {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Language');
  };
  return (
    <div>
      <div className="Language-container">
        <h1>My Skills</h1>


        <div className={styles.lan} onClick={handleClick}>
          <div className={styles.imgJava}>
            <img src={java} alt="Java" />
            <h2>JAVA</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={Html} alt="HTML" />
            <h2>HTML</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={css} alt="CSS" />
            <h2>CSS</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={sql} alt="My-SQL" />
            <h2>My-SQL</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={react} alt="React" />
            <h2>REACT</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={js} alt="JavaScript" />
            <h2>JAVA SCRIPT</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={uiux} alt="uiux" />
            <h2>Ui/Ux</h2>
          </div>
          <div className={styles.imgJava}>
            <img src={Spring} alt="Spring" />
            <h2>Spring Boot</h2>
          </div>

        </div>
        <button onClick={handleClick} className={styles.btnlan}>Details</button>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default Lan_com;
