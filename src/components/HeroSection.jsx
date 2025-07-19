import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function HeroSection() {
  return (
    <div className="flex animate-fade-in mt-40 flex-col items-center justify-center">
      <h1 className="text-9xl font-judson text-shadow-bottom-navy text-gold">
        Hi, I'm <i>Hayley</i>
      </h1>
      <div className="w-1/2">
        <p className="text-navy text-center mt-6 text-lg font-inter">
          I'm a passionate 3rd year Computer Science and Mathematics student at
          the University of Auckland. I'm interested in web and software
          development, machine learning, and human-computer interaction. I'm
          passionate, hard working and love to learn and solve problems! Check
          out my links below...
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <a href="https://github.com/h4yleysh4rpe" target="_blank">
          <FaGithub className="size-12 text-fadedgold transition-all duration-300 hover:scale-105 hover:text-gold" />
        </a>
        <a href="mailto:sharpeh42@gmail.com">
          <IoMail className="size-12 text-fadedgold transition-all duration-300 hover:scale-105 hover:text-gold" />
        </a>
        <a
          href="https://www.linkedin.com/in/hayley-sharpe-729b69294/"
          target="_blank"
        >
          <FaLinkedin className="size-12 text-fadedgold transition-all duration-300 hover:scale-105 hover:text-gold" />
        </a>
      </div>
    </div>
  );
}
