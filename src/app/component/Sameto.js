"use client"

import Image from "next/image";
import clublaxPic from "../../../public/assets/clublax-1.png";
import clublaxWebp from "../../../public/assets/club.webp";

export const Sameto = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-6 min-h-screen w-full">

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-8">

        <div className="bg-[#25C2F5] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg w-full max-w-6xl text-left md:mr-8">

          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 text-center sm:text-left ">
            <Image
              src={clublaxWebp}
              alt="SkyMD Logo"
              sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, 192px"
              className="w-28 sm:w-40 md:w-48 h-auto"
            />
            <div className="mt-4 sm:mt-0">
              <p className="text-xl font-semibold text-white font-primary">ClubLax, Lacrosse.org, real time scoring</p>
              <p className="text-base text-white font-primary">Mobile App</p>
            </div>
          </div>

          <h2 className="mt-6 text-base font-bold text-white font-primary">
            ClubLax is a mobile app and platform designed for lacrosse players, teams, and organizers to manage tournaments, schedules, and rankings.<br className="hidden sm:block" /> It provides real-time scoring, team management tools, and event updates, making it easier for players and coaches to stay informed.
          </h2>

          <p className="font-bold text-white mt-6 text-base font-primary">Key Challenges</p>
          <ul className="mt-4 text-base space-y-2 text-white font-'400' text-left font-primary">
            <li className="font-primary">• Developed cross-platform apps with a native user experience using the Expo React Native framework, <br className="hidden sm:block" /> enabling quick deployment on both app stores.</li>
            <li className="font-primary">• Integrated third-party services for seamless online prescriptions and deliveries.</li>
            <li className="font-primary">• Implemented a secure, HIPAA-compliant architecture and service framework.</li>
            <li className="font-primary">• Created a high-performance single-page application, allowing providers to diagnose effortlessly. <br className="hidden sm:block" /></li>
            <li className="font-primary">• Established integrations with various EHR systems used across practices.</li>
            <li className="font-primary">• Technologies utilized: NodeJS, MySQL, Redis, React Native, React JS, Apache Solr.</li>
          </ul>
        </div>

        <div className="w-40 sm:w-56 md:w-64 lg:w-72 overflow-hidden mt-6 md:mt-0">
          <Image
            src={clublaxPic}
            alt="Mobile Mockup"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
