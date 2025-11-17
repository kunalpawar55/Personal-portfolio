  import React from 'react'
  import Header from './Header'
  import Footer from './Footer'
  import internship from '../images/kunalintern.jpg'
  import Fullstack from '../images/Java_certificate.jpg'
  import GENAI from '../images/GenAi.jpg'

  import '../CSS/Certification.css';
  export default function Certification() {

  const certidata=[
    {
      CertficateTitle:"Internship Certification",
      CertficateImage:internship
    },
    {
      CertficateTitle:"Full Stack Certification",
      CertficateImage:Fullstack
    },
    {
      CertficateTitle:"Generative AI Certification",
      CertficateImage:GENAI     
    },
 

  ]

    return (
      <div className='main-certification'>
        <Header/>
  <h1>Certification</h1>
        <div className="certification">
              {
                certidata.map((item,index)=>
                (
                  <div className="certification-image" key={index}>
                    <h2>{item.CertficateTitle}</h2>
                    <img src={item.CertficateImage} alt={item.CertficateTitle} />
                  </div>
                ))
              }
        
        </div>
      <Footer/>
      </div>
    )
  }
