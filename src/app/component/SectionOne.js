"use client"

import Image from "next/image";
import TrainingImg from "../../../public/assets/traning.png"; // Make sure file path & name are correct

const SectionOne = () => (
    <div className="bg-blue-50 py-8 px-6 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-primary">
                    1. Model Training
                </h2>
                <p className="text-gray-900 text-base font-primary">
                    Unlock the full potential of AI with our expert model training
                    services. We build and train complex AI models using cutting-edge
                    tools such as TensorFlow, Keras, PyTorch, and PaddlePaddle. These
                    frameworks are designed to provide accurate results and flexible
                    solutions for both research and production.
                </p>
            </div>
            <div className="p-6 flex items-center justify-center">
                <Image
                    src={TrainingImg}
                    alt="Model Training"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 18vw"
                    className="h-52 w-52 md:h-72 md:w-72 object-contain rounded-lg"
                />

            </div>
        </div>
    </div>
);

export default SectionOne;
