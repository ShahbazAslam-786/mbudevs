"use client"

import Image from "next/image";
import React, { useState } from "react";

const techLogos = [
  { src: require("../../../public/assets/tanserflow.png"), alt: "TenserFlow" },
  { src: require("../../../public/assets/payTorch.png"), alt: "Paytorch" },
  { src: require("../../../public/assets/longChain.webp"), alt: "LangChain" },
  { src: require("../../../public/assets/rails.png"), alt: "Rails" },
  { src: require("../../../public/assets/next.png"), alt: "next" },
  { src: require("../../../public/assets/reacticon.png"), alt: "React" },
  { src: require("../../../public/assets/angular.png"), alt: "Angular" },
  { src: require("../../../public/assets/nodejs.png"), alt: "Node.js" },
  { src: require("../../../public/assets/android.png"), alt: "Swift" },
  { src: require("../../../public/assets/amazon.png"), alt: "Android" },
  { src: require("../../../public/assets/docker.png"), alt: "AWS" },
  { src: require("../../../public/assets/python.png"), alt: "Docker" },
  { src: require("../../../public/assets/graphql.png"), alt: "graphql" },
  { src: require("../../../public/assets/django.png"), alt: "Python" },
  { src: require("../../../public/assets/vuejs.png"), alt: "Kotlin" },
  { src: require("../../../public/assets/Golang.png"), alt: "Golang" },
  { src: require("../../../public/assets/shopify.png"), alt: "Shopify" }
];

const TechExpertise = () => {
  const [showAll, setShowAll] = useState(false);




  const displayedLogos = showAll ? techLogos : techLogos.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto text-center p-6 md:p-10 bg-white mt-10 font-primary md:mt-20 mb-20">
      <h2 className="text-xl font-bold mb-6 font-primary text-gray-900">Our Tech Expertise</h2>
      <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-300">
        {displayedLogos.map((logo, index) => (
          <div key={index} className={`flex justify-center items-center p-4 border-b border-gray-300 ${index % 3 !== 2 ? 'border-r' : ''}`}>
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                sizes="(max-width: 640px) 25vw, (max-width: 768px) 28vw, 160px"
                className="w-100 h-16 md:w-100 md:h-20"
                style={{ width: 'auto' }}
              />
            ) : (
              <span className="text-gray-900 font-bold font-primary">{logo.alt}</span>
            )}
          </div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-2 text-base md:text-lg font-semibold rounded-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-500 text-blue-600 border-2 font-primary border-blue-600"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "See Less" : "See All"}
      </button>
    </div>
  );
};

export default TechExpertise;