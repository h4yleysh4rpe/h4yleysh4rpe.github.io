import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const projectData = [
    {
      date: "2024-2025",
      title: "Software Development Intern",
      description: "Built this website.",
      link: ["PHP", "Vue", "Git", "Docker"],
    },
    {
      date: "2024-2025",
      title: "Software Development Intern",
      description:
        "Worked in the Web Team at Serato over a 12 week summer internship. ",
      link: ["PHP", "Vue", "Git", "Docker"],
    },
    {
      date: "2024-2025",
      title: "Software Development Intern",
      description:
        "Worked in the Web Team at Serato over a 12 week summer internship. ",
      link: ["PHP", "Vue", "Git", "Docker"],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center font-inter">
        <div className="flex flex-col bg-headerblue w-[97%] pt-6 pb-8 rounded-xl gap-4">
          <div className="text-navy ml-10 mb-3 mt-3 text-3xl">Projects</div>
          {projectData.map((project, index) => (
            <div className="bg-buttonblue shadow-lg shadow-(color:navy) mx-10 rounded-lg px-8 py-6">
              <div className="text-navy text-3xl mb-3">{project.title}</div>
              <div className="text-navy text-lg mb-3">
                {project.description}
              </div>
              <div className="flex relative hover:pr-10 group items-center justify-center shadow-lg hover:bg-lightnavy text-bgblue transition-all duration-500 hover:scale-110 bg-navy rounded-3xl w-fit px-4 h-fit py-3 text-xl font-inter">
                Check it out{" "}
                <FaArrowRight className="ml-2 group-hover:opacity-100 opacity-0 absolute right-3.5 text-bgblue group-hover:text-fadedgold transition-all duration-300 scale-0 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
