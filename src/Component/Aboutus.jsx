import React from "react";
import kunal from "../images/KunalpawarPhoto.jpg";

export default function Aboutus() {
  const education = [
    {
      title: "M.Sc. – Information Technology",
      college: "Z.B. Patil College, Dhule",
      year: "2024 – Present",
      score: "CGPA: 8.39 / 10",
      icon: "🎓",
    },
    {
      title: "B.Sc. – Computer Science",
      college: "Z.B. Patil College, Dhule",
      year: "2020 – 2023",
      score: "CGPA:8.7/10 ",
      icon: "🏫",
    },
    {
      title: "HSC (12th)",
      college: "Jai Hind High School, Dhule",
      year: "2019 – 2020",
      score: "Percentage: 60.00%",
      icon: "📘",
    },
  ];

  const certifications = [
    {
      title: "Full Stack Java Development",
      org: "Cyber Success",
      year: "2024 – 2025",
      grade: "Completed",
      icon: "💻",
    },
    {
      title: "Frontend Internship",
      org: "Corefinxpert (React + MUI)",
      year: "2024",
      grade: "Completed",
      icon: "🏅",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3A]">
            About <span className="text-[#2563EB]">Me</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed">
            Java Developer skilled in building{" "}
            <span className="font-bold text-[#0B1B3A]">
              scalable, high-performance applications
            </span>{" "}
            using{" "}
            <span className="font-bold text-[#0B1B3A]">Java</span> and{" "}
            <span className="font-bold text-[#0B1B3A]">Spring Boot</span>.
            Experienced in designing{" "}
            <span className="font-bold text-[#0B1B3A]">RESTful APIs</span>,
            working with{" "}
            <span className="font-bold text-[#0B1B3A]">
              SQL / NoSQL databases
            </span>
            , and writing{" "}
            <span className="font-bold text-[#0B1B3A]">
              clean, maintainable code
            </span>
            . Passionate about{" "}
            <span className="font-bold text-[#0B1B3A]">
              problem-solving and continuous learning
            </span>
            .
          </p>
        </div>

        {/* PHOTO */}
        <div className="flex justify-center mt-12">
          <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-4">
            <img
              src={kunal}
              alt="Kunal Pawar"
              className="w-[280px] sm:w-[340px] md:w-[380px]
                         h-[360px] sm:h-[420px] md:h-[460px]
                         object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* EDUCATION */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold text-[#0B1B3A] flex items-center justify-center gap-3">
            🎓 <span>Education</span>
          </h2>
          <p className="text-gray-600 mt-2">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {education.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-md
                         p-6 text-left hover:shadow-lg transition"
            >
              <div className="text-3xl">{item.icon}</div>

              <h3 className="mt-4 font-extrabold text-[#0B1B3A] text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">{item.college}</p>

              <p className="text-gray-500 mt-2 text-sm">{item.year}</p>

              <p className="text-[#0B1B3A] font-bold mt-3">{item.score}</p>
            </div>
          ))}
        </div>

        {/* CERTIFICATION */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-extrabold text-[#0B1B3A] flex items-center justify-center gap-3">
            🏅 <span>Certification</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Courses & credentials I have completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {certifications.map((item, i) => (
            <div
              key={i}
              className="bg-white border borderborder-gray-200 border border-gray-200
                         rounded-2xl shadow-md p-6
                         hover:shadow-lg transition flex gap-4"
            >
              <div className="text-3xl">{item.icon}</div>

              <div>
                <h3 className="font-extrabold text-[#0B1B3A] text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.org}</p>
                <p className="text-gray-500 mt-1 text-sm">{item.year}</p>
                <p className="text-[#0B1B3A] font-bold mt-2">{item.grade}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-10" />
      </div>
    </div>
  );
}
