import React from 'react';
import Header from '../Component/Header.jsx';
import Footer from '../Component/Footer.jsx';
import imag1 from '../images/kunalp.jpg';
import airplaneImage from '../images/Airoplane.jpg';
import clock from '../images/images.jpeg';
import '../CSS/Home.css';
import LanCom from "./Lancom.jsx";
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Project');
  };

  return (
    <div className="main">
      <Header />

      <section className="intro">
        <div className="intro-text">
          <h5><b>Introduction</b></h5>
          <p className="text">
  I’m <b>Kunal Pawar</b>, a passionate developer with a strong foundation in
  <b> Information Technology</b>. I graduated in 2023 and am currently pursuing
  my <b>MSc in Information Technology</b>. I’ve also completed a
  <b> Full Stack Development</b> course at Cyber Success and recently completed
  an internship at <b>CorefinXperts</b> in Pune.
</p>

          <Link to="/contect">
            <button className="conme">Contact Me</button>
          </Link>
        </div>

        <div className="intro-image">
          <img src={imag1} alt="Kunal" />
        </div>
      </section>

      <section className="projects-section">
        <h1>My Projects</h1>
        <div className="project-container" onClick={handleNavigate}>
          <div className="project-card">
            <img src={airplaneImage} alt="Flight Booking" />
            <h2>Flight Booking Application</h2>
          </div>

          <div className="project-card">
            <img src={clock} alt="World Clock" />
            <h2>World Alarm Clock</h2>
          </div>
        </div>

        <button onClick={handleNavigate} className="morepro">
          View More Projects
        </button>
      </section>

      <LanCom />
      <Footer />
    </div>
  );
}
