import React, { useState } from "react";
import logo from "../images/logo.png";
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "KUNAL_PAWAR_RESUME";
    link.click();
  };

  return (
    <header
      className="sticky top-0 z-[999]
                 bg-[rgba(10,10,15,0.95)]
                 backdrop-blur-xl
                 border-b border-sky-400/20
                 shadow-[0_0_15px_rgba(0,191,255,0.15)]"
    >
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          className="w-14 h-14 rounded-full cursor-pointer
                     hover:scale-110
                     hover:shadow-[0_0_15px_#00bfff]
                     transition-all duration-300"
        />

        {/* HAMBURGER */}
        <div
          className="text-sky-400 text-3xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        {/* NAV LINKS */}
        <nav
          className={`md:flex md:items-center md:gap-10
                      absolute md:static left-0 top-full w-full md:w-auto
                      bg-[rgba(10,10,15,0.98)] md:bg-transparent
                      backdrop-blur-xl
                      transition-all duration-500
                      overflow-hidden
                      ${menuOpen ? "max-h-[400px] py-6" : "max-h-0 md:max-h-full"}`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/Project" },
              { name: "Skills", path: "/Language" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/About" },
              { name: "Certification", path: "/certification" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-gray-200 font-medium tracking-wide
                             hover:text-sky-400
                             after:absolute after:left-0 after:-bottom-1
                             after:h-[2px] after:w-0
                             after:bg-sky-400 after:shadow-[0_0_8px_#00bfff]
                             hover:after:w-full
                             after:transition-all after:duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-5">

          {/* Resume */}
          <button
            onClick={handleDownload}
            className="border border-sky-400 text-sky-400
                       px-4 py-2 rounded-lg text-sm
                       hover:bg-sky-400 hover:text-black
                       hover:shadow-[0_0_20px_#00bfff]
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            Download Resume
          </button>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-125 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-125 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://wa.me/917719000398"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-125 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://github.com/kunalpawar55"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-125 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
