"use client";

import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import TestimonialReviewList from "../data/testimonialReview";

export const TestimonialReviewSlider = () => {
  useEffect(() => {
    import("react-multi-carousel/lib/styles.css");
  }, []);

  const responsive = {
    extralargedesktop: {
      breakpoint: { max: 3000, min: 1801 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 120,
    },
    largedesktop: {
      breakpoint: { max: 1800, min: 1401 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1151 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 150,
    },
    laptop: {
      breakpoint: { max: 1150, min: 1025 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 450 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 449, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="relative w-full md:max-w-[1000px] mx-auto overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        arrows={false}
        partialVisible
        itemClass="px-4"
      >
        {TestimonialReviewList.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg bg-white shadow-md 
                      flex flex-col py-6 pl-6 sm:p-8 md:p-10 
                      max-w-full h-[500px] sm:h-[420px] lg:h-[500px] min-[1100px]:h-[480px] min-[1200px]:h-[430px] mb-[5rem]"
          >
            <p className="text-gray-900 text-base font-primary leading-6 sm:leading-8">
              {item.detail}
            </p>

            <div className="flex flex-row items-center gap-4 mt-6 sm:mt-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full border border-gray-400 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 text-base font-primary font-semibold">
                  {item.name}
                </p>
                <p className="text-gray-900 text-base font-primary">
                  {item.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
