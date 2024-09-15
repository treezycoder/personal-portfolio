import { useGlobalState } from "../../context";
import SkillsComponent from "./skills-component";

export default function About() {
  const { aboutRef } = useGlobalState();

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`w-full py-16 px-6 lg:px-12 bg-gray-100 dark:bg-gray-900`}
    >
      <h2
        id="about-heading"
        className={`text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4`}
      >
        About Me
      </h2>
      <p className={`text-lg text-gray-600 dark:text-gray-400 mb-6`}>
        Get to know me
      </p>
      <p className={`text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto`}>
        I am passionate about delivering intuitive user experiences and am
        experienced in utilizing modern tools and best practices to create
        sleek, efficient web projects. Always eager to learn and grow, I'm ready
        to contribute my skills to impactful projects.
      </p>
      <div
        id="skills-component-container"
        className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg  hover:shadow-indigo-500/10 transition-shadow delay-200`}
      >
        <h3
          className={`text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4`}
        >
          My Skills
        </h3>
        <SkillsComponent />
      </div>
    </section>
  );
}
