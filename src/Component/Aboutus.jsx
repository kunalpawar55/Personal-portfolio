import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import kunal from "../images/KunalpawarPhoto.jpg";
import resumePDF from "../images/Resume_Kunal_J_Pawar.pdf";

export default function Aboutus() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Kunal_Pawar_Resume.pdf";
    link.click();
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="md:w-3/5">

            <h1
              className="text-4xl font-bold mb-6 tracking-widest uppercase
                         text-sky-400
                         drop-shadow-[0_0_15px_#00aaff]"
            >
              About Me
            </h1>

            <p className="text-gray-300 leading-relaxed mb-5">
              Welcome to my portfolio! I’m{" "}
              <span className="text-sky-400 font-semibold">
                Kunal Pawar
              </span>
              , a dedicated Full Stack Developer who enjoys crafting both the
              frontend and backend of web applications. My passion lies in
              creating <b>user-friendly</b>, <b>responsive</b>, and{" "}
              <b>efficient</b> digital experiences.
            </p>

            <h3 className="text-sky-400 text-xl mt-8 mb-3 font-semibold">
              My Journey 🚀
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              My journey in web development began with HTML & CSS. I graduated
              from <b>Z.B. Patil College</b> and represented my university in{" "}
              <b>Kabaddi</b> (State Level twice & University once).  
              When not coding, I enjoy trekking and exploring nature!
            </p>

            {/* WHAT I DO */}
            <div className="mt-8">
              <h2 className="text-sky-400 text-xl mb-4 font-semibold">
                What I Do 💻
              </h2>

              <ul className="space-y-3 text-gray-300">
                <li>
                  🔹 <b>Frontend Development:</b> React.js, modern UI systems
                </li>
                <li>
                  🔹 <b>Backend Development:</b> Java & Spring Boot scalable APIs
                </li>
                <li>
                  🔹 <b>UI / UX Design:</b> Clean and intuitive interfaces
                </li>
                <li>
                  🔹 <b>Continuous Learning:</b> Exploring latest technologies
                </li>
              </ul>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <button
                onClick={handleDownload}
                className="px-8 py-3 rounded-lg
                           bg-gradient-to-r from-sky-400 to-blue-600
                           hover:scale-110
                           hover:shadow-[0_0_25px_#00aaff]
                           transition-all duration-400
                           uppercase tracking-wider"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-2/5 flex justify-center">
            <div className="p-3 rounded-full
                            bg-[radial-gradient(circle,rgba(0,170,255,0.35),transparent)]">
              <img
                src={kunal}
                alt="Kunal"
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]
                           object-cover rounded-full
                           border-4 border-sky-400
                           hover:scale-110
                           transition duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
