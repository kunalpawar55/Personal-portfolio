import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-[#0B1B3A]">
              Kunal <span className="text-[#2563EB]">Pawar</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Building experiences with code ⚡
            </p>
          </div>

          {/* Middle Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 font-semibold">
            <Link to="/" className="hover:text-[#0B1B3A] transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#0B1B3A] transition">
              About
            </Link>

            <Link to="/project" className="hover:text-[#0B1B3A] transition">
              Projects
            </Link>

            <Link to="/language" className="hover:text-[#0B1B3A] transition">
              Skills
            </Link>

            <Link to="/contact" className="hover:text-[#0B1B3A] transition">
              Contact
            </Link>
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-5 text-xl text-gray-500">
            <a
              href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B1B3A] transition"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://wa.me/917719000398"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B1B3A] transition"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.instagram.com/kunal_pawar77"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B1B3A] transition"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://github.com/kunalpawar55"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B1B3A] transition"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="mailto:kunalpawar9230@gmail.com"
              className="hover:text-[#0B1B3A] transition"
              title="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#0B1B3A]">Kunal Pawar</span>. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
