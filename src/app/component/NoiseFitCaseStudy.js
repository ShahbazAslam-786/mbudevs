"use client"

import React from "react";
import giftLogo from "../../../public/assets/giftlogo.png";
import newGiftya from "../../../public/assets/new-giftya.png";
import Image from "next/image";
const NoiseFitCaseStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-6 sm:p-8 mt-8 w-full max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 px-4 sm:px-8 text-center lg:text-left ">
        <Image
          src={giftLogo}
          alt="Noisefit Logo"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
          className="w-20 sm:w-24 md:w-32 mt-6 sm:mt-8 mb-6 sm:mb-8 mx-auto lg:mx-0"
        />
        <h1 className="text-xl font-bold font-primary mt-2">
          GiftYa is a digital gifting platform that allows users to send personalized e-gift cards via text or email.
        </h1>
        <p className="mt-4 text-gray-900 text-base font-primary ">
          <strong className="font-primary text-gray-900">Personalized Digital Gift Cards -</strong> Send customized e-gifts with messages and images.
        </p>
        <ul className="mt-4 space-y-2 text-gray-900 text-base">
          <li className="text-gray-900 text-base"><span className="text-orange-500 font-primary text-base">&#8226;</span> Text & Email Delivery – Instantly send gifts via SMS or email.</li>
          <li className="text-gray-900 text-base"><span className="text-orange-500 font-primary text-base">&#8226;</span> Wide Merchant Selection – Supports local and national brands.</li>
          <li className="text-gray-900 text-base"><span className="text-orange-500 font-primary text-base">&#8226;</span> Bank-Linked Redemption – Seamlessly links to the recipient’s credit or debit card.</li>
          <li className="text-gray-900 text-base"><span className="text-orange-500 font-primary text-base">&#8226;</span> Flexible Spending – No need for physical cards; funds are automatically applied.</li>
          <li className="text-gray-900 text-base"><span className="text-orange-500 font-primary text-base">&#8226;</span> Business & Bulk Gifting – Ideal for corporate rewards and promotions.</li>
          <li className="text-gray-900"><span className="text-orange-500 font-primary text-base">&#8226;</span> Tools used: The usual stuff - Asana, Gitlab.</li>
          <li className="text-gray-900"><span className="text-orange-500 font-primary text-base">&#8226;</span> Technologies used: Nextjs/Reactjs, React Native, MySQL, and AWS.</li>
        </ul>
      </div>

      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-16 lg:mt-0 px-4 sm:px-8">
        <div className="absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 w-80 sm:w-80 h-100 sm:h-[500px] bg-orange-400 rounded-t-full"></div>
        <Image
          src={newGiftya}
          alt="Noisefit App"
          sizes="(max-width: 640px) 112px, (max-width: 768px) 192px, 224px"
          className="relative w-28 sm:w-48 md:w-56 h-auto z-10 mt-[-20px] sm:mt-[-40px]"
        />;
      </div>
    </div>
  );
};

export default NoiseFitCaseStudy;