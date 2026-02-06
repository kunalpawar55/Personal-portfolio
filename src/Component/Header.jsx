import React, { useState } from "react";
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBookOpen,
  faFolderOpen,
  faBriefcase,
  faPhone,
  faMoon,
  faDownload,
  faBars,
  faXmark,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "KUNAL_PAWAR_RESUME.pdf";
    link.click();
  };
  const navItems = [
    { to: "/", icon: faHouse, label: "Home" },
    { to: "/about", icon: faUser, label: "About" },
    { to: "/project", icon: faFolderOpen, label: "Projects" },
    { to: "/certification", icon: faBriefcase, label: "Certification" },
    { to: "/contact", icon: faPhone, label: "Contact" },
        { to: "/language", icon: faCode, label: "Skills" },

  ];

  const DesktopNavItem = ({ to, icon, label }) => {
    return (
      <NavLink
        to={to}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `group flex items-center gap-2
           px-4 py-3 rounded-2xl
           transition-all duration-300
           ${
             isActive
               ? "bg-[#0b1b3c] text-white shadow-md"
               : "text-gray-500 hover:bg-[#0b1b3c] hover:text-white"
           }`
        }
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />

        <span
          className="max-w-0 overflow-hidden whitespace-nowrap
                     group-hover:max-w-[140px]
                     transition-all duration-300
                     text-sm font-semibold"
        >
          {label}
        </span>
      </NavLink>
    );
  };

  // 🔥 Mobile nav item
  const MobileNavItem = ({ to, icon, label }) => {
    return (
      <NavLink
        to={to}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl
           font-semibold transition
           ${
             isActive
               ? "bg-[#0b1b3c] text-white"
               : "text-gray-700 hover:bg-gray-100"
           }`
        }
      >
        <FontAwesomeIcon icon={icon} className="text-lg" />
        <span>{label}</span>
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-[999] bg-white/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div
          className="w-full flex items-center justify-between
                     bg-white/90 border border-gray-200
                     shadow-lg rounded-2xl
                     px-4 py-3"
        >
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>

          {/* MOBILE LEFT (Title) */}
          <div className="lg:hidden flex items-center gap-3">
            <span className="text-lg font-extrabold text-[#0B1B3A]">
              Kunal<span className="text-[#2563EB]">Pawar</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            

            {/* CV */}
            <button
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-2
                         px-6 py-3 rounded-2xl
                         bg-[#0b1b3c] text-white font-semibold
                         shadow-md hover:opacity-95 transition"
            >
              <FontAwesomeIcon icon={faDownload} />
              CV
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center
                         rounded-xl bg-gray-100 text-gray-700
                         hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
<div
  className={`lg:hidden mt-3
              bg-white/95 border border-gray-200
              shadow-lg rounded-2xl
              overflow-hidden
              transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "max-h-[500px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
>
  <div className="p-3">
    <div className="flex flex-col gap-2">
      {navItems.map((item) => (
        <MobileNavItem
          key={item.to}
          to={item.to}
          icon={item.icon}
          label={item.label}
        />
      ))}

      {/* CV button inside menu (mobile) */}
      <button
        onClick={() => {
          handleDownload();
          setMenuOpen(false);
        }}
        className="mt-2 flex items-center justify-center gap-2
                   px-4 py-3 rounded-xl
                   bg-[#0b1b3c] text-white font-semibold
                   hover:opacity-95 transition"
      >
        <FontAwesomeIcon icon={faDownload} />
        Download CV
      </button>
    </div>
  </div>
</div>
      </div>
    </header>
  );
}