"use client";

import Link from "next/link";
import React from "react";
import { FaGraduationCap, FaStethoscope, FaMapMarkerAlt, FaCalendarCheck, FaPlane, FaBuilding, FaShoppingCart, FaTruck, FaBullhorn, FaServer, FaFilm, FaPiggyBank, FaDumbbell, FaCalendarAlt, FaLayerGroup, FaUserTie } from "react-icons/fa";

const DomainsWorkedOn = () => {
  const domains = [
    { icon: <FaGraduationCap />, text: "Ed-Tech" },
    { icon: <FaStethoscope />, text: "Telemedicine" },
    { icon: <FaMapMarkerAlt />, text: "On Demand" },
    { icon: <FaCalendarCheck />, text: "Bookings" },
    { icon: <FaPlane />, text: "Travel" },
    { icon: <FaBuilding />, text: "B2B" },
    { icon: <FaShoppingCart />, text: "E-Commerce" },
    { icon: <FaTruck />, text: "Fleet Tracking" },
    { icon: <FaBullhorn />, text: "Non Profits" },
    { icon: <FaServer />, text: "SaaS" },
    { icon: <FaFilm />, text: "Entertainment" },
    { icon: <FaPiggyBank />, text: "Fintech" },
    { icon: <FaDumbbell />, text: "Fitness" },
    { icon: <FaCalendarAlt />, text: "Events" },
    { icon: <FaLayerGroup />, text: "Aggregators" },
    { icon: <FaUserTie />, text: "Recruitment" }
  ];

  return (
    <div className="bg-white flex flex-col items-center text-black p-10">
      <h2 className="text-xl font-bold mb-8 text-black font-primary">Domains we&apos;ve worked on</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl border-t border-l border-gray-200">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border-b border-r border-gray-200"
          >
            <span className="text-3xl md:text-4xl mb-2 font-primary">{domain.icon}</span>
            <span className="text-base font-semibold font-primary">{domain.text}</span>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <button className="mt-8 px-6 py-2 text-base md:text-lg font-semibold rounded-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-500 text-blue-600 border-2 font-primary border-blue-600">Get in Touch</button>
      </Link>
    </div>
  );
};

export default DomainsWorkedOn;