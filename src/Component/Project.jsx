import React, { useMemo, useState } from "react";
import { data } from "../Data/Projectdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Extract all unique tech stacks
  const techList = useMemo(() => {
    const allTech = new Set();
    data.forEach((p) => {
      (p.tech || []).forEach((t) => allTech.add(t));
    });
    return ["All", ...Array.from(allTech)];
  }, []);

  // 🔥 Filtered projects
  const filteredProjects = useMemo(() => {
    return data.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      const matchesTech =
        activeTech === "All" ? true : (p.tech || []).includes(activeTech);

      return matchesSearch && matchesTech;
    });
  }, [search, activeTech]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            My <span className="text-[#2563EB]">Projects</span>
          </h1>
          <p className="text-gray-600 mt-3">
            A collection of my full-stack and frontend projects.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow-sm px-4 py-3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techList.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeTech === tech
                    ? "bg-[#0B1B3A] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-[#0B1B3A] hover:text-white"
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl
                         shadow-md hover:shadow-xl
                         transition-all duration-300
                         overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.imag}
                  alt={item.title}
                  className="w-full h-[210px] object-cover
                             group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-extrabold text-[#0B1B3A]">
                  {item.title}
                </h2>

                {/* Small description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* See More */}
                <button
                  onClick={() => setSelectedProject(item)}
                  className="mt-3 text-sm font-bold text-[#2563EB]
                             hover:underline"
                >
                  See More
                </button>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(item.tech || []).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold
                                 bg-gray-100 text-gray-700
                                 hover:bg-[#0B1B3A] hover:text-white transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  {/* Live */}
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2
                                 px-4 py-3 rounded-2xl
                                 bg-[#0B1B3A] text-white font-bold
                                 hover:opacity-95 transition"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      Live
                    </a>
                  )}

                  {/* Github */}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2
                                 px-4 py-3 rounded-2xl
                                 bg-gray-100 text-gray-800 font-bold
                                 hover:bg-gray-200 transition"
                    >
                      <FontAwesomeIcon icon={faCode} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center mt-14 text-gray-600 font-semibold">
            No projects found 😅
          </div>
        )}

        <div className="h-10" />
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999]
                     bg-black/50 backdrop-blur-sm
                     flex items-center justify-center
                     px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl
                       border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="w-full h-[260px] overflow-hidden">
              <img
                src={selectedProject.imag}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-extrabold text-[#0B1B3A]">
                  {selectedProject.title}
                </h2>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-xl bg-gray-100
                             hover:bg-gray-200 transition
                             flex items-center justify-center
                             font-extrabold text-gray-700"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {(selectedProject.tech || []).map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold
                               bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-7">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                               px-4 py-3 rounded-2xl
                               bg-[#0B1B3A] text-white font-bold
                               hover:opacity-95 transition"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live Demo
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                               px-4 py-3 rounded-2xl
                               bg-gray-100 text-gray-800 font-bold
                               hover:bg-gray-200 transition"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
