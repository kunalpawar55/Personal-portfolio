import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { data } from "../Data/Projectdata";

export default function Project() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <div className="px-4 py-16">
        <div className="flex flex-wrap justify-center gap-10">

          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#111] rounded-2xl overflow-hidden
                         w-full max-w-[380px] p-5
                         border border-[#222]
                         shadow-[0_0_10px_rgba(0,255,255,0.1)]
                         hover:-translate-y-2
                         hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
                         transition-all duration-500"
            >
              <div
                className="absolute inset-0 rounded-2xl
                           bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500
                           blur-xl opacity-0
                           hover:opacity-40
                           transition duration-500"
              ></div>

              <img
                src={item.imag}
                alt={item.title}
                className="relative z-10 w-full h-[220px]
                           object-cover rounded-xl"
              />

              <h1 className="relative z-10 text-2xl font-semibold mt-4">
                {item.title}
              </h1>

              <p className="relative z-10 text-gray-300 text-sm mt-2 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}
