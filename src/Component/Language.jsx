import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { landata } from "../Data/Languagedata";

export default function Language() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />

      <div className="px-6 md:px-20 py-16">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-widest text-sky-400 mb-14">
          SKILLS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {landata.map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-950 rounded-2xl p-8 text-center
                         border border-sky-400/20
                         hover:-translate-y-3
                         hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]
                         transition-all duration-500"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                              from-transparent via-sky-400/20 to-transparent
                              opacity-0 hover:opacity-100 transition duration-500" />

              <img
                src={item.img}
                alt={item.lanname}
                className="w-24 h-24 mx-auto mb-4 object-contain"
              />

              <h2 className="text-2xl font-semibold text-sky-400 mb-2">
                {item.lanname}
              </h2>

              <p className="text-sm text-gray-300 mb-1">
                <span className="text-sky-400 font-semibold">Skills:</span>{" "}
                {item.skills}
              </p>

              <h3 className="text-sm text-gray-300 mb-1">
                <span className="text-sky-400 font-semibold">Project:</span>{" "}
                {item.project}
              </h3>

              <h5 className="text-sm mb-4">
                <span className="text-sky-400 font-semibold">
                  Rate Myself:
                </span>{" "}
                {item.rating}/10
              </h5>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${item.rating * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
