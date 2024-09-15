import { useCarousel } from "../../carousel-context";

const PlayControl = () => {
  const { isSwitchingIndicator, autoPlaying, handleAutoPlay } = useCarousel();
  return (
    <span
      onClick={() => {
        if (isSwitchingIndicator) return;
        handleAutoPlay();
      }}
      className={`absolute right-[25%] ${
        isSwitchingIndicator ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {autoPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className={`size-7 md:size-8 stroke-gray-950/80 dark:stroke-gray-100/80 hover:stroke-gray-950 dark:hover:stroke-gray-100  transition ease-in-out delay-200`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke=""
          className={`size-5 md:size-6 stroke-gray-950/80 dark:stroke-gray-100/80 hover:stroke-gray-950 dark:hover:stroke-gray-100 transition ease-in-out delay-200`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      )}
    </span>
  );
};

export default PlayControl;
