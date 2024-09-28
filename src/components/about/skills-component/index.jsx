import { useRef, useState } from "react";
import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import NextIcon from "./next-icon";
import "./styles.css";

export default function SkillsComponent() {
  const [animationDuration, setAnimationDuration] = useState(20);
  const [isAnimating, setIsAnimating] = useState(true);
  const skillsContainerRef = useRef(null);

  // Responsive size settings
  const iconSize = "text-3xl md:text-4xl lg:text-5xl"; // Change sizes for different screen sizes

  return (
    <div
      onMouseEnter={() => {
        setIsAnimating(false);
      }}
      onMouseLeave={() => {
        setIsAnimating(true);
      }}
      ref={skillsContainerRef}
      id="skills-container"
      className={`overflow-hidden h-[100px] flex items-center w-full`}
      style={{
        "--t": `${animationDuration}s`,
        maskImage:
          "linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)",
      }}
    >
      <div
        style={{
          animation: `animate ${animationDuration}s linear infinite forwards`,
          animationDelay: `calc( ${animationDuration}s / -1)`,
          animationPlayState: `${isAnimating ? "running" : "paused"}`,
        }}
        className={`flex-none whitespace-nowrap transition delay-500 flex w-full justify-around items-center`}
      >
        <FaJs
          className={`${iconSize} text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="JavaScript"
        />
        <FaReact
          className={`${iconSize} text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="React"
        />
        <SiTailwindcss
          className={`${iconSize} text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Tailwind CSS"
        />
        <FaCss3Alt
          className={`${iconSize} text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="CSS"
        />
        <FaHtml5
          className={`${iconSize} text-orange-500 hover:text-orange-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="HTML"
        />
        <SiRedux
          className={`${iconSize} text-purple-500 hover:text-purple-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Redux"
        />
        <FaBootstrap
          className={`${iconSize} text-purple-600 hover:text-purple-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Bootstrap"
        />
        <FaGitAlt
          className={`${iconSize} text-gray-600 hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Git"
        />
        <NextIcon />
      </div>
      <div
        style={{
          animation: `animate2 ${animationDuration}s linear infinite forwards`,
          animationDelay: `calc( ${animationDuration}s / -2)`,
          animationPlayState: `${isAnimating ? "running" : "paused"}`,
        }}
        className={`flex-none whitespace-nowrap transition delay-500 flex w-full justify-around items-center`}
      >
        <FaJs
          className={`${iconSize} text-yellow-500 hover:text-yellow-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="JavaScript"
        />
        <FaReact
          className={`${iconSize} text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="React"
        />
        <SiTailwindcss
          className={`${iconSize} text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Tailwind CSS"
        />
        <FaCss3Alt
          className={`${iconSize} text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="CSS"
        />
        <FaHtml5
          className={`${iconSize} text-orange-500 hover:text-orange-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="HTML"
        />
        <SiRedux
          className={`${iconSize} text-purple-500 hover:text-purple-600 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Redux"
        />
        <FaBootstrap
          className={`${iconSize} text-purple-600 hover:text-purple-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Bootstrap"
        />
        <FaGitAlt
          className={`${iconSize} text-gray-600 hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer`}
          title="Git"
        />
        <NextIcon />
      </div>
    </div>
  );
}
