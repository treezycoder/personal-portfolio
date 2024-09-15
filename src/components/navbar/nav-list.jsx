import { useGlobalState } from "../../context";

export default function NavList() {
  const {
    openNavList,
    homeRef,
    aboutRef,
    contactRef,
    portfolioRef,
    servicesRef,
    currentSection,
  } = useGlobalState();
  return (
    <div
      id="nav-list"
      style={{ transition: "height 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)" }}
      className={`z-[999] fixed  top-0 left-0 w-full overflow-hidden ${
        openNavList ? "h-[360px] md:h-0" : "h-0"
      } bg-gray-100/95 dark:bg-gray-900/95 dark:text-gray-400 flex  justify-center md:hidden`}
    >
      <ul
        className={` mt-[80px] ${
          openNavList ? "scale-100" : "scale-0"
        } p-8 flex flex-col items-center justify-center gap-4 text-lg transition duration-200`}
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
          } hover:text-indigo-500/70`}
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
          } hover:text-indigo-500/70`}
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
          } hover:text-indigo-500/70`}
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
          } hover:text-indigo-500/70`}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
