"use client";

import Image from "next/image";
import ComputerVisionImg from "../../../public/assets/computer vision.png";

const SectionThree = () => (
  <div className="bg-blue-200/30 backdrop-blur-md py-8 px-6 w-full">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 font-primary">
          3. Computer Vision
        </h2>
        <p className="text-gray-900 text-base font-primary">
          Our computer vision services allow you to analyze visual data with
          precision. From facial recognition to object detection, we provide
          customized solutions for your needs.
        </p>
      </div>
      <div className="p-6 flex items-center justify-center">
        <Image
          src={ComputerVisionImg} 
          alt="Computer Vision"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
          className="h-44 w-44 md:h-40 md:w-40 object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
);

export default SectionThree;
