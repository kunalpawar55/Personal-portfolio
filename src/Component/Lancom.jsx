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
    <div className="bg-black text-white py-20">

      {/* TITLE */}
      <h1 className="text-center text-4xl font-bold mb-12 text-sky-400
                     drop-shadow-[0_0_15px_#00bfff]">
        My Skills
      </h1>

      {/* SKILLS ROW */}
      <div
        onClick={() => navigate("/Language")}
        className="flex gap-8 px-8 overflow-x-auto scrollbar-hide
                   justify-start lg:justify-center
                   cursor-pointer"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="min-w-[170px] bg-[#222]
                       border border-gray-700
                       rounded-xl p-6 text-center
                       shadow-lg
                       hover:scale-110
                       hover:shadow-[0_0_25px_#00bfff]
                       transition-all duration-500"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 mx-auto rounded-lg
                         shadow-[0_5px_15px_rgba(255,255,255,0.2)]"
            />

            <h2 className="mt-4 text-lg font-semibold tracking-wide">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/Language")}
          className="px-10 py-3 rounded-xl
                     bg-black border border-white
                     hover:bg-white hover:text-black
                     transition-all duration-500
                     shadow-md hover:shadow-xl"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default Lan_com;
