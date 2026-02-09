"use client"

import React from "react";
import { useBrand } from "../component/contextData";
import Image from "next/image";
import CloudImg from "../../../public/assets/cloud.png";
import ChImage from "../../../public/assets/ch.png"
import VpsImage from "../../../public/assets/Vps.png";
import HostImage from "../../../public/assets/host.png"
import PaasImage from "../../../public/assets/paas.png"
import ManageHostImage from "../../../public/assets/managehost.png";
import DsaImage from "../../../public/assets/dsa.png";
const DevOps = () => {
    const { brand } = useBrand()
    return (
        <div className="bg-white min-h-screen py-10">
            <div className="mx-auto">


                <div className="relative w-full bg-gray-100 py-10 px-10 mx-auto">
                    <div className="text-center py-10 px-4 max-w-4xl mx-auto">
                        <h1 className="text-xl text-gray-900 font-bold mb-3 font-primary">
                            Lead Your Future With MBUDevs Technologies Innovative DevOps Services Our Design For Your Business Achievement
                        </h1>
                        <p className="text-base max-w-2xl text-gray-900 mx-auto font-primary">
                            Welcome to MBUDevs Technologies, where we revolutionize your business with advanced DevOps practices aimed at boosting efficiency, scalability, and productivity. Our seamless DevOps integration streamlines your software delivery pipeline while cultivating a culture of innovation and collaboration within your development team.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 my-10">
                    <h2 className="text-xl font-primary font-semibold text-gray-900 px-4 sm:px-16 lg:px-[170px] mb-6">
                        DevOps Services Offered at MBUDevs Technologies
                    </h2>
                    <p className="font-primary text-base mb-6 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed">
                        Want to maximize your resources while saving time and money? MBUDevs Technologies connects development and operations, delivering seamless, reliable services for your applications. Discover our comprehensive DevOps solutions available in Pakistan, the USA, and across the globe:
                    </p>
                </div>

                <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 md:pl-[170px]">
                            Cloud Hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pl-[170px] pr-4 leading-relaxed">
                            Our team is dedicated to providing cloud hosting solutions powered by multiple servers, ensuring enhanced reliability, performance, and scalability for your business infrastructure. Our distributed approach allows you to effortlessly manage increasing demands and expand your operations with ease. We focus on delivering flexible and efficient services, empowering your business to succeed in an ever-evolving digital environment.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={CloudImg}        // Use the imported image
                            alt="CMS"
                            className="w-[50%] mx-auto"
                        />
                    </div>
                </div>

                <div className="bg-white p-8 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-4">
                        <Image
                            src={VpsImage}    // use imported image
                            alt="CRM"
                            className="w-[50%] mx-auto"
                            width={500}       // optional: natural width
                            height={500}      // optional: natural height
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 pl-2">
                            Virtual Private Server (VPS) Hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pr-[170px] pl-2 leading-relaxed">
                            A Virtual Private Server (VPS) offers a secure, scalable solution for your applications, functioning as an independent virtual environment within a shared physical server managed by a cloud or web hosting provider. Our VPS hosting ensures dedicated server space with tailored resources, giving your business enhanced control and flexibility to manage operations efficiently.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 md:pl-[170px]">
                            Serverless Hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pl-[170px] pr-4 leading-relaxed">
                            Our serverless hosting service enables you to run applications and services on a cloud provider's infrastructure, ensuring greater flexibility and cost efficiency.{brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies stands out as a leading provider of serverless computing solutions, empowering you to manage event-driven code seamlessly without the hassle of handling underlying infrastructure.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={HostImage}       // Use the imported image
                            alt="CMS"
                            className="w-[50%] mx-auto"
                            width={500}           // optional, natural width
                            height={500}          // optional, natural height
                        />
                    </div>
                </div>
                <div className="bg-white p-8 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-4">
                        <Image
                            src={PaasImage}   // imported image
                            alt="CRM"
                            className="w-[50%] mx-auto"
                            width={500}       // optional natural width
                            height={500}      // optional natural height
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 pl-2">
                            Platform as a Service (PaaS)
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pr-[170px] pl-2 leading-relaxed">
                            Our Platform as a Service (PaaS) solution delivers a fully integrated cloud environment for seamless development and deployment. We provide all the essential components—servers, operating systems, networking, storage, and development tools—so you can focus on innovation without managing infrastructure. With {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies’ PaaS, you gain enhanced scalability and efficiency, allowing your business to thrive.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 md:pl-[170px]">
                            Managed Hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pl-[170px] pr-4 leading-relaxed">
                            MBUDevs Technologies provides comprehensive managed hosting services, handling every aspect of your hosting requirements. We offer dedicated servers and associated hardware exclusively for individual clients, ensuring seamless management and optimal performance on your behalf.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={ManageHostImage}   // imported image
                            alt="CMS"
                            className="w-[50%] mx-auto"
                            width={500}             // optional natural width
                            height={500}            // optional natural height
                        />
                    </div>
                </div>
                <div className="bg-white p-8 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-4">
                        <Image
                            src={DsaImage}    // use the imported image
                            alt="CRM"
                            className="w-[50%] mx-auto"
                            width={500}       // optional: natural width
                            height={500}      // optional: natural height
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 pl-2">
                            Dedicated server hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pr-[170px] pl-2 leading-relaxed">
                            At {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies, we offer dedicated server hosting tailored to meet your specific needs. This service provides a physical server exclusively assigned to your company, ensuring robust security and seamless scalability.
                            <br />
                            <br />
                            Dedicated servers are essential for hosting applications and websites, allowing users to access your services efficiently. Our hosting experts handle the assignment, management, and maintenance of server resources, guaranteeing smooth and reliable operations for your projects.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 md:pl-[170px]">
                            Container Hosting
                        </h2>
                        <p className="text-base font-primary mb-6 text-gray-900 md:pl-[170px] pr-4 leading-relaxed">
                            {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"}Technologies delivers dedicated server hosting solutions tailored to your business needs. Our service provides a physical server exclusively allocated to your company, ensuring enhanced security, optimal performance, and scalable growth.
                            <br />
                            <br />
                            Dedicated servers are essential for hosting applications and websites, enabling seamless user access to your services. Our team handles the entire process—from server allocation to ongoing management and maintenance—guaranteeing smooth and efficient operations for your projects.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image
                            src={ChImage}       // Use the imported image
                            alt="CMS"
                            className="w-[50%] mx-auto"
                        />
                    </div>
                </div>
                <div className="bg-white p-6  items-center">
                    <h2 className="text-xl font-primary font-semibold text-gray-900 mb-4 sm:pl-x6 md:px-[170px]">
                        Why Choose {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies?
                    </h2>
                    <p className="text-base font-primary mb-6 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed">
                        At{brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies, we are dedicated to driving your business forward with our cutting-edge DevOps solutions. Our services are designed to streamline operations, unlock new possibilities, and inspire innovation.
                        <br />
                        <br />
                        Ready to elevate your business with DevOps? Get in touch with us today and explore how our customized solutions can empower you to achieve your goals and maintain a competitive edge.
                        <br />
                        <br />
                        Let’s transform your business together. Contact us now!{" "}
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DevOps;
