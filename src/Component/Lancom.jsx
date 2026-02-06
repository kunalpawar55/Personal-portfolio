import React from "react";
import java from "../images/java.png";
import Html from "../images/Html.png";
import css from "../images/css.png";
import sql from "../images/sql.png";
import react from "../images/react.png";
import js from "../images/js.png";
import uiux from "../images/th.jpeg";
import Spring from "../images/Spring.png";
import { useNavigate } from "react-router-dom";

function Lan_com() {
  const navigate = useNavigate();

  const skills = [
    { img: java, name: "JAVA" },
    { img: Html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: sql, name: "MySQL" },
    { img: react, name: "REACT" },
    { img: js, name: "JAVASCRIPT" },
    { img: uiux, name: "UI / UX" },
    { img: Spring, name: "SPRING BOOT" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            My <span className="text-[#2563EB]">Skills</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Quick overview of the technologies I work with.
          </p>
        </div>

        {/* SKILLS ROW */}
        <div
          onClick={() => navigate("/language")}
          className="flex gap-5 overflow-x-auto pb-3
                     cursor-pointer select-none"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[170px]
                         bg-white border border-gray-200
                         rounded-3xl p-6 text-center
                         shadow-sm hover:shadow-lg
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl
                           bg-gray-100 border border-gray-200
                           flex items-center justify-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h2 className="mt-4 text-sm font-extrabold tracking-wide text-[#0B1B3A]">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/language")}
            className="px-8 py-3 rounded-2xl
                       bg-[#0B1B3A] text-white font-bold
                       shadow-md hover:opacity-95 transition"
          >
            View All Skills
          </button>
        </div>
      </div>
    </section>
  );
}

export default Lan_com;
