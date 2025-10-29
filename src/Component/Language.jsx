import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "../CSS/Language.css";
import { landata } from "../Data/Languagedata";

export default function Language() {
  return (
    <div>
      <Header />
      <div className="dev-container">
        <h1 className="skill-title">SKILLS</h1>
        <div className="language-grid">
          {landata.map((item, index) => (
            <div className="lan-card" key={index}>
              <div className="lan-glow"></div>
              <img src={item.img} alt={item.lanname} className="imagelan" />
              <h2>{item.lanname}</h2>
              <p>
                <span>Skills</span>: {item.skills}
              </p>
              <h3>
                <span>Project</span>: {item.project}
              </h3>
              <h5>
                <b><span>Rate Myself</span></b>: {item.rating}/10
              </h5>

              <div
                className="rating"
                style={{
                  background: `linear-gradient(to right, #00aaff ${item.rating * 10}%, #333 ${item.rating * 10}%)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
