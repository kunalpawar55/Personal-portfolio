import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import internship from "../images/kunalintern.jpg";
import Fullstack from "../images/Java_certificate.jpg";
import GENAI from "../images/GenAi.jpg";

export default function Certification() {
  const certidata = [
    {
      title: "Internship Certification",
      image: internship,
    },
    {
      title: "Full Stack Certification",
      image: Fullstack,
    },
    {
      title: "Generative AI Certification",
      image: GENAI,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <h1
        className="text-center py-14 text-4xl font-bold tracking-widest
                   border-b border-sky-400
                   text-sky-400
                   drop-shadow-[0_0_12px_#00bfff]"
      >
        Certification
      </h1>

      <div className="px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
        {certidata.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl p-6
                       border border-sky-400/25
                       shadow-[0_0_20px_rgba(0,191,255,0.15)]
                       hover:shadow-[0_0_35px_rgba(0,191,255,0.4)]
                       hover:-translate-y-2
                       transition-all duration-500
                       max-w-sm w-full"
          >
            <h2 className="text-xl font-semibold text-center mb-4 text-sky-400">
              {item.title}
            </h2>

            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-xl
                         hover:scale-105
                         transition duration-500"
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
