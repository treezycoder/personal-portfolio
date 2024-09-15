import { useGlobalState } from "../../context";
import SocialIcons from "../home/social-icons";
export default function Footer() {
  const {
    darkMode,
    homeRef,
    aboutRef,
    contactRef,
    portfolioRef,
    servicesRef,
    footerRef,
  } = useGlobalState();

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="bg-gray-900 dark:bg-gray-800 text-gray-400 py-8 lg:py-16"
    >
      <div className="container mx-auto flex flex-col items-center justify-between text-center gap-8 lg:gap-12">
        {/* Navigation Links */}
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-semibold">
          <li
            onClick={() =>
              homeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            Home
          </li>
          <li
            onClick={() =>
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            About
          </li>
          <li
            onClick={() =>
              servicesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            Services
          </li>
          <li
            onClick={() =>
              portfolioRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            Portfolio
          </li>

          <li
            onClick={() =>
              contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            Contact
          </li>
        </ul>

        {/* Social Media Links */}
        <SocialIcons theme={`${darkMode ? "light" : "dark"}`} isHome={false} />

        {/* Copyright */}
        <p className="text-sm">© 2024 Tresor Ngahame. All rights reserved.</p>
      </div>
    </footer>
  );
}
