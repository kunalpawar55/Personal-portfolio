import React, { useMemo, useState } from "react";
import { landata } from "../Data/Languagedata";

export default function Language() {
  const [search, setSearch] = useState("");

  const filteredSkills = useMemo(() => {
    return landata.filter((item) => {
      const text =
        (item.lanname || "") +
        " " +
        (item.skills || "") +
        " " +
        (item.project || "");

      return text.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            My <span className="text-[#2563EB]">Skills</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Technologies I use to build full-stack applications.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-2xl mx-auto mb-10">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills..."
            className="w-full px-5 py-3 rounded-2xl
                       border border-gray-200 shadow-sm
                       outline-none text-gray-700
                       focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredSkills.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl
                         shadow-md hover:shadow-xl
                         transition-all duration-300
                         p-7"
            >
              {/* Top */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl
                             bg-gray-100 border border-gray-200
                             flex items-center justify-center"
                >
                  <img
                    src={item.img}
                    alt={item.lanname}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1B3A]">
                    {item.lanname}
                  </h2>
                  <p className="text-gray-500 text-sm font-semibold">
                    Rating: {item.rating}/10
                  </p>
                </div>
              </div>

              {/* Skills */}
              <p className="text-gray-600 text-sm mt-5 leading-relaxed">
                <span className="font-bold text-[#0B1B3A]">Skills:</span>{" "}
                {item.skills}
              </p>

              {/* Project */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                <span className="font-bold text-[#0B1B3A]">Project:</span>{" "}
                {item.project}
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#2563EB] transition-all duration-700"
                    style={{ width: `${item.rating * 10}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs text-gray-400 mt-2 font-semibold">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center mt-14 text-gray-600 font-semibold">
            No skills found 😅
          </div>
        )}

        <div className="h-10" />
      </div>
    </div>
  );
}
