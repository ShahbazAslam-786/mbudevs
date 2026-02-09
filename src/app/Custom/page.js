"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PortfolioDataList from "../../Data/PortfolioDataList";
import { useNavigate } from "react-router-dom";
import Image from "next/image";

export const ProjectSlider = () => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1151 },
      items: 4,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1150, min: 1025 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 450 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 449, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const handleImageClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(`/portfolio/${id}`), 500);
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 z-10 flex items-center font-primary justify-center w-10 h-10 rounded-full shadow-lg top-1/2 -translate-y-1/2 text-white bg-blue-700 hover:text-blue-700 hover:bg-white transition duration-300"
    >
      &#10094;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 z-10 flex items-center justify-center font-primary w-10 h-10 rounded-full shadow-lg top-1/2 -translate-y-1/2 text-white bg-blue-700 hover:text-blue-700 hover:bg-white transition duration-300"
    >
      &#10095;
    </button>
  );

  return (
    <div className="relative w-full">
      <h4 className="border-b-[2px] border-gray-200 mb-[10px] text-lg pb-[5px] font-primary text-gray-900">
        <span className="border-b-[2px] text-lg text-gray-900 font-semibold border-blue-700 pb-[7px] font-primary">
          Project Description
        </span>
      </h4>
      <div className="relative">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          containerClass="w-full"
          itemClass="px-2"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {PortfolioDataList.map((item) => (
            <div className="w-full" key={item.id}>
              <div className="p-[3px] border-[1px] border-gray-200 rounded-[2px] group cursor-pointer relative">
                <div className="bg-[#eeeeee] border-b-[1px] border-b-gray-300">
                  <div>
                    <div
                      className="image-box h-[200px] w-full flex items-center justify-center overflow-hidden"
                      onClick={() => handleImageClick(item.id)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full h-full object-cover mb-[2px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="Portfolio-detail relative pt-[9px] pr-3 pb-1.5 pl-3">
                  <h4
                    className="leading-[22px] font-primary text-lg text-gray-900 group-hover:text-blue-600 transition-all duration-400 ease-in-out"
                    onClick={() => handleImageClick(item.id)}
                  >
                    {item.title}
                  </h4>
                  <span className="overflow-hidden font-primary text-ellipsis whitespace-nowrap [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] text-[#666666] text-[14px] leading-[22px]">
                    {item.portfolioDescription.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
