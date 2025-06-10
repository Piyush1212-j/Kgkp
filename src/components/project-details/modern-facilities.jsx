import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { sliderData, videoData } from "@/data/modernFacilitiesData";

const ModernFacilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const totalSlides = sliderData.length;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleThumbnailClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleThumbnails = () => {
    const visibleCount = isMobile ? 1 : 3;
    const thumbnails = [];

    if (isMobile) {
      thumbnails.push({ ...sliderData[activeIndex], originalIndex: activeIndex });
    } else {
      for (let i = 0; i < visibleCount; i++) {
        const index = (activeIndex - 1 + i + totalSlides) % totalSlides;
        thumbnails.push({ ...sliderData[index], originalIndex: index });
      }
    }

    return thumbnails;
  };

  return (
    <section>
      <div className="w-full lg:pt-14 pt-6 bg-[#f5f5f5]">
        <div className="lg:pl-20 pl-6">
          <p className="text-primary uppercase text-sm tracking-[2px] mr-4 mb-3">
            Elevating luxury living through
          </p>
          <div className="flex items-center mb-5">
            <h2 className="lg:text-4xl text-2xl text-black mr-4">Modern Facilities</h2>
            <div className="h-px bg-customGray1 flex-1"></div>
          </div>
        </div>

        <div className="pl-6 lg:pl-20 pr-4 lg:pr-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-[40%]">
              <p className="text-base text-[#333] leading-relaxed mb-8 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#B38F5F] text-white px-6 py-3 font-medium tracking-wider hover:bg-[#a07b4a] transition-all">
                EXPERIENCE ALL LIFESTYLE
              </button>
            </div>

            <div className="lg:w-[60%] flex flex-col gap-6">
              {/* Main Slider */}
              <div className="relative w-full pt-10">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {sliderData.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0 ">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-[300px] object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white  ">
                            <item.icon className="mb-2 bg-white text-black w-16 h-16 p-4 rounded-full" />
                            <p className="text-lg font-medium tracking-wider">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handlePrev}
                  className="absolute top-0 right-16 transform -translate-y-1/2 z-10 text-white bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black/70 transition-all"
                  disabled={isAnimating}
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-0 right-4 transform -translate-y-1/2 z-10 text-white bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black/70 transition-all"
                  disabled={isAnimating}
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="relative overflow-visible">
                <div className="flex justify-center gap-4 px-4 md:px-0">
                  {getVisibleThumbnails().map((item, index) => (
                    <div
                      key={`${item.originalIndex}-${index}`}
                      className={`relative text-center cursor-pointer transition-all duration-300 overflow-visible w-full md:w-auto ${
                        item.originalIndex === activeIndex
                          ? "ring-0 ring-[#B38F5F] scale-102"
                          : "hover:scale-102"
                      }`}
                      onClick={() => handleThumbnailClick(item.originalIndex)}
                    >
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-[200px] md:h-[250px] object-cover pb-16"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-10">
                        <div className="bg-white text-black w-12 h-12 p-2.5 rounded-full flex items-center justify-center mb-3">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium tracking-wide px-2 py-1 text-black">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {isMobile && (
                  <div className="flex justify-center mt-6 gap-2">
                    {sliderData.map((_, index) => (
                      <button
                        key={index}
                        className={`w-4 h-4 rounded-full transition-colors ${
                          index === activeIndex
                            ? "bg-[#B38F5F]"
                            : "bg-gray-400"
                        }`}
                        onClick={() => handleThumbnailClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>

           
            </div>
          </div>
          
        </div>
           {/* Static Video Section */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative cursor-pointer w-full h-[450px] overflow-hidden shadow-md lg:mt-12 mt-4"
                aria-label="Open video modal"
              >
                <img
                  src={videoData.thumbnail}
                  alt="Experience Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                  <div className="mb-2 bg-[#966326] text-white w-16 h-16 p-4 rounded-full flex items-center justify-center hover:bg-[#7a4f1e] transition-colors">
                    <FaPlay className="w-6 h-6 ml-1" />
                  </div>
                  <p className="text-lg font-medium tracking-wider">Walkthrough</p>
                </div>
              </div>

              {/* Video Modal */}
              {isModalOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                  onClick={() => setIsModalOpen(false)}
                  aria-modal="true"
                  role="dialog"
                  tabIndex={-1}
                >
                  <div
                    className="relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:text-gray-300 transition-colors"
                      onClick={() => setIsModalOpen(false)}
                      aria-label="Close video modal"
                    >
                      &times;
                    </button>
                    <video
                      src={videoData.url}
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[80vh]"
                    />
                  </div>
                </div>
              )}
      </div>
    </section>
  );
};

export default ModernFacilities;
