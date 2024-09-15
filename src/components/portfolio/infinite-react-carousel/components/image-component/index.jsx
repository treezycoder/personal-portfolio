import { useCarousel } from "../../carousel-context";

const ImageComponent = ({ image, index }) => {
  const {
    currentIndexRef,
    isTranslating,
    transitionDuration,
    imageWidth,
    handleNext,
    handlePrev,
    isSwitchingIndicator,
    setAutoPlaying,
    handleClickDelay,
    autoPlayingRef,
    currentImageHovered,
    setCurrentImageHovered,
  } = useCarousel();

  return (
    <div
      onMouseEnter={() => {
        if (index === 2) {
          setCurrentImageHovered(true);
          // autoPlayingRef.current = false;
          // setAutoPlaying(false);
        }
      }}
      onMouseLeave={() => {
        if (index === 2) {
          setCurrentImageHovered(false);
        }
      }}
      onClick={
        index === 1
          ? () => {
              if (isSwitchingIndicator) return;
              autoPlayingRef.current = false;
              setAutoPlaying(false);
              handleClickDelay();
              if (!isTranslating) {
                handlePrev();
              }
            }
          : index === 3
          ? () => {
              if (isSwitchingIndicator) return;
              autoPlayingRef.current = false;
              setAutoPlaying(false);
              handleClickDelay();
              if (!isTranslating) {
                handleNext();
              }
            }
          : null
      }
      style={{
        width: `${imageWidth.current}%`,
        height: `clamp(200px, 50vw, 400px )`,
        opacity: `${image.id === currentIndexRef.current ? "1" : "0.2"}`,
        transition: isTranslating
          ? `opacity ${transitionDuration.current}ms ease-out`
          : "",
        willChange: "opacity",
      }}
      key={index}
      className={`flex-none ${
        isSwitchingIndicator
          ? "cursor-not-allowed"
          : index === 1 || 3
          ? "cursor-pointer"
          : ""
      } relative overflow-hidden`}
    >
      <img
        loading="lazy"
        alt={`${index + 1}`}
        src={image.src}
        className={`w-full h-full ${
          !isTranslating && index === 2 && currentImageHovered
            ? "scale-125"
            : "scale-100"
        } object-fit border-0  transition-transform peer group/current`}
      />
      <div
        style={{}}
        className={`z-[10] absolute ${
          currentImageHovered && !isTranslating && index === 2
            ? "flex justify-center items-center gap-4"
            : "hidden"
        } inset-0  w-full text-center bg-black/50 backdrop-blur-sm`}
      >
        <a
          style={{ fontSize: "clamp(1em, 1.2vw, 1.3vw)" }}
          className={` font-bold text-slate-300 hover:text-white border-b-4 border-b-white/0 pb-0 hover:border-b-indigo-500 transition`}
          href={image.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
        <a
          style={{ fontSize: "clamp(1em, 1.2vw, 1.3vw)" }}
          className={`font-bold text-slate-300 hover:text-white border-b-4 border-b-white/0 pb-0 hover:border-b-indigo-500 transition`}
          href={image.code}
          rel="noopener noreferrer"
          target="_blank"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ImageComponent;
