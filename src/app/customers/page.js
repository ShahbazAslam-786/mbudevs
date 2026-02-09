"use client"

import { Testimonial } from "../component/Testimonial";
import { TestimonialButton } from "../component/TestimonialButton";
import { TestimonialReviewSlider } from "../component/TestimonialReviewSlider";

 const PortfolioTestimonial = () => {
  return (
    <div>
      <div className="pt-[3rem] bg-gray-300 pb-[3rem] min-[470px]:pl-[1.5rem] min-[470px]:pr-[1.5rem] md:pl-[2rem] md:pr-[2rem] min-[850px]:pl-[3rem] min-[850px]:pr-[1rem] lg:pl-[5rem] lg:pr-[5rem] min-[1480px]:pl-[7rem] min-[1480px]:pr-[7rem] min-[1570px]:pl-[9rem] min-[1570px]:pr-[9rem] min-[1650px]:pl-[11rem] min-[1650px]:pr-[11rem] ">
        <Testimonial />
      </div>
      <div className="mt-[7rem] mb-[6rem] min-[470px]:pl-[1.5rem] md:pl-[2rem] min-[850px]:pl-[3rem] lg:pl-[5rem] min-[1480px]:pl-[7rem] min-[1570px]:pl-[9rem] min-[1650px]:pl-[11rem] flex flex-col lg:flex-row gap-16">
        <TestimonialButton />
        <TestimonialReviewSlider />
      </div>
    </div>
  );
};

export default PortfolioTestimonial
