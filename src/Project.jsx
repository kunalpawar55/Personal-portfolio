import React from "react";
import Header from "./Header";
import { data } from "./Data/Projectdata";
import Footer from "./Footer";
import './Projects.css'

export default function Project() {
  return (
    <div>
      <Header />
      <div className="project1 bg-black py-5">
        <div className="seprate flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center border-2 border-solid border-sky-500">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl p-4 text-center m-2 border border-gray-600"
            >
              <img className="image" src={item.imag} alt={item.title} />

              <h1 className="text-white text-2xl font-semibold mb-2">
                {item.title}
              </h1>
              <p className="text-white font-medium descriptin">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
