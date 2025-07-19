import React, { useState } from "react";

export default function Timeline() {
  const timelineData = [
    {
      date: "2024-2025",
      title: "Software Development Intern",
      company: "Serato",
      description:
        "Worked in the Web Team at Serato over a 12 week summer internship. ",
      skills: ["PHP", "Vue", "Git", "Docker"],
    },
    {
      date: "2024",
      title: "got money",
      company: "Serato",
      description: "did something else",
      skills: ["PHP", "Vue"],
    },
    {
      date: "2024",
      title: "slayed",
      company: "Serato",
      description: "dunno",
      skills: ["PHP", "Vue"],
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="flex flex-row w-full pb-10 pt-10">
        <div className="w-1/4"></div>
        <div className="flex flex-col items-center -mr-2">
          <div className="bg-navy rounded-full text-center w-5 h-5"></div>
          <div className="h-full border-l-4 border-l-navy"></div>
          <div className="bg-navy rounded-full text-center w-5 h-5"></div>
        </div>
        <div className="mt-20 mb-20 flex flex-col justify-evenly gap-16">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              <div
                className={`w-5 h-5 -ml-3 rounded-full bg-navy transition-all duration-300 ${
                  hoveredIndex === index ? "scale-125 bg-gold" : ""
                }`}
              ></div>
              <div className="-mt-6 -ml-1 flex flex-col items-end">
                <div
                  className={`text-navy w-fit mr-4 ml-0 transition-all duration-500 ${
                    hoveredIndex === index ? "mr-7 scale-110" : ""
                  }`}
                >
                  {item.date}
                </div>
                <div className="border-t-4 w-32 border-t-navy"></div>
              </div>
              <div
                className="bg-headerblue hover:bg-buttonblue w-96 h-40 group rounded-lg p-8 hover:w-[800px] hover:h-52 hover:scale-105 shadow-none hover:shadow-lg transition-all duration-500 text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <h3 className="text-l font-semibold text-gold">
                  {item.company}
                </h3>
                <p
                  className={`mt-2 transition-opacity duration-300 delay-200 text-navy ${
                    hoveredIndex === index
                      ? "opacity-100"
                      : "opacity-0 transition-none"
                  }`}
                >
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`bg-navy text-white transition-opacity duration-300 text-sm px-3 py-1 rounded-full ${
                        hoveredIndex === index
                          ? "opacity-100 delay-200"
                          : "opacity-0 transition-none"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
