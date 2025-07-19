import React, { useState } from "react";

export default function Timeline() {
  const timelineData = [
    {
      date: "2024-2025",
      title: "Software Development Intern",
      company: "Serato",
      description: "php",
    },
    {
      date: "2024",
      title: "got money",
      company: "Serato",
      description: "did something else",
    },
    {
      date: "2024",
      title: "slayed",
      company: "Serato",
      description: "dunno",
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
                className={`w-5 h-5 -ml-3 rounded-full text-navy bg-navy transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-125" : ""
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
                className="bg-headerblue hover:bg-buttonblue w-96 h-40 group rounded-lg p-8 hover:w-[800px] hover:h-52 hover:scale-105 transition-all duration-500 text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <h3 className="text-l font-semibold">{item.company}</h3>
                <p
                  className={`mt-2 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
