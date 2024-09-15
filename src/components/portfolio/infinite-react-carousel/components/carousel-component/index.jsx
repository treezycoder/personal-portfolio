import { useEffect } from "react";
import { useCarousel } from "../../carousel-context";
import "../../styles/styles.css"; //use this if you prefer css
import ImagesComponent from "../images-component";
import PrevControl from "../icons/prev-control";
import NextControl from "../icons/next-control";
import IndicatorsComponent from "../indicators-component";

export default function CarouselComponent() {
  const {
    images,
    currentIndex,
    isMovingLeft,
    transitionDuration,
    clickDelay,
    nextIndicator,
    isSwitchingIndicator,
    setIsSwitchingIndicator,
    autoPlaying,
    setAutoPlaying,
    autoPlayingRef,
    handleNext,
    handlePrev,
    isTranslating,
    timeoutId,
    setTimeoutId,
    currentImageHovered,
  } = useCarousel();

  useEffect(() => {
    if (isSwitchingIndicator && nextIndicator < currentIndex) {
      setTimeout(handlePrev, 100);
    } else if (isSwitchingIndicator && nextIndicator > currentIndex) {
      setTimeout(handleNext, 100);
    } else if (isSwitchingIndicator && nextIndicator === currentIndex) {
      setIsSwitchingIndicator(false);
      setTimeout(
        () => (transitionDuration.current = 800),
        transitionDuration.current
      );
    }
    return () => {
      clearTimeout(handlePrev, 100);
      clearTimeout(handleNext, 100);
    };
  }, [nextIndicator, images, isSwitchingIndicator, currentIndex]);

  useEffect(() => {
    if (clickDelay !== 0 && clickDelay < 200) {
      transitionDuration.current = 100;
    } else if (clickDelay > 200 && clickDelay < 500) {
      transitionDuration.current = 300;
    } else if (clickDelay > 500 && clickDelay < 1100) {
      transitionDuration.current = 500;
    } else {
      transitionDuration.current = 800;
    }
  }, [clickDelay]);

  useEffect(() => {
    if (autoPlaying && autoPlayingRef.current) {
      transitionDuration.current = 1000;
      let id;
      if (isMovingLeft.current && autoPlaying && autoPlayingRef.current) {
        id = setTimeout(handlePrev, 5000);
      } else if (
        !isMovingLeft.current &&
        autoPlaying &&
        autoPlayingRef.current
      ) {
        id = setTimeout(handleNext, 5000);
      } else {
        id = setTimeout(handleNext, 5000);
      }
      setTimeoutId(id);
    } else {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId);
    };
  }, [autoPlaying, images, autoPlayingRef]);

  useEffect(() => {
    const carouselTimeout = setTimeoutId(() => {
      autoPlayingRef.current = true;
      setAutoPlaying(true);
    }, 100);

    return () => {
      clearTimeout(carouselTimeout);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        // autoPlayingRef.current = false;
        // setAutoPlaying(false);
      }}
      onMouseLeave={() => {
        // autoPlayingRef.current = true;
        // setAutoPlaying(true);
      }}
      id=""
      className={`group  overflow-hidden w-full pb-10 md:pb-20 relative`}
    >
      <div
        style={{ height: "clamp(40px, 8vw, 60px)" }}
        className={`w-full flex justify-center items-center text-slate-500 dark:text-white text-sm lg:text-lg md:text-md  font-bold text-center font-sans `}
      >
        {!isTranslating && images[2].title === "Infinity Carousel" ? (
          <p className={``}>
            <span
              className={`transition delay-200   ${
                currentImageHovered ? "inline text-indigo-500" : "hidden"
              } mr-2`}
            >
              &lt;
            </span>
            {images[2].title}{" "}
            <span className="text-italic text-sm text-slate-400">
              (This Carousel)
            </span>
            <span
              className={`transition delay-200 ${
                currentImageHovered ? "inline text-indigo-500" : "hidden"
              } ml-2`}
            >
              /&gt;
            </span>
          </p>
        ) : !isTranslating ? (
          <p className={``}>
            <span
              className={`transition delay-200 ${
                currentImageHovered ? "inline text-indigo-500" : "hidden"
              } mr-2`}
            >
              &lt;
            </span>
            {images[2].title}
            <span
              className={`transition delay-200   ${
                currentImageHovered ? "inline text-indigo-500" : "hidden"
              } ml-2`}
            >
              /&gt;
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
      <ImagesComponent />
      <IndicatorsComponent />
      <PrevControl />
      <NextControl />
    </div>
  );
}
