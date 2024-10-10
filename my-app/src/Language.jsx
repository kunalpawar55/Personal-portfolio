import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Language.css";
import { landata } from "./Data/Languagedata";

export default function Language() {
  return (
    <div>
      <Header />
      <div className="dev-container">
        <h1>SKILLS</h1>
        {landata.map((item, index) => (
          <div className="container" key={index}>
            <img src={item.img} alt="" className="imagelan" />
            <h2>{item.lanname}</h2>
            <p>
              <span>Skills</span>
              :{item.skills}
            </p>
            <h3>
              <span>Project</span>:
              {item.project}
            </h3>
            <h5 >
              <span><b>Rate My Self</b></span>: {item.rating}/10
            </h5>
            <div
              className="rating"
              style={{background: `linear-gradient(to right, red ${item.rating * 10}%, white 0%)`, }}
            ></div>
           
          </div>
        ))}
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
