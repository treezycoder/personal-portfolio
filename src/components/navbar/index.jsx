import { useEffect } from "react";
import { useGlobalState } from "../../context";
import ScrollIndicator from "./scroll-indicator";
import "./styles.css";
export default function NavBar() {
  const {
    openNavList,
    setOpenNavList,
    darkMode,
    setDarkMode,
    homeRef,
    aboutRef,
    servicesRef,
    portfolioRef,
    contactRef,
    scrolledPercentage,
    currentSection,
    setCurrentSection,
  } = useGlobalState();

  useEffect(() => {
    if (scrolledPercentage >= 9 && scrolledPercentage < 22) {
      setCurrentSection("about");
    } else if (scrolledPercentage >= 22 && scrolledPercentage < 50) {
      setCurrentSection("services");
    } else if (scrolledPercentage >= 50 && scrolledPercentage < 80) {
      setCurrentSection("portfolio");
    } else if (scrolledPercentage >= 80) {
      setCurrentSection("contact");
    } else {
      setCurrentSection("home");
    }
  }, [scrolledPercentage]);

  return (
    <nav
      id="navbar"
      className={`w-full z-[1000] h-[80px]  ${
        scrolledPercentage > 3
          ? "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm"
          : "bg-transparent"
      }  flex items-center justify-center fixed top-0 left-0 transition-all`}
    >
      {/* NavList  */}
      <ul
        className={`h-full text-lg text-gray-900 dark:text-gray-400 hidden md:flex items-center justify-center gap-8 px-4`}
      >
        <li
          onClick={() => {
            homeRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`cursor-pointer ${
            currentSection === "home" ? "text-indigo-500" : ""
          } hover:text-indigo-500/70 transition-all`}
        >
          Home
        </li>
        <li
          onClick={() => {
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`cursor-pointer ${
            currentSection === "about" ? "text-indigo-500" : ""
          } hover:text-indigo-500/70 transition-all`}
        >
          About
        </li>
        <li
          onClick={() => {
            servicesRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`cursor-pointer ${
            currentSection === "services" ? "text-indigo-500" : ""
          } hover:text-indigo-500/70 transition-all`}
        >
          Services
        </li>
        <li
          onClick={() => {
            portfolioRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`cursor-pointer ${
            currentSection === "portfolio" ? "text-indigo-500" : ""
          } hover:text-indigo-500/70 transition-all`}
        >
          Portfolio
        </li>
        <li
          onClick={() => {
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`cursor-pointer ${
            currentSection === "contact" ? "text-indigo-500" : ""
          } hover:text-indigo-500/70 transition-all`}
        >
          Contact
        </li>
      </ul>
      {/* NavList */}
      <span
        onClick={() => setDarkMode(!darkMode)}
        id="nav-theme-icon"
        className={`z-10 cursor-pointer rounded-full absolute left-[5vw] w-10 h-10 flex justify-center items-center border transition-all duration-300 ease-in-out transform ${
          darkMode ? "bg-indigo-900 " : "bg-blue-100 text-blue-900"
        } hover:scale-110`}
      >
        {darkMode ? (
          <svg
            id="nav-theme-icon-light"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className={`size-7 fill-slate-50 stroke-white transform transition-transform duration-300 ease-in-out rotate-45`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7  transform transition-transform duration-300 ease-in-out rotate-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </span>

      <span
        onClick={() => setOpenNavList(!openNavList)}
        id="nav-bar-icon"
        className={`z-10 md:hidden cursor-pointer rounded-full absolute right-[5vw] w-10 h-10  flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke=""
          className={`size-7 stroke-indigo-900  ${
            openNavList ? "" : ""
          } transition-all`}
        >
          {/* First Path */}
          <path
            style={{
              transition: `transform 0.5s ease-in-out`,
              transformOrigin: `center`,
              transform: `${
                openNavList ? "rotate(45deg) translate(0px, 5px)" : ""
              }`,
            }}
            className={``}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5"
          />

          {/* Second Path */}
          <path
            style={{
              transition: `opacity 0.5s ease-in-out`,

              opacity: `${openNavList ? "0" : "1"}`,
            }}
            className={``}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5"
          />

          {/* Third Path */}
          <path
            style={{
              transition: `transform 0.5s ease-in-out`,
              transformOrigin: `center`,
              transform: `${
                openNavList ? "rotate(-45deg) translate(0px, -5px)" : ""
              }`,
            }}
            className={``}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 17.25h16.5"
          />
        </svg>
      </span>
      <span
        id="nav-home-icon"
        onClick={() => {
          homeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className={`z-10 ${
          scrolledPercentage === 0 ? "cursor-not-allowed" : "cursor-pointer"
        } rounded-full absolute right-[5vw] w-10 h-10 hidden md:flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke=""
          className="size-7 stroke-indigo-900 hover:stroke-indigo-700 hidden md:inline transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </span>
      <ScrollIndicator />
    </nav>
  );
}
