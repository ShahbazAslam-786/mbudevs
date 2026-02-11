"use client"

import { useState } from "react";
import onlineGif from "../../../public/assets/online.gif"
import landGif from "../../../public/assets/land.gif"
import siteGif from "../../../public/assets/site.gif"
import logopenGif from "../../../public/assets/logopen.gif"
import Image from "next/image";
import flyer from "../../../public/assets/flyer.png";
import logoDesign from "../../../public/assets/logoDesign.webp";

const cardData = [
    {
        title: "UI/UX Design Development",
        description: "Our designs are crafted through in-depth analysis of user behavior across diverse websites. This approach ensures a seamless user journey, naturally guiding visitors toward the desired action.",
        image: onlineGif,
        alt: "online store"
    },
    {
        title: "Site Design",
        description: "We build upon your corporate identity, ensuring it resonates with loyal users, encouraging them to return to a visually appealing and user-friendly platform.",
        image: landGif,
        alt: "Site design"
    },
    {
        title: "Mobile App Design",
        description: "Eye-catching mobile app designs enhance user convenience, making them more effective for your business. MBUDevs crafts intuitive application designs for iOS and Android, driving customer engagement and addressing key business challenges.",
        image: siteGif,
        alt: "Mobile app design"
    },
    {
        title: "Logo Design",
        description: "We delve into our clients' businesses, analyze their target audience, and define the core marketing objective the logo should achieve. Only then do we begin crafting the concept.",
        image: logopenGif,
        alt: "Logo Design"
    }
];

const GraphicDesign = () => {
    const [expanded, setExpanded] = useState(Array(cardData.length).fill(false));

    const toggleReadMore = (index) => {
        setExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };
    return (
        <div className="bg-white min-h-screen pb-16 pt-8">
            <div className=" mx-auto">


                <div className="relative w-full bg-gray-100 px-10 py-10">
                    <div className="text-center py-10 px-4">
                        <h1 className="text-xl text-gray-900 font-bold mb-3  font-primary">
                            Our Design For Your Business Achievement
                        </h1>
                        <p className="text-base max-w-2xl text-gray-900 mx-auto font-primary">
                            At MBUDevs, we offer top-tier graphic design services across Pakistan. Our skilled designers excel not only in graphic creation but also stay updated with the latest trends in web promotion. This unique combination allows us to deliver comprehensive solutions under one roof. MBUDevs is renowned for crafting the finest logo designs in Pakistan.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 mt-10">
                    <h2 className="text-xl font-primary font-semibold text-center text-gray-900 mb-6">
                        One Stop Shop To Avail Of Full Graphic Designing Services
                    </h2>
                    <p className="text-base font-primary mb-6 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed">
                        Struggling to stand out in a crowded market? Establishing a strong online presence can be challenging, but there&apos;s no need to worry—we&apos;ve got the solutions you need.
                        <br />
                        At MBUDevs Technologies, we offer comprehensive graphic design services in Pakistan, focused on tackling visual branding challenges for businesses of all sizes. Our approach is driven by passion, transforming ideas into impactful designs.{" "}
                        <span className="text-blue-500 font-primary text-base hover:text-gray-900 cursor-pointer">
                            make modern websites
                        </span>{" "}
                        and crafting compelling visuals for digital marketing campaigns, seamlessly integrated with top-tier online marketing strategies.
                        <br />
                        <br />
                        We recognize that the goal of integrating graphic design services into digital marketing is to effectively engage and connect with your target audience.
                        <span className="text-blue-500 hover:text-gray-900 text-base cursor-pointer font-primary">
                            Digital marketing
                        </span>{" "}
                        It&apos;s all about capturing your audience&apos;s attention. Wondering how? The creativity of a skilled graphic designer plays a key role in promoting products or services, laying the foundation for strong brand awareness. Remember, in today&apos;s digital landscape, your brand&apos;s success relies heavily on how effectively you build and manage your online presence.
                        <br />
                        <br />
                        To support your brand&apos;s growth and visibility, we bring together the best graphic design talent in Pakistan. Our top priority is customer satisfaction, which is why we deliver high-quality, competitive, and tailored graphic design services that align perfectly with your business needs.
                        <br />
                        <br />
                    </p>
                </div>

                <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center font-primary">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 md:pl-[170px]">
                            Flyer and Brochures
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pl-[170px] pr-4 leading-relaxed">
                            Unique flyer designs are often overlooked in Pakistan, and we&apos;re here to introduce the style and sophistication your brochures need to stand out. If you&apos;re searching for eye-catching flyers and brochures, trust Elexoft to handle everything for your convenience.

                            Not only will we deliver modern and innovative designs, but we&apos;ll also craft a strategic marketing plan that transforms your branding and advertising efforts. With the expertise of our top-tier logo and graphic designers, we&apos;ll present your message in a visually striking and compelling way, ensuring it captures attention while leaving a lasting impression.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={flyer}
                            alt="CMS"
                            className="mx-auto"
                            width={500}   // adjust width as needed
                            height={300}  // adjust height as needed
                            sizes="(max-width: 640px) 70vw, (max-width: 768px) 75vw, 33vw"
                        />
                    </div>
                </div>

                <div className="bg-white p-8 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-4">
                        <Image
                            src={logoDesign}
                            alt="CRM"
                            width={500} // adjust width as needed
                            height={300} // adjust height as needed
                            sizes="(max-width: 640px) 70vw, (max-width: 768px) 75vw, 33vw"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 pl-2">
                            Logo Design
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pr-[170px] pl-2 leading-relaxed">
                            MBUDevs is your go-to destination for outstanding logo designs, equipped with everything needed to create impactful and memorable brand identities. We&apos;ll elevate your business by crafting a distinctive logo that establishes your presence across Pakistan.

                            Many businesses struggle with logos that fail to communicate effectively, leading to branding challenges. Our priority is to design logos that leave a lasting impression—instantly recognizable and symbolic of your organization&apos;s values. With MBUDevs, your logo won&apos;t just represent your brand; it will become a mark of elegance and excellence.
                        </p>
                    </div>
                </div>
                <div className="bg-white px-4 sm:px-16 lg:px-[170px] mt-8">
                    <div className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[1220px]:grid-cols-2 gap-8">
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-tl-[0px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[20px] overflow-hidden">
                                <div className="flex justify-center items-center h-[150px]">
                                    <Image
                                        src={card.image}
                                        alt={card.alt}
                                        className="w-24 h-24 sm:w-[120px] sm:h-[120px] object-contain"
                                        sizes="(max-width: 640px) 96px, 120px"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-center text-xl font-primary font-semibold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-900 text-base font-primary text-center leading-relaxed">
                                        {expanded[index]
                                            ? card.description
                                            : `${card.description.substring(0, 100)}`}
                                        {card.description.length > 100 && (
                                            <>
                                                {!expanded[index] && "... "}
                                                <button
                                                    onClick={() => toggleReadMore(index)}
                                                    className="text-blue-500 font-semibold hover:underline focus:outline-none inline"
                                                >
                                                    {expanded[index] ? "Read Less" : "Read More"}
                                                </button>
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphicDesign;
