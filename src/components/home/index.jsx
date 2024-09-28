import { useGlobalState } from "../../context";
import AnimatedHeader from "./animated-header";
import SocialIconsHome from "./social-icons";

export default function Home() {
  const { darkMode, homeRef, contactRef } = useGlobalState();

  return (
    <section
      ref={homeRef}
      id="home"
      className={`w-full bg-white/0 h-screen flex flex-col items-center justify-center text-white py-16 px-6 lg:px-12`}
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[50px] left-[10%] bg-emerald-600/50 bg-blend-multiply opacity-20 rounded-full blur-3xl w-96 h-96"></div>
        <div className="absolute top-[200px] right-[10%] bg-emerald-600 bg-blend-multiply opacity-20 rounded-full blur-3xl w-96 h-96"></div>
      </div>
      <header className={`text-center  mb-8`}>
        <p className={`text-lg font-semibold mb-2 text-indigo-500`}>
          Hello 👋, I'm
        </p>
        <AnimatedHeader text={`Tresor Ngahame`} speed={150} pause={3000} />
        <p
          id="home-career"
          className={`text-lg text-slate-800 dark:text-gray-200 md:text-xl lg:text-2xl font-light mt-2`}
        >
          Frontend React Developer
        </p>
      </header>
      <p
        id="home-description"
        className={`text-center text-neutral-900 dark:text-gray-400 text-md md:text-lg  max-w-2xl mb-8 leading-relaxed`}
      >
        I'm a Frontend React Developer with a strong understanding of React,
        JavaScript, Tailwind CSS/CSS3, and HTML. I’m skilled in building
        responsive, user-friendly and dynamic web applications.
      </p>
      <SocialIconsHome theme={`${darkMode ? "dark" : "light"}`} />
      <p className={`mt-8`}>
        <button
          onClick={() =>
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className={`flex items-center px-4 py-2 lg:px-6 lg:py-2 bg-indigo-600 hover:bg-indigo-800  text-gray-200 rounded-full shadow-lg transform active:scale-105 focus:outline-none transition-all`}
        >
          Contact Me
          <span className={`ml-3`}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
            </svg>
          </span>
        </button>
      </p>
    </section>
  );
}
