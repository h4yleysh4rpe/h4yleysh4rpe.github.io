import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import { FaArrowRight } from "react-icons/fa";

export default function PortfolioPage() {
  return (
    <div>
      <div className="flex flex-row ml-6 gap-4">
        <div className="flex relative hover:pr-10 group items-center justify-center shadow-lg hover:bg-lightnavy text-bgblue transition-all duration-500 hover:scale-110 bg-navy rounded-3xl w-fit px-4 h-fit py-3 text-xl font-inter">
          Academic Transcript{" "}
          <FaArrowRight className="ml-2 group-hover:opacity-100 opacity-0 absolute right-3.5 text-bgblue group-hover:text-fadedgold transition-all duration-300 scale-0 group-hover:scale-100" />
        </div>
        <div className="flex relative hover:pr-10 group items-center justify-center shadow-lg hover:bg-lightnavy text-bgblue transition-all duration-500 hover:scale-110 bg-navy rounded-3xl w-fit px-4 h-fit py-3 text-xl font-inter">
          CV{" "}
          <FaArrowRight className="ml-2 group-hover:opacity-100 opacity-0 absolute right-3.5 text-bgblue group-hover:text-fadedgold transition-all duration-300 scale-0 group-hover:scale-100" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8"></div>
        <Projects />
      </div>
    </div>
  );
}
