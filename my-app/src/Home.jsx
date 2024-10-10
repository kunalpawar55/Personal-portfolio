import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import imag1 from './images/kunal2.jpg';
import airplaneImage from './images/Airoplane.jpg'; 
import clock from './images/images.jpeg'; 
import './Home.css'; 
import Lan_com from './Lan_com';
import { Link, useNavigate } from 'react-router-dom';
import { data } from './Data/Projectdata';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Project');
  };
  return (
    <div>
    <div className="main">     
      <Header/>
       <div className='intro'>
        <h5><b>Introduction</b> </h5>
        <h3 className='text'>
          Hello <br />
          I am Kunal <br />
          I  graduated in Information Technology in 2023 and have completed a Full Stack Development course at Cyber Success. Additionally, 
          I have  completed an internship at Corefin Expert in Pune.
        </h3>
        <img src={imag1} alt="Kunal" className='img1' />
        <br />
        <Link to={'/contect'}><button className='conme'>Contact Me</button></Link>
      </div>
      <h1>My Project</h1>

      <div class="project-container" onClick={handleNavigate}> 
        
      <div className='project'>
        <div className='projectLogo'>
          <img src={airplaneImage} alt="Airplane" />
        </div>
        <div className='projectDescription'>
          <h2>Flight Booking Application</h2>  
          

        </div>
      </div> 
      
 
      <div className='project2'>
   

        <div>
          <img src={clock} alt="Clock" />
        </div>
        <h2>World Alarm Clock</h2>
        
        
      </div>
     
      </div>
      
      <button onClick={handleNavigate} className='morepro'>More Project</button>
    



        <Lan_com/>
       
        </div>

      <Footer />
    </div>
  );
}
