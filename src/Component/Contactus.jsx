import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contactus() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo). Connect email service later!");
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            Contact <span className="text-[#2563EB]">Me</span>
          </h1>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Have a question or want to work together?
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT FORM */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl
                             bg-gray-50 border border-gray-200
                             text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl
                               bg-gray-50 border border-gray-200
                               text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    PHONE
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-xl
                               bg-gray-50 border border-gray-200
                               text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl
                             bg-gray-50 border border-gray-200
                             text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl
                             bg-gray-50 border border-gray-200
                             text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl
                           bg-[#0B1B3A] text-white font-bold text-base
                           shadow-md hover:opacity-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* INFO CARD */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-7">
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#E8EEFF]
                               flex items-center justify-center text-[#2563EB]"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                  </div>

                  <div>
                    <p className="text-gray-500 font-semibold text-xs">ADDRESS</p>
                    <p className="text-[#0B1B3A] font-semibold text-base">
                      Dhule, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#E8EEFF]
                               flex items-center justify-center text-[#2563EB]"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-lg" />
                  </div>

                  <div>
                    <p className="text-gray-500 font-semibold text-xs">PHONE</p>
                    <p className="text-[#0B1B3A] font-semibold text-base">
                      +91 7719000398
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#E8EEFF]
                               flex items-center justify-center text-[#2563EB]"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                  </div>

                  <div>
                    <p className="text-gray-500 font-bold text-xs">EMAIL</p>
                    <p className="text-[#0B1B3A] font-extrabold text-base break-all">
                      kunalpawar9230@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/917719000398"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 rounded-2xl shadow-sm
                           p-5 flex flex-col items-center justify-center gap-2
                           hover:shadow-md hover:-translate-y-1 transition"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-3xl text-green-500"
                />
                <p className="font-semibold text-gray-700 text-sm">WhatsApp</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kunal-pawar-4b6942289"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 rounded-2xl shadow-sm
                           p-5 flex flex-col items-center justify-center gap-2
                           hover:shadow-md hover:-translate-y-1 transition"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-blue-600"
                />
                <p className="font-semibold text-gray-700 text-sm">LinkedIn</p>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kunal_pawar77"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 rounded-2xl shadow-sm
                           p-5 flex flex-col items-center justify-center gap-2
                           hover:shadow-md hover:-translate-y-1 transition"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-3xl text-pink-500"
                />
                <p className="font-semibold text-gray-700 text-sm">Instagram</p>
              </a>

              {/* Call Me */}
              <a
                href="tel:+917719000398"
                className="bg-white border border-gray-200 rounded-2xl shadow-sm
                           p-3 flex flex-col items-center justify-center gap-2
                           hover:shadow-md hover:-translate-y-1 transition"
              >
                <FontAwesomeIcon icon={faPhone} className="text-3xl text-gray-700" />
                <p className="font-semibold text-gray-700 text-sm">Call Me</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
