"use client";

import Image from "next/image";
import React, { useState } from "react";

// Card images
import Mobile from "../../../public/assets/Mobile.gif";
import Laptop from "../../../public/assets/Laptop.gif";
import Desktop from "../../../public/assets/Desktop.gif";

// Section images
import IosApp from "../../../public/assets/ios.png";
import AndroidApp from "../../../public/assets/android_app.png";
import HybridApp from "../../../public/assets/HybridApp.png";

const cardData = [
  {
    title: "NATIVE APPLICATION",
    description:
      "A native application is a mobile app designed specifically for a particular operating system, such as Android or iOS. These apps are typically developed using system-specific programming languages and are made available through official platforms like the Google Play Store and the App Store.",
    image: Mobile,
    alt: "Native Mobile App",
  },
  {
    title: "MOBILE WEB APPLICATION",
    description:
      "A mobile web application functions as a lightweight client. Once overshadowed by native apps, it has regained popularity with the advancement of HTML5 and CSS3 standards, enhancing user experience while providing greater functionality and richer features on mobile devices.",
    image: Laptop,
    alt: "Mobile Web App",
  },
  {
    title: "HYBRID APPLICATION",
    description:
      "A hybrid application integrates HTML5, JavaScript, and CSS web technologies within a native app framework. This approach enables full access to mobile device features while allowing seamless distribution across multiple platforms.",
    image: Desktop,
    alt: "Hybrid App",
  },
];

const MobileAppSection = () => {
  const [expanded, setExpanded] = useState(
    Array(cardData.length).fill(false)
  );

  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="pt-8 pb-16">
      {/* Header */}
      <div className="w-full bg-gray-100 py-10">
        <div className="text-center py-10 px-4">
          <h1 className="text-xl font-bold mb-3 font-primary">
            Delivering Stellar Services Of Development Of App
          </h1>
          <p className="text-base max-w-2xl text-gray-900 mx-auto font-primary">
            Looking to elevate your business with top-notch app development?
            Operating without an app puts you at a disadvantage. We design apps
            that deliver seamless experiences and keep users engaged.
          </p>
        </div>
      </div>

      {/* iOS Section */}
      <div className="bg-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center p-10 gap-6">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl font-bold mb-4 font-primary text-gray-900">
              iPhone Apps
            </h2>
            <p className="text-gray-900 text-base font-primary">
              A vast community worldwide relies on iPhones. Our developers craft
              premium iOS applications that compete globally and drive real
              business growth.
            </p>
          </div>
          <div className="lg:w-1/4">
            <Image
              src={IosApp}
              alt="iOS App Development"
              width={1200}
              height={800}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Android Section */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center p-10 gap-6">
        <div className="lg:w-1/4">
          <Image
            src={AndroidApp}
            alt="Android App Development"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl font-bold mb-4 font-primary text-gray-900">
            Android Apps
          </h2>
          <p className="text-gray-900 text-base font-primary">
            We build innovative, scalable Android applications that deliver
            exceptional performance and engage millions of users worldwide.
          </p>
        </div>
      </div>

      {/* Hybrid Section */}
      <div className="bg-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center p-10 gap-6">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl font-bold mb-4 font-primary text-gray-900">
              Hybrid Apps
            </h2>
            <p className="text-gray-900 text-base font-primary">
              Hybrid apps combine the power of web technologies with native
              features, offering cross-platform compatibility and faster
              development.
            </p>
          </div>
          <div className="lg:w-1/4">
            <Image
              src={HybridApp}
              alt="Hybrid App Development"
              width={1200}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 sm:px-16 lg:px-[170px] mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-tr-[20px] rounded-br-[20px] py-6"
            >
              <div className="flex justify-center items-center h-[150px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-900 font-primary">
                  {card.title}
                </h3>

                <p className="text-center text-gray-900 mt-2 text-base font-primary">
                  {expanded[index]
                    ? card.description
                    : `${card.description.substring(0, 100)}`}
                  {card.description.length > 100 && (
                    <>
                      {!expanded[index] && "... "}
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-blue-500 font-semibold hover:underline ml-1"
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
