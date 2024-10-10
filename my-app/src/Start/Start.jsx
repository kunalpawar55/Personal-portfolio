import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCoffee, faThumbsUp, faThumbTack } from '@fortawesome/free-solid-svg-icons'; // Import specific icon


export default function Start() {
    const navigate = useNavigate();
   
   
   
   
   
   useEffect(() => {
      
        const timer = setTimeout(() => {
            navigate('/Home');
        }, 2000);

       
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='Start1'>
            <div className="box">
              
            </div>
            
            <div className="name">
                <h1><i>Welcome To</i> <span id='kp'><b>Kunal</b> Portfolio</span> </h1>
            </div>
            
            <div className="box1">
                
            </div>
           
        </div>
    );
}
