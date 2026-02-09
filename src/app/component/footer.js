"use client"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSoundcloud, FaSpotify } from "react-icons/fa"
import logo from "../../../public/assets/MBUdevs.png"
import { useBrand } from "./contextData";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { brand } = useBrand();

  return (
    <footer className="bg-[#1a1f25] text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          <div>
            <h3 className="text-lg font-semibold mb-6 font-primary">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 hover:text-white font-primary">
                  Artificial Inteligence
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-sm text-gray-400 font-primary hover:text-white">
                  Business Development
                </Link>
              </li>
              <li>
                <Link href="/webDevelopment" className="text-sm text-gray-400 font-primary hover:text-white ">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobileApp" className="text-sm font-primary text-gray-400 hover:text-white">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/graphicDesign" className="text-sm font-primary text-gray-400 hover:text-white">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link href="/devOps" className="text-sm text-gray-400 font-primary hover:text-white">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-primary">Engineering</h3>
            <ul className="space-y-3">

              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Application Modernization
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  POC Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  AI Software Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Cloud Migration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-primary">Artificial Intelligence</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  AI Workshop
                </Link>
              </li>
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  AI PoC & MVP
                </Link>
              </li>
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  Generative AI
                </Link>
              </li>
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  MLOps
                </Link>
              </li>
              <li>
                <Link href="/artificialIntelligence" className="text-sm text-gray-400 font-primary hover:text-white">
                  Conversational AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-primary">Optimization</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Software Audit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 font-primary hover:text-white">
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 font-primary">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-sm text-gray-400 font-primary hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/customers" className="text-sm text-gray-400 font-primary hover:text-white">
                  Customers
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800">
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border-r border-gray-800 pr-8 pt-3">

                {brand === 'MBUDev' ? (
                  <Link href="/">
                    <Image
                      src={logo}
                      alt={brand}
                      className="w-40 h-10 object-cover"
                    />
                  </Link>
                ) : (
                  <Link href="/" className="text-3xl text-bold font-primary">BIZZ DEVS</Link>
                )
                }

              </div>

              <div className="border-r border-gray-800 pr-8">
                <h4 className="text-sm font-semibold mb-2 font-primary">Address</h4>
                <p className="text-sm text-gray-400 font-primary">
                  611 South DuPont Highway Suite 102 (street) Dover, Delaware, 19901
                </p>
              </div>

              <div className="border-r border-gray-800 pr-8 font-primary">
                <h4 className="text-sm font-semibold mb-2 font-primary">Contact Us</h4>
                {brand === "MBUDev" ? (
                  <Link href="mailto:services@tkxel.com" className="text-sm text-gray-400 block hover:text-white">
                    umar@mbudevs.com
                  </Link>
                ) : (
                  <Link href="mailto:services@tkxel.com" className="text-sm text-gray-400 block hover:text-white">
                    services@bizzDevs.com
                  </Link>
                )
                }

                {/* <a href="tel:(202)978-3410" className="text-sm font-primary text-gray-400 block hover:text-white">
                  (202) 978-3410
                </a> */}
              </div>

              <div>
                <h4 className="text-sm font-semibold font-primary mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://linkedin.com/in/bizzdevs"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1AjAZrd2Cu/"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                  <Link
                    href="https://instagram.com/bizzdevs"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

