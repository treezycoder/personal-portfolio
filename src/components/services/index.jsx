import { useGlobalState } from "../../context";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaCubes, FaBug } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { FiServer } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";

export default function Services() {
  const { servicesRef, scrolledPercentage } = useGlobalState();

  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    if (scrolledPercentage > 25 && scrolledPercentage < 70) {
      setAnimateCards(true);
    }
  }, [scrolledPercentage]);

  const serviceCards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "I will build fast, interactive, and responsive websites using React, ensuring smooth user experiences and modern design.",
      color: "text-blue-500 dark:text-blue-300",
    },
    {
      icon: <MdDesignServices />,
      title: "UI/UX Implementation",
      description:
        "I will transform any design into a fully responsive, visually appealing website, ensuring usability and accessibility across all devices.",
      color: "text-green-500 dark:text-green-300",
    },
    {
      icon: <GiSpeedometer />,
      title: "Performance Optimization",
      description:
        "I will analyze and enhance your website’s performance, improving load times and user engagement by implementing optimization techniques.",
      color: "text-yellow-500 dark:text-yellow-300",
    },
    {
      icon: <FaCubes />,
      title: "Component-Based Architecture",
      description:
        "I specialize in building reusable and maintainable React components, enabling scalable solutions for complex web applications.",
      color: "text-red-500 dark:text-red-300",
    },
    {
      icon: <FiServer />,
      title: "API Integration",
      description:
        "I can integrate third-party APIs seamlessly into your web application, allowing dynamic data exchange and enhancing functionality.",
      color: "text-purple-500 dark:text-purple-300",
    },
    {
      icon: <DiGitBranch />,
      title: "Version Control & Git",
      description:
        "I will maintain clean, organized project structures using Git for collaboration and efficient version control, ensuring smooth deployment workflows.",
      color: "text-teal-500 dark:text-teal-300",
    },
    {
      icon: <FaBug />,
      title: "Bug Fixing & Refactoring",
      description:
        "I will identify and resolve bugs in your existing React projects, refactor the codebase, and enhance the stability and performance of your web application.",
      color: "text-orange-500 dark:text-orange-300",
    },
  ];

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`py-16 px-6 lg:px-12 bg-white/0 dark:bg-gray-900/0 relative`}
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-[10%] right-[25%] bg-emerald-600 bg-blend-multiply opacity-20 rounded-full blur-3xl w-20 h-20"></div>
      </div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 relative inline-block">
          My Services
          <span className="block w-16 h-1 bg-indigo-500 rounded-md absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          How I Help You Succeed
        </p>
      </div>

      <div
        id="services-container"
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
      >
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg transition-opacity duration-500 ${
              animateCards
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 200}ms`, // Delay increases with each card
            }}
          >
            <p className={`text-5xl mb-4 ${card.color}`}>{card.icon}</p>
            <h3
              className={`text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2`}
            >
              {card.title}
            </h3>
            <p className={`text-gray-600 dark:text-gray-400`}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
