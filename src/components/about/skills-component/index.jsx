import { useRef, useState } from "react";
import "./styles.css";
import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si"; // Updated import for Redux

export default function SkillsComponent() {
  const [animationDuration, setAnimationDuration] = useState(20);
  const [isAnimating, setIsAnimating] = useState(true);
  const skillsContainerRef = useRef(null);
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
      className={` overflow-hidden h-[100px] flex items-center w-full`}
      style={{
        "--t": `${animationDuration}s`,
        maskImage:
          "linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)",
      }}
    >
      <div
        id=""
        style={{
          animation: `animate ${animationDuration}s linear infinite forwards`,
          animationDelay: `calc( ${animationDuration}s / -1)`,
          animationPlayState: `${isAnimating ? " running" : "paused"}`,
        }}
        className={`flex-none whitespace-nowrap transition delay-500 flex w-full justify-around`}
      >
        <FaJs
          className="text-yellow-500 text-5xl hover:text-yellow-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="JavaScript"
        />
        <FaReact
          className="text-blue-500 text-5xl hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="React"
        />
        <SiTailwindcss
          className="text-blue-400 text-5xl hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer"
          title="Tailwind CSS"
        />
        <FaCss3Alt
          className="text-blue-600 text-5xl hover:text-blue-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="CSS"
        />
        <FaHtml5
          className="text-orange-500 text-5xl hover:text-orange-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="HTML"
        />
        <SiRedux
          className="text-purple-500 text-5xl hover:text-purple-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="Redux"
        />
        <FaBootstrap
          className="text-purple-600 text-5xl hover:text-purple-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="Bootstrap"
        />
        <FaGitAlt
          className="text-gray-600 text-5xl hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="Git"
        />
      </div>
      <div
        id=""
        style={{
          animation: `animate2 ${animationDuration}s linear infinite forwards`,
          animationDelay: `calc( ${animationDuration}s / -2)`,
          animationPlayState: `${isAnimating ? "running " : " paused"}`,
        }}
        className={` flex-none whitespace-nowrap transition delay-500 flex w-full justify-around`}
      >
        <FaJs
          className="text-yellow-500 text-5xl  hover:text-yellow-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="JavaScript"
        />
        <FaReact
          className="text-blue-500 text-5xl hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="React"
        />
        <SiTailwindcss
          className="text-blue-400 text-5xl hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer"
          title="Tailwind CSS"
        />
        <FaCss3Alt
          className="text-blue-600 text-5xl hover:text-blue-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="CSS"
        />
        <FaHtml5
          className="text-orange-500 text-5xl hover:text-orange-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="HTML"
        />
        <SiRedux
          className="text-purple-500 text-5xl hover:text-purple-600 transition-transform transform hover:scale-110 cursor-pointer"
          title="Redux"
        />
        <FaBootstrap
          className="text-purple-600 text-5xl hover:text-purple-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="Bootstrap"
        />
        <FaGitAlt
          className="text-gray-600 text-5xl hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer"
          title="Git"
        />{" "}
      </div>
    </div>
  );
}
