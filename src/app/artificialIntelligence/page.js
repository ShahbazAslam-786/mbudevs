"use client"

import React from "react";
import SectionOne from "../component/SectionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import SectionFour from "../component/SectionFour";
import { useBrand } from "../component/contextData";
import Link from "next/link";

const ArtificialIntelligenceServices = () => {

  const { brand } = useBrand();
  
  return (
    <div className="">
      <div className="relative w-full bg-gray-100 py-20">
        <div className="text-center py-10 px-4 mx-auto">
          <h1 className="text-xl font-bold text-gray-900 mb-3  font-primary">
            {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} AI Solutions: Empowering Your Business with Intelligent Technologies
          </h1>
          <p className="text-base max-w-2xl text-gray-900 mx-auto font-primary">
            Welcome to {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies, where we leverage cutting-edge AI solutions to drive your business forward. Our mission is to empower companies across Pakistan, the USA, and beyond with innovative artificial intelligence services that enhance efficiency, scale operations, and elevate productivity.
          </p>
        </div>
      </div>

      <div className="relative w-full bg-gray-100 ">
        <div className="text-center pb-12 px-4">
          <h1 className="text-xl text-gray-900 font-bold mb-3  font-primary">
            Our AI Development Services
          </h1>
          <p className="text-base max-w-2xl text-gray-900 mx-auto font-primary">
            Empower your business with our all-encompassing AI services, designed to enhance decision-making, streamline operations, cut costs, and elevate the overall customer experience.
          </p>
        </div>
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <div className="py-12 bg-white border-t border-b border-gray-300">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-primary">
            Why Choose {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies?
          </h2>
          <p className="font-primary text-base mb-2 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed">
            {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies is committed to driving your business growth and delivering conversion-focused leads through our cutting-edge AI solutions.
          </p>
          <p className="text-base font-primary mb-2 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed">
            Looking to elevate your business? Reach out to us today and discover how our customized solutions can empower you to achieve your goals and maintain a competitive edge.
          </p>
          <Link href="/contact">
            <button
              className="mt-6 px-6 py-2 text-base md:text-lg font-semibold rounded-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-500 text-blue-600 border-2 font-primary border-blue-600"
            >
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>


    </div>
  )
};

export default ArtificialIntelligenceServices;
