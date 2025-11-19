import React from 'react';
import java from '../images/java.png';
import Html from '../images/Html.png';
import css from '../images/css.png';
import sql from '../images/sql.png';
import react from '../images/react.png';
import js from '../images/js.png';
import uiux from '../images/th.jpeg';
import Spring from '../images/Spring.png';
import '../CSS/Lancom.css';  
import { useNavigate } from 'react-router-dom';

function Lan_com() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Language');
  };

  return (
    <div>
      <div className="Language-container">
        <h1>My Skills</h1>

        <div className="lan" onClick={handleClick}>
          <div className="imgJava">
            <img src={java} alt="Java" />
            <h2>JAVA</h2>
          </div>
          <div className="imgJava">
            <img src={Html} alt="HTML" />
            <h2>HTML</h2>
          </div>
          <div className="imgJava">
            <img src={css} alt="CSS" />
            <h2>CSS</h2>
          </div>
          <div className="imgJava">
            <img src={sql} alt="MySQL" />
            <h2>MySQL</h2>
          </div>
          <div className="imgJava">
            <img src={react} alt="React" />
            <h2>REACT</h2>
          </div>
          <div className="imgJava">
            <img src={js} alt="JavaScript" />
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="imgJava">
            <img src={uiux} alt="UI/UX" />
            <h2>UI/UX</h2>
          </div>
          <div className="imgJava">
            <img src={Spring} alt="Spring Boot" />
            <h2>SPRING BOOT</h2>
          </div>
        </div>

        <button onClick={handleClick} className="btnlan">Details</button>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default Lan_com;
