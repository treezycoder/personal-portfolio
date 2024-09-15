import { createContext, useContext, useRef, useState } from "react";

const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [openNavList, setOpenNavList] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkModeNgahamePortfolio");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [currentSection, setCurrentSection] = useState("home");
  const [scrolledPercentage, setScrolledPercentage] = useState(0);
  const [scrolledPosition, setScrolledPosition] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <GlobalContext.Provider
      value={{
        openNavList,
        setOpenNavList,
        darkMode,
        setDarkMode,
        homeRef,
        aboutRef,
        contactRef,
        portfolioRef,
        servicesRef,
        scrolledPercentage,
        setScrolledPercentage,
        currentSection,
        setCurrentSection,
        scrolledPosition,
        setScrolledPosition,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalState = () => useContext(GlobalContext);

export { useGlobalState };
