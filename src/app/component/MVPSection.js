"use client"
import Link from "next/link";
import React from "react";

const MVPSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between font-primary text-center md:text-left bg-amber-100 p-6 rounded-lg max-w-4xl mx-auto w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0 md:mr-4 flex-1 font-primary">
        Want to learn about our MVP Development process?
      </h2>
      <Link href="/contact">
        <button className="px-6 py-2 text-base md:text-lg font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500 text-blue-600 border-2 font-primary border-blue-600">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default MVPSection;
