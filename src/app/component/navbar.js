"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import logo from "../../../public/assets/MBUdevs.png";
import { useBrand } from "./contextData";

const menuItems = [
  { label: "Projects", path: "/projects" },
  { label: "Customers", path: "/customers" },
  { label: "About", path: "/about" },
  { label: "Career", path: "/career" },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const { brand } = useBrand();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-white text-gray-700 p-2 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="bg-white text-gray-700 px-4 sm:px-6 shadow-md fixed top-0 left-0 w-full z-50 h-16 flex items-center">
          <Link href="/" className="mr-6 flex-shrink-0">
            {brand === "MBUDev" ? (
              <Image
                src={logo}
                alt={brand}
                className="h-[130px] w-auto object-contain"
                priority
              />
            ) : (
              <h2 className="text-blue-600 text-2xl font-[800]">BizzDevs</h2>
            )}
          </Link>

          <div className="hidden sm:flex items-center space-x-6 font-bold relative">
            <Link href="/" className="relative hover:text-blue-700 group">
              Home
              <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>


            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/services" className="flex items-center relative group">
                <span className="group-hover:text-blue-700">Services</span>
                <FaChevronDown className="ml-1 group-hover:text-blue-700" />
                <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-56 bg-white rounded-lg shadow-lg mt-2 p-2 z-50">
                  <Link href="/artificialIntelligence" className="block px-4 py-2 hover:text-blue-600">
                    Artificial Intelligence
                  </Link>

                  <Link href="/business" className="block px-4 py-2 hover:text-blue-600">
                    Business Development
                  </Link>
                  <Link href="/webDevelopment" className="block px-4 py-2 hover:text-blue-600">
                    Web Development
                  </Link>
                  <Link href="/mobileApp" className="block px-4 py-2 hover:text-blue-600">
                    Mobile App
                  </Link>
                  <Link href="/graphicDesign" className="block px-4 py-2 hover:text-blue-600">
                    Graphic Designing
                  </Link>
                  <Link href="/devOps" className="block px-4 py-2 hover:text-blue-600">
                    DevOps
                  </Link>
                  <Link href="/software" className="block px-4 py-2 hover:text-blue-600">
                    Software Testing
                  </Link>
                </div>
              )}
            </div>

            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative hover:text-blue-700 group"
              >
                {item.label}
                <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}

            <Link href="/contact" className="px-6 py-2 text-lg font-semibold rounded-lg bg-blue-600 text-white text-center block">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden ml-auto">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col">
          <button className="self-end mb-4" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={22} />
          </button>

          <Link href="/home" className="py-2 font-bold border-b">
            Home
          </Link>

          <div className="border-b py-2">
            <button
              className="flex justify-between w-full font-bold"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <Link href="/services">Services</Link>

              <FaChevronDown
                className={`transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
              />

            </button>

            {isMobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/business">Business Development</Link>
                <Link href="/artificialIntelligence">Artificial Intelligence</Link>
                <Link href="/webDevelopment" className="block px-4 py-2 hover:text-blue-600">
                  Web Development
                </Link>
                <Link href="/mobileApp">Mobile App</Link>
                <Link href="/graphicDesign">Graphic Designing</Link>
                <Link href="/devOps">DevOps</Link>
                <Link href="/software">Software Testing</Link>
              </div>
            )}
          </div>

          {["projects", "customers", "about", "career"].map((item) => (
            <Link key={item} href={`/${item}`} className="py-2 font-bold border-b capitalize">
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-6 w-full py-2 text-lg font-semibold rounded-lg bg-blue-600 text-white text-center block"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
