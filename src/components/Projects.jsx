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
      <div className="flex flex-col items-center">
        <div className="flex flex-col bg-headerblue w-[97%] py-6 rounded-xl gap-4">
          <div className="text-navy ml-10 mb-3 mt-3 text-3xl">Projects</div>
          {projectData.map((project, index) => (
            <div className="bg-headerblue shadow-lg shadow-(color:navy) mx-10 rounded-lg px-8 py-6">
              <div className="text-navy text-3xl mb-3">{project.title}</div>
              <div className="text-navy text-lg mb-3">
                {project.description}
              </div>
              <div className="bg-buttonblue w-32 cursor-pointer shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4">
                Check it out
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
