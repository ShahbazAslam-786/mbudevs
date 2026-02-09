"use client";

import Image from "next/image";
import DevelopmentImg from "../../../public/assets/development.png";

const SectionFour = () => (
  <div className="py-8 px-6 w-full">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:grid-cols-2-reverse">
      <div className="p-6 flex items-center justify-center">
        <Image
          src={DevelopmentImg}
          alt="AI Chatbots"
          className="h-44 w-44 md:h-40 md:w-40 object-contain rounded-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 font-primary">
          4. AI Chatbots
        </h2>
        <p className="text-gray-900 text-base font-primary">
          Streamline customer interactions with our AI-powered chatbots. They
          are designed to provide efficient and accurate responses to enhance
          user experiences.
        </p>
      </div>
    </div>
  </div>
);

export default SectionFour;
