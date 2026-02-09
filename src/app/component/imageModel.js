import { useState } from "react";
import Carousel from "react-multi-carousel";
import { FaArrowsAlt } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export const ImageModel = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToPreviousImageInModal = (e) => {
    e.stopPropagation();
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? item.additionalImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImageInModal = (e) => {
    e.stopPropagation();
    setModalImageIndex((prevIndex) =>
      prevIndex === item.additionalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 font-primary bg-gray-900 bg-opacity-80 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300"
    >
      &#10094;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-80 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 font-primary"
    >
      &#10095;
    </button>
  );

  return (
    <div>
      <div className="relative w-full max-w-[730px] lg:max-w-[450px] min-[1150px]:max-w-[450px]  ">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {item.additionalImages.map((image, index) => (
            <div
              key={index}
              className="relative group w-full h-auto cursor-pointer rounded-[12px] font-primary"
              onClick={() => openModal(index)}
            >
              <div className="relative w-full h-[400px] rounded-[16px] mx-auto mb-10 overflow-hidden">
                {/** Ensure the LCP image is eagerly loaded when present. */}
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Additional Image ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="w-full h-full object-cover rounded-[16px]"
                  loading={
                    index === 0 || image === "/assets/Home_Schooling_four.png"
                      ? "eager"
                      : "lazy"
                  }
                  priority={index === 0 || image === "/assets/Home_Schooling_four.png"}
                />
              </div>

              <div className="absolute text-white inset-0 flex items-center justify-center">
                <span className="font-primary text-white text-4xl transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <FaArrowsAlt />
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black flex font-primary justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <div className="relative max-w-screen-lg w-full p-4 sm:p-6 md:p-8 bg-black rounded-lg">
            <div className="relative w-full mx-auto" style={{ height: "80vh" }}>
              <Image
                src={item.additionalImages[modalImageIndex] || "/placeholder.svg"}
                alt={`Enlarged Image ${modalImageIndex + 1}`}
                fill
                sizes="100vw"
                priority
                className="w-full object-contain rounded-lg mx-auto"
              />
            </div>

            <button
              className="absolute top-4 right-4 text-white font-primary text-3xl font-bold hover:text-blue-600"
              onClick={closeModal}
            >
              &#10005;
            </button>

            <button
              onClick={goToPreviousImageInModal}
              className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 border-gray-400 text-gray-400 border-[2px] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition duration-300 text-2xl"
            >
              &#x276E;
            </button>

            <button
              onClick={goToNextImageInModal}
              className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 border-gray-400 border-[2px] text-gray-400 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition duration-300 text-2xl"
            >
              &#x276F;
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
