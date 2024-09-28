import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";

const CarouselContext = createContext();

const CarouselProvider = ({ children }) => {
  const [images, setImages] = useState([
    {
      title: "Promodoro Clock",
      src: "/images/promodoroclock.jpg",
      id: 0,
      code: "https://codepen.io/Tresor-Ngahame/pen/eYwNaWE",
      live: "https://codepen.io/Tresor-Ngahame/full/eYwNaWE",
    },
    {
      title: "Javascript Calculator",
      src: "images/calculator.jpg",
      id: 1,
      code: "https://codepen.io/Tresor-Ngahame/pen/VwJKORW?editors=0110",
      live: "https://codepen.io/Tresor-Ngahame/full/VwJKORW",
    },
    {
      title: "Infinity Carousel",
      src: "images/infinitycarousel.jpg",
      id: 2,
      code: "https://github.com/treezycoder/react-infinity-carousel",
      live: "https://ngahamecarousel.netlify.app/",
    },
    {
      title: "Gallery App",
      src: "images/galleryapp.jpg",
      id: 3,
      code: "https://github.com/treezycoder/gallery-app",
      live: "https://ngahamegallery.netlify.app/",
    },
    {
      title: "Tictactoe Game",
      src: "images/tictactoe.jpg",
      id: 4,
      code: "https://github.com/treezycoder/tictactoe-game",
      live: "https://ngahametictactoe.netlify.app/",
    },
    {
      title: "Online Image Slider",
      src: "images/onlineimageslider.jpg",
      id: 5,
      code: "https://github.com/treezycoder/online-image-slider",
      live: "https://ngahameimageslider.netlify.app/",
    },

    {
      title: "My Portfolio",
      src: "images/portfolio.jpg",
      id: 6,
      code: "https://github.com/treezycoder/personal-portfolio",
      live: "https://ngahame.netlify.app/",
    },
    {
      title: "Next Carousel",
      src: "images/nextcarousel.jpg",
      id: 7,
      code: "https://github.com/treezycoder/nextcarousel",
      live: "https://nextcarousellive.vercel.app/projects",
    },
    {
      title: "Service App",
      src: "images/serviceapp.jpg",
      id: 8,
      code: "https://github.com/treezycoder/service-app",
      live: "https://ngahameserviceapp.netlify.app/",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTranslating, setIsTranslating] = useState(false);
  const carouselRef = useRef(null);
  const isMovingLeft = useRef(true);
  const currentIndexRef = useRef(2);
  const transitionDuration = useRef(1000);
  const lastClickTimeRef = useRef(null);
  const [clickDelay, setClickDelay] = useState(0);
  const [nextIndicator, setNextIndicator] = useState(null);
  const [isSwitchingIndicator, setIsSwitchingIndicator] = useState(false);
  const [autoPlaying, setAutoPlaying] = useState(false);
  const autoPlayingRef = useRef(false);
  const imageWidth = useRef(33.333333);
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentImageHovered, setCurrentImageHovered] = useState(false);
  const carouselImagesRef = useRef(null);

  const handleNext = useCallback(() => {
    if (isTranslating) return;

    isMovingLeft.current = false;

    // Update the current index refs
    if (currentIndexRef.current === images.length - 1) {
      currentIndexRef.current = 0;
    } else {
      currentIndexRef.current += 1;
    }

    setIsTranslating(true);

    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }

    // Modify the images array
    let updatedImages = [...images, images[0]];
    updatedImages.shift();

    setTimeout(() => {
      setImages(updatedImages);
      setIsTranslating(false);
    }, transitionDuration.current);
  }, [isTranslating, images, currentIndex]);

  const handlePrev = useCallback(() => {
    if (isTranslating) return;

    isMovingLeft.current = true;

    // Update current index refs
    if (currentIndexRef.current === 0) {
      currentIndexRef.current = images.length - 1;
    } else {
      currentIndexRef.current -= 1;
    }

    setIsTranslating(true);

    // Update currentIndex
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }

    // Modify images array
    let updatedImages = [images[images.length - 1], ...images];
    updatedImages.pop();

    setTimeout(() => {
      setImages(updatedImages);
      setIsTranslating(false);
    }, transitionDuration.current);
  }, [isTranslating, images, currentIndex]);

  const handleClickDelay = useCallback(() => {
    const currentTime = Date.now();

    if (lastClickTimeRef.current !== null) {
      const delay = currentTime - lastClickTimeRef.current;
      setClickDelay(delay);
    }

    lastClickTimeRef.current = currentTime;
  }, []);

  const handleIndicatorClick = useCallback(
    (indicatorIndex) => {
      if (indicatorIndex === currentIndex) return;
      if (isSwitchingIndicator) return;

      setNextIndicator(indicatorIndex);
      setIsSwitchingIndicator(true);

      const transitionDurationPerIndicator = Math.abs(
        currentIndex - indicatorIndex
      );

      const maxDistance = 5; // This represents the maximum expected distance between indicators
      const minDuration = 100;
      const maxDuration = 500;
      const duration =
        maxDuration -
        ((maxDuration - minDuration) / maxDistance) *
          transitionDurationPerIndicator;

      transitionDuration.current = Math.max(
        minDuration,
        Math.min(duration, maxDuration)
      );
    },
    [currentIndex, isSwitchingIndicator]
  );

  const handleAutoPlay = useCallback(() => {
    autoPlayingRef.current = !autoPlayingRef.current;
    setAutoPlaying(!autoPlaying);
  }, [autoPlaying]);

  return (
    <CarouselContext.Provider
      value={{
        images,
        setImages,
        currentIndex,
        setCurrentIndex,
        isTranslating,
        setIsTranslating,
        carouselRef,
        isMovingLeft,
        currentIndexRef,
        transitionDuration,
        lastClickTimeRef,
        clickDelay,
        setClickDelay,
        nextIndicator,
        setNextIndicator,
        isSwitchingIndicator,
        setIsSwitchingIndicator,
        autoPlaying,
        setAutoPlaying,
        autoPlayingRef,
        handleNext,
        handlePrev,
        handleClickDelay,
        handleIndicatorClick,
        handleAutoPlay,
        imageWidth,
        timeoutId,
        setTimeoutId,
        carouselImagesRef,
        currentImageHovered,
        setCurrentImageHovered,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

const useCarousel = () => useContext(CarouselContext);

export { CarouselProvider, useCarousel };
