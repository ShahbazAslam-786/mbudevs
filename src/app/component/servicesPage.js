"use client"

import React, { useState } from "react";
import ServicesItem from '../data/servicesitem'
import '../style/Portfolio.css';
import { useRouter } from "next/navigation";
import Image from "next/image";

const ServicesPage = () => {
  const [loaded] = useState(true);
  const router = useRouter();

  const handleImageClick = (slug) => {
    router.push(`/services/${slug}`);
  };


  return (
    <div
      className={`portfolio-page-container pt-24 flex flex-col items-center font-primary min-h-screen px-4 py-8 pb-16 bg-gray-50 ${loaded ? "animate-page-load" : ""
        }`}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4 font-primary">
        Welcome to MBUDevs Technologies
      </h2>

      <h3 className="text-lg font-semibold text-gray-600 text-center mb-12 font-primary">Your trusted partner in digital innovation. We specialize in crafting powerful web, mobile,and cloud-based<br />  software solutions tailored to your business needs. From startups to enterprises, we help organizations<br />  streamline processes, boost efficiency, and scale with confidence.

      </h3>
      <div className="image-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl font-primary">
        {ServicesItem.map((item, index) => (
          <div
            key={index}
            className="project-box w-full bg-white rounded-lg shadow-lg overflow-hidden font-primary transition-transform duration-300 ease-in-out animate-item cursor-pointer"
            onClick={() => handleImageClick(item.slug)}
          >
            <div className="relative w-full h-48 md:h-64">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Project ${index + 1}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                className="object-cover rounded-t-lg transition-transform duration-500 font-primary ease-in-out"
              />
            </div>
            <div className="content py-6 px-6 bg-white font-primary flex justify-center items-center">
              <h3 className="text-xl font-semibold text-gray-800 font-primary">{item.heading}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
