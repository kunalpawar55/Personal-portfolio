import React from "react";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import imag1 from "../images/kunalp.jpg";
import airplaneImage from "../images/Airoplane.jpg";
import clock from "../images/images.jpeg";
import LanCom from "./Lancom.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0d0d0f] text-gray-200 min-h-screen overflow-x-hidden">
      <Header />

      <section className="flex flex-wrap items-center justify-center gap-16 px-6 py-24">

        <div className="max-w-xl">
          <h5 className="text-4xl font-bold text-sky-400 mb-5 drop-shadow-[0_0_12px_#00bfff]">
            Introduction
          </h5>

          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            I’m <b className="text-white">Kunal Pawar</b>, a passionate developer
            with a strong foundation in
            <b className="text-sky-400"> Information Technology</b>.  
            I graduated in 2023 and currently pursuing my
            <b className="text-sky-400"> MSc in Information Technology</b>.
            <br /><br />
            I’ve completed a
            <b className="text-sky-400"> Full Stack Development</b> course at
            Cyber Success and recently completed an internship at
            <b className="text-sky-400"> CorefinXperts</b>, Pune.
          </p>

          <Link to="/contact">
            <button
              className="px-8 py-3 border border-sky-400 rounded-lg
                         text-sky-400 font-medium
                         hover:bg-sky-400 hover:text-black
                         hover:shadow-[0_0_20px_#00bfff]
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              Contact Me
            </button>
          </Link>
        </div>

        <div>
          <img
            src={imag1}
            alt="Kunal"
            className="w-[340px] h-[400px] object-cover
                       rounded-[60%_40%_60%_40%]
                       shadow-[0_0_30px_#00bfff]
                       animate-[float_4s_ease-in-out_infinite]
                       hover:scale-105
                       hover:rounded-[40%_60%_40%_60%]
                       transition-all duration-700"
          />
        </div>
      </section>

      <section className="text-center px-6 pb-28">

        <h1 className="text-4xl font-bold text-sky-400 mb-14 drop-shadow-[0_0_12px_#00bfff]">
          My Projects
        </h1>

        <div
          className="flex flex-wrap justify-center gap-10 cursor-pointer"
          onClick={() => navigate("/Project")}
        >
          <div
            className="bg-[#191919]/90 w-[320px] p-6 rounded-xl
                       shadow-[0_0_12px_rgba(0,191,255,0.3)]
                       hover:-translate-y-2
                       hover:shadow-[0_0_30px_#00bfff]
                       transition-all duration-500"
          >
            <img
              src={airplaneImage}
              alt="Flight"
              className="w-full h-[180px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-white">
              Flight Booking Application
            </h2>
          </div>

          <div
            className="bg-[#191919]/90 w-[320px] p-6 rounded-xl
                       shadow-[0_0_12px_rgba(0,191,255,0.3)]
                       hover:-translate-y-2
                       hover:shadow-[0_0_30px_#00bfff]
                       transition-all duration-500"
          >
            <img
              src={clock}
              alt="Clock"
              className="w-full h-[180px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-white">
              World Alarm Clock
            </h2>
          </div>
        </div>

        <button
          onClick={() => navigate("/Project")}
          className="mt-16 px-10 py-3 rounded-full
                     border border-sky-400 text-sky-400
                     hover:bg-sky-400 hover:text-black
                     hover:shadow-[0_0_25px_#00bfff]
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          View More Projects
        </button>
      </section>

      <LanCom />
      <Footer />
    </div>
  );
}
