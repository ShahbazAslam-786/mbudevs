"use client"

import React from "react";

const stats = [
  { number: "10+", text: "Years of driving growth" },
  { number: "20+", text: "Forward thinking experts" },
  { number: "30+", text: "Digital Projects Delivered" },
  { number: "10+", text: "Industries we serve" },
  { number: "100%", text: "Customer Satisfaction" },
];

export const HomeStatus = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start  sm:items-start sm:text-left"
          >
            <p className="text-4xl font-bold font-primary text-white">
              {stat.number}
            </p>
            <p className="text-base lg:text-lg font-primary text-white mt-1">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
