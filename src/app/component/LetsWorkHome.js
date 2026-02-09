"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "../style/letswork.css";
import { HomeStatus } from "../component/HomeStatus";
import Link from "next/link";

export const LetsWorkHome = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 200,
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mt-12">
      <div className="md:px-4">
        <div className="bg-[url('/assets/LetsWorkImge.png')] bg-[#1b232e] w-full bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 bg-cover md:rounded-lg relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-primary">
              We build world-class <br /> digital products
            </h1>

            <div className="mt-8 mb-10 max-w-4xl mx-auto ">
              <p className="text-gray-300 text-lg font-secondary leading-relaxed">
                We craft digital experiences that transform businesses through end-to-end solutions -
                from design to development, media to marketing. Specializing in AI innovation,
                we build intelligent chatbots and leverage LLMs to automate interactions
                and enhance customer engagement. Our technical expertise meets creative
                thinking to deliver solutions with real business impact.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/20 flex-1">
                <div className="text-blue-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 font-primary">Our Mission</h3>
                <p className="text-gray-300 text-sm font-secondary">
                 Bridging creativity and technology to solve complex business
                problems through AI and digital transformation, driving
                sustainable growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/20 flex-1">
                <div className="text-blue-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 font-primary">Our Vision</h3>
                <p className="text-gray-300 text-sm font-secondary">
                   To be the go-to partner for strategy, design, and technology
                that turns ideas into impact.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-6 md:mt-10 text-center">
            <Link href="contact">
              <button className="text-sm md:text-base font-semibold px-8 py-3 rounded-lg bg-white hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-500 font-primary shadow-lg hover:shadow-blue-500/20">
                Get in Touch
              </button>
            </Link>
          </div>

          <div className="w-full border-b border-gray-600 my-8 md:my-10"></div>

          <div>
            <HomeStatus />
          </div>
        </div>
      </div>
    </div>
  );
};