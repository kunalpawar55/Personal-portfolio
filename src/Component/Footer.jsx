import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] text-white text-center
                 px-6 py-16
                 border-t-2 border-sky-400
                 animate-[fadeIn_1.2s_ease-in-out]"
    >
      <div className="mb-6 flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full mb-3
                     hover:rotate-12 hover:scale-110
                     hover:shadow-[0_0_18px_#00aaff]
                     transition-all duration-500"
        />

        <h2 className="text-2xl font-semibold tracking-widest text-sky-400
                       drop-shadow-[0_0_12px_#00aaff]">
          Kunal Pawar
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Building experiences with code ⚡
        </p>
      </div>

      <div className="mb-8">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
          <li>
            <Link
              to="/"
              className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#00aaff]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#00aaff]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Language"
              className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#00aaff]"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contect"
              className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#00aaff]"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#00aaff]"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-8 text-2xl mb-8">
        <a
          href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300
                     hover:text-sky-400
                     hover:scale-125
                     hover:drop-shadow-[0_0_15px_#00aaff]
                     transition-all duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://wa.me/7719000398?text=Hello%20Kunal"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300
                     hover:text-sky-400
                     hover:scale-125
                     hover:drop-shadow-[0_0_15px_#00aaff]
                     transition-all duration-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href="https://www.instagram.com/kunal_pawar77"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300
                     hover:text-sky-400
                     hover:scale-125
                     hover:drop-shadow-[0_0_15px_#00aaff]
                     transition-all duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="mailto:kunalpawar9230@gmail.com"
          className="text-gray-300
                     hover:text-sky-400
                     hover:scale-125
                     hover:drop-shadow-[0_0_15px_#00aaff]
                     transition-all duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <p className="text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-sky-400 font-semibold">
          Kunal Pawar
        </span>{" "}
        | All Rights Reserved
      </p>
    </footer>
  );
}
