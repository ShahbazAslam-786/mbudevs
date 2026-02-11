"use client"

import React from "react";
import granny from "../../../public/assets/granny.png";
import Image from "next/image";

const FeaturedProject = () => {
  return (
    <section className="flex items-center justify-center bg-white min-h-screen py-12 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col items-center w-full max-w-6xl p-6 sm:p-12">
        <h1 className="text-2xl font-bold mb-8 text-center font-primary">Featured Projects</h1>

        <div className="relative flex flex-col md:flex-row items-center bg-blue-900 py-8 sm:py-12 rounded-lg px-6 sm:px-12 max-w-full md:max-w-4xl md:h-auto shadow-lg">
          <div className="flex-shrink-0 md:mr-8 w-full md:w-1/3 flex justify-center md:justify-start">
            <Image
              src={granny}
              alt="Mobile Mockup"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
              className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col text-white text-center md:text-left w-full md:w-2/3 px-4 sm:px-10">
            <h1 className="text-xl font-bold font-primary">
              GIFT CARD GRANNY <span className="text-gray-300 text-lg font-primary">Mobile & Website</span>
            </h1>
            <p className="mt-4 text-base font-semibold text-white font-primary">
              Gift Card Granny is a platform that allows users to buy, sell, and exchange gift cards at discounted rates while also offering cashback rewards and bulk purchasing options.
            </p>
            <p className="mt-2 text-base font-light text-white font-primary">
              Buy Discounted Gift Cards – Purchase gift cards at a lower price than their face value.
            </p>
            <ul className="mt-4 text-base space-y-2 font-primary">
              <li className="font-primary">• Sell Unused Gift Cards – Exchange unwanted gift cards for cash or other cards.</li>
              <li className="font-primary">• Earn Cashback – Get cashback rewards on eligible purchases.</li>
              <li className="font-primary">• Bulk Purchasing – Businesses can buy gift cards in bulk with discounts.</li>
              <li className="font-primary">• eGift Cards – Instantly send and receive digital gift cards via email.</li>
              <li className="font-primary">• Technologies utilized: React Native, ReactJS, NextJS, NodeJS, MySQL, Lambda.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;