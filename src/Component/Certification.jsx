import React from "react";
import internship from "../images/kunalintern.jpg";
import Fullstack from "../images/Java_certificate.jpg";
import GENAI from "../images/GenAi.jpg";

export default function Certification() {
  const certidata = [
    { title: "Internship Certification", image: internship },
    { title: "Full Stack Certification", image: Fullstack },
    { title: "Generative AI Certification", image: GENAI },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            Certifi<span className="text-[#2563EB]">cation</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Courses & credentials I have completed.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certidata.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl
                         shadow-md hover:shadow-xl
                         transition-all duration-300
                         overflow-hidden"
            >
              {/* Title */}
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-extrabold text-[#0B1B3A]">
                  {item.title}
                </h2>
              </div>

              {/* Image */}
              <div className="px-6 pb-6">
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover
                               hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
