import React from "react";
import Header from "./Header";
import { data } from "../Data/Projectdata";
import Footer from "./Footer";
import '../CSS/Projects.css';

export default function Project() {
  return (
    <div>
      <Header />
      <div className="project1">
        <div className="seprate">
          {data.map((item, index) => (
            <div key={index} className="project-card">
              <div className="card-glow"></div>
              <img className="image" src={item.imag} alt={item.title} />
              <h1>{item.title}</h1>
              <p className="descriptin">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
