import React, { useState } from "react";

export default function Timeline() {
  const timelineData = [
    {
      date: "2024",
      title: "Started Internship",
      description: "Worked on frontend with React and Tailwind.",
    },
    {
      date: "2024",
      title: "Launched Project",
      description: "Deployed a full-stack app using Vercel.",
    },
    {
      date: "2024",
      title: "Graduated",
      description: "Completed BSc in Computer Science.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="flex flex-row w-full pb-10 pt-10">
        <div className="w-1/4"></div>
        <div>
          <div className="h-full border-l-4 border-l-navy"></div>
        </div>
        <div className="mt-10 mb-10 flex flex-col justify-evenly gap-16">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              <div
                className={`w-5 h-5 -ml-3 rounded-full text-navy bg-navy transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-125" : ""
                }`}
              ></div>
              <div className="border-t-4 w-24 border-t-navy"></div>
              <div
                className="bg-headerblue hover:bg-buttonblue w-96 h-40 group rounded-lg p-8 hover:w-[800px] hover:h-52 hover:scale-105 transition-all duration-500 text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p
                  className={`mt-2 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
