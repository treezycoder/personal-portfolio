import { useCarousel } from "../../carousel-context";

const NextControl = () => {
  const {
    isSwitchingIndicator,
    isTranslating,
    handleClickDelay,
    setAutoPlaying,
    isMovingLeft,
    handleNext,
    autoPlayingRef,
  } = useCarousel();
  return (
    <span
      className={`absolute right-[1%] top-1/2 transform  -translate-y-1/2 cursor-pointer lg:hidden lg:group-hover:hidden hidden group-hover:block ${
        isTranslating && !isMovingLeft.current
          ? "translate-x-1"
          : "translate-x-0"
      }`}
      onClick={() => {
        if (isSwitchingIndicator) return;
        autoPlayingRef.current = false;
        setAutoPlaying(false);
        handleClickDelay();
        if (!isTranslating) {
          handleNext();
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gray"
        className={`size-8  transition ease-in-out delay-200`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </span>
  );
};

export default NextControl;
