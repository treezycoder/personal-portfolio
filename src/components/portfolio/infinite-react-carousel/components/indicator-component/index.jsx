import { useCarousel } from "../../carousel-context";

const IndicatorComponent = ({ index }) => {
  const {
    currentIndex,
    transitionDuration,
    setAutoPlaying,
    autoPlayingRef,
    handleIndicatorClick,
    isSwitchingIndicator,
  } = useCarousel();
  return (
    <span
      onClick={() => {
        autoPlayingRef.current = false;
        setAutoPlaying(false);
        handleIndicatorClick(index);
      }}
      key={index + "i"}
      style={{
        transition: `background-color ${transitionDuration.current}ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
      }}
      className={`rounded-full w-3 h-3 md:w-4 md:h-4 ${
        currentIndex === index
          ? "bg-gray-900 dark:bg-gray-100"
          : "bg-gray-900/50 dark:bg-gray-100/50"
      }  ${
        isSwitchingIndicator ? "cursor-not-allowed" : "cursor-pointer"
      } hover:scale-105 ${
        currentIndex === index
          ? ""
          : "hover:bg-gray-900/70 dark:hover:bg-gray-100/70"
      }  `}
    ></span>
  );
};

export default IndicatorComponent;
