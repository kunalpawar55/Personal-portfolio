import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import photo from "../images/kunalp.jpg";
import Lancom from "./Lancom";


const roles = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Backend Developer",
  ];
export default function HeroSection() {
  const navigate = useNavigate();
 // ✅ Rotating typewriter roles
  
  const chips = [
    "Frontend",
    "React",
    "Backend",
    "Java",
    "Spring Boot",
    "MySQL",
    "REST APIs",
    "Git",
  ];

 

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ Smooth typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 35 : 80; // smoother
    const pauseAfterTyped = 1200; // pause after full text

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, typedText.length + 1);
        setTypedText(nextText);

        // Full typed -> pause then delete
        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyped);
        }
      } else {
        const nextText = currentRole.slice(0, typedText.length - 1);
        setTypedText(nextText);

        // Fully deleted -> next role
        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <div>
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div className="group">
              <p className="text-gray-500 font-medium mb-3">Hi, I’m</p>

              <h1 className="text-5xl font-extrabold text-[#0B1B3A] leading-tight">
                Kunal <span className="text-[#2563EB]">Pawar</span>
              </h1>

              {/* 🔥 ROTATING TYPEWRITER (SMOOTH) */}
              <h2 className="text-2xl font-semibold text-[#0B1B3A] mt-4 leading-snug min-h-[34px]">
                <span className="text-gray-500 font-semibold">I am a </span>

                <span className="relative inline-flex items-center font-extrabold text-[#2563EB]">
                  {typedText}

                  {/* blinking cursor */}
                  <span className="ml-1 w-[2px] h-6 bg-[#2563EB] animate-blink" />
                </span>
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed">
                I’m a Java Full Stack Developer with a strong foundation in
                Information Technology. I build scalable backend services using
                Spring Boot and modern responsive UIs using React + Tailwind.
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-3 mt-7">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full
                               bg-gray-100 text-gray-700
                               text-sm font-semibold
                               hover:bg-[#0B1B3A] hover:text-white
                               transition"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Location + phone */}
              <div className="flex flex-col sm:flex-row gap-4 mt-7 text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Dhule, Maharashtra</span>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+91 7719000398</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-5 mt-8 text-2xl text-gray-500">
                <a
                  href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0B1B3A] transition"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://wa.me/917719000398"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0B1B3A] transition"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0B1B3A] transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://github.com/kunalpawar55"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0B1B3A] transition"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/contact")}
                className="mt-10 px-8 py-3 rounded-2xl
                           bg-[#0B1B3A] text-white font-semibold
                           shadow-md hover:opacity-95 transition"
              >
                Contact Me
              </button>
            </div>

            {/* RIGHT (Photo Card) */}
            <div className="flex justify-center md:justify-end">
              <div
                className="w-[320px] sm:w-[360px] h-[420px]
                           rounded-[32px]
                           bg-white border border-gray-200
                           shadow-xl
                           overflow-hidden"
              >
                <img
                  src={photo}
                  alt="Kunal Pawar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <Lancom />
      </section>
    </div>
  );
}
