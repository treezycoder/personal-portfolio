import "./App.css";
import NavBar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Home from "./components/home";
import { useGlobalState } from "./context";
import Footer from "./components/footer";
import { useEffect } from "react";
import NavList from "./components/navbar/nav-list";

function App() {
  const {
    darkMode,

    setScrolledPercentage,

    setScrolledPosition,
  } = useGlobalState();

  useEffect(() => {
    const handleScroll = () => {
      const totalscrollablePixels =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPixels =
        window.scrollY || document.documentElement.scrollTop;
      const scrolledPercentage = (scrolledPixels / totalscrollablePixels) * 100;
      setScrolledPercentage(scrolledPercentage);
      setScrolledPosition(scrolledPixels);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkModeNgahamePortfolio", JSON.stringify(darkMode));
    if (darkMode) {
      // Set the background for dark mode

      document.body.style.background = "#111827"; // dark gray background (gray-100);
    } else {
      // Set the background for light mode
      document.body.style.background = "#f3f4f6"; // Light gray background (gray-100);
    }
  }, [darkMode]);

  return (
    <div className={`portfolio-container ${darkMode ? "dark" : ""}`}>
      <NavList />
      <NavBar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
