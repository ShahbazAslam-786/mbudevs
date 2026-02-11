"use client";

import React, { useState } from "react";
import Image from "next/image";

// ===== Images Imports =====
import Shafiq from "../../../public/assets/shafik.jpeg";
import ahmad from "../../../public/assets/mahmad.jpeg";
import umar from "../../../public/assets/umar-bhai.jpg";
import faizan from "../../../public/assets/faizan.jpeg";
import attiqa from "../../../public/assets/Attiqa.jpg";
import abdullahBhai from "../../../public/assets/Abdullah bahi.jpeg";
import zain from "../../../public/assets/zain.jpg";
import usama from "../../../public/assets/usama.jpeg";
import awais from "../../../public/assets/Awais.jpg";
import shahbaz from "../../../public/assets/shahbaz.jpg";
import suhaib from "../../../public/assets/suhab.jpg";

const teamMembers = [
  { id: 0, name: "Shafique Chaudhry", title: "CEO", linkedin: "https://www.linkedin.com/in/hazratshafique/", image: Shafiq },
  { id: 1, name: "Muhammad Ahmad", title: "Co-Founder", linkedin: "https://www.linkedin.com/in/muhammad-ahmad-935075222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: ahmad },
  { id: 2, name: "Umar Rasheed", title: "CTO and Co-Founder", linkedin: "https://www.linkedin.com/in/umar-rasheed/", image: umar },
  { id: 3, name: "Faizan Afzal", title: "Lead FullStack Engineer", linkedin: "https://www.linkedin.com/in/faizanafzal54/", image: faizan },
  { id: 4, name: "Attiqa", title: "Creative Design Lead (UI/UX)", image: attiqa },
  { id: 6, name: "Muhammad Abdullah", title: "Lead Software Quality Assurance", linkedin: "https://www.linkedin.com/in/faizanafzal54/", image: abdullahBhai },
  { id: 8, name: "Zain Ali", title: "Senior Software Engineer", linkedin: "https://www.linkedin.com/in/zain-ali-17b988361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: zain },
  { id: 9, name: "Usama Naseer", title: "Senior Software Engineer", linkedin: "https://www.linkedin.com/in/faizanafzal54/", image: usama },
  { id: 12, name: "Shahbaz Aslam", title: "Software Engineer", linkedin: "http://www.linkedin.com/in/zunnurain-builders-ba6aa7343", image: shahbaz },
  { id: 11, name: "Muhammad Awais", title: "Shopify Engineer", linkedin: "http://www.linkedin.com/in/awais-butt-504467343", image: awais },
  { id: 13, name: "Suhaib", title: "Junior Software Engineer", linkedin: "http://www.linkedin.com/in/suhaib-with-code-10964632a", image: suhaib },
];

const TeamSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleProfileClick = (linkedin) => {
    if (linkedin) window.open(linkedin, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Vision Section */}
      <section className="bg-gray-200 text-white py-16 px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left Content */}
            <div className="space-y-3 mt-14">
              <h2 className="text-xl lg:text-2xl font-primary font-bold text-gray-900">
                A Message from Our CEO
              </h2>

              <p className="text-gray-600 text-lg font-primary leading-relaxed">
                At MBUDevs, we&apos;ve seen firsthand how the right blend of
                creativity and technology can do more than just improve
                businesses—it can truly transform entire industries. In today&apos;s
                fast-paced world, constantly reshaped by AI and digital innovation, our mission is clear: to help
                organizations like yours tackle complex challenges and achieve sustainable growth.
                {!expanded && (
                  <span
                    onClick={() => setExpanded(true)}
                    className="text-blue-600 cursor-pointer ml-2 font-semibold"
                  >
                    Read More
                  </span>
                )}
                {expanded && (
                  <>
                    <br />
                    We don&apos;t just write code; we offer clarity, strategy, and partnership. Whether navigating
                    digital transformation, building AI solutions, or scalable platforms, we&apos;re here for your journey.
                    <br />
                    Our approach is innovation, simplicity, and trust. Your goals fuel our work, and your success
                    is the ultimate measure of our efforts. Every solution reflects strategic thinking and long-term value.
                    <br />
                    Clients come with needs from chatbots, web apps, BI dashboards, workflow automation, to AI integration.
                    We bring strategic foresight and technical expertise.
                    <br />
                    Thank you for considering MBUDevs as your digital transformation partner.
                    Let&apos;s build something incredible together.
                    <br />
                    Warm regards,
                    <br />
                    <span
                      onClick={() => setExpanded(false)}
                      className="text-blue-600 cursor-pointer mt-2 inline-block font-semibold"
                    >
                      Read Less
                    </span>
                  </>
                )}
              </p>

              <h3 className="text-lg leading-relaxed font-primary font-bold text-gray-900">
                Shafique Chaudhry, PhD
              </h3>
              <h3 className="text-lg font-primary font-semibold text-gray-600">
                ( Chief Executive Officer )
              </h3>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative pt-10">
                <Image
                  src={Shafiq}
                  alt="Shafique Chaudhry"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 35vw"
                  width="auto"
                  height="auto"
                  className="object-cover rounded-lg w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-4 py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-primary">
          Meet our team
        </h1>

        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg font-primary">
            We <span className="font-semibold font-primary">care</span> about
            our clients, employees and community; we serve them with our
            extreme <span className="font-semibold font-primary">drive</span>,
            high <span className="font-semibold font-primary">integrity</span>{" "}
            and reliable <span className="font-semibold font-primary">teamwork</span>;
            and we strive for <span className="font-semibold">excellence</span>{" "}
            in all we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleProfileClick(member.linkedin)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={240}
                  height={240}
                  sizes="(max-width: 640px) 10rem, (max-width: 1024px) 12rem, 14rem"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center font-primary">
                {member.name}
              </h3>
              <p className="text-center text-gray-700 font-primary">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
