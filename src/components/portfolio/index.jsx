import { useGlobalState } from "../../context";
import { CarouselProvider } from "./infinite-react-carousel/carousel-context";
import CarouselComponent from "./infinite-react-carousel/components/carousel-component";

export default function Portfolio() {
  const { portfolioRef } = useGlobalState();

  return (
    <section ref={portfolioRef} id="portfolio" className={`w-full  py-16 `}>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 relative inline-block">
          My Portfolio
          <span className="block w-16 h-1 bg-indigo-500 rounded-md absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Checkout My Recent Projects
        </p>
      </div>
      <div
        id="carousel-container"
        className={`relative max-w-[2500px] mx-auto`}
      >
        <CarouselProvider>
          <CarouselComponent />
        </CarouselProvider>
      </div>
    </section>
  );
}
