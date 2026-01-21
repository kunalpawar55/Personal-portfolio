import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contactus() {
  return (
    <div className="bg-[#0d0d0f] text-white min-h-screen">
      <Header />

      {/* MAIN */}
      <div className="flex justify-center items-center px-6 py-24">
        <div
          className="max-w-2xl w-full text-center
                     bg-[#111] rounded-2xl p-10
                     border border-sky-400/30
                     shadow-[0_0_30px_rgba(0,191,255,0.2)]
                     hover:shadow-[0_0_45px_rgba(0,191,255,0.4)]
                     transition-all duration-500"
        >
          {/* TITLE */}
          <h1
            className="text-4xl font-bold text-sky-400 mb-6
                       drop-shadow-[0_0_15px_#00bfff]"
          >
            Contact With Me
          </h1>

          <h3 className="text-lg text-gray-300 mb-2">
            Hello, thank you for visiting my website!
          </h3>

          <h4 className="text-gray-400 mb-10">
            If you want to contact me, here are my social links and email:
          </h4>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-lg">

            <a
              href="mailto:kunalpawar9230@gmail.com"
              className="flex items-center justify-center gap-4
                         bg-black/60 rounded-xl py-4 px-6
                         border border-gray-700
                         hover:border-sky-400
                         hover:text-sky-400
                         hover:shadow-[0_0_20px_#00bfff]
                         transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <span>Mail</span>
            </a>

            <a
              href="https://wa.me/7719000398?text=Hello%20Kunal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-4
                         bg-black/60 rounded-xl py-4 px-6
                         border border-gray-700
                         hover:border-green-400
                         hover:text-green-400
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
                         transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-4
                         bg-black/60 rounded-xl py-4 px-6
                         border border-gray-700
                         hover:border-sky-500
                         hover:text-sky-500
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                         transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/kunal_pawar77"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-4
                         bg-black/60 rounded-xl py-4 px-6
                         border border-gray-700
                         hover:border-pink-500
                         hover:text-pink-500
                         hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]
                         transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              <span>Instagram</span>
            </a>
          </div>

          <h3 className="mt-12 text-xl font-semibold text-sky-400">
            Thank You for Reaching Out! 🙏
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}
