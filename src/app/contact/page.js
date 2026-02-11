"use client"

import { useState, useRef } from "react"
import { Check, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link";


const EnquiryLayout = () => {
    const [success, setSuccess] = useState(false)
    const formRef = useRef(null)

    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        formData.append("access_key", "e1c9a289-1aaa-44d0-b30e-adb7fe238c26")

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json())

        if (res.success) {
            setSuccess(true)
            event.target.reset()
        }
    }

    const handleCloseSuccess = () => {
        setSuccess(false)
        if (formRef.current) {
            formRef.current.reset()
        }
    }

    const experts = [
        {
            name: "Shafique Chaudhry",
            linkedin: "https://www.linkedin.com/in/hazratshafique/",
            image: "/assets/shafik.jpeg", // direct public path
        },
        {
            name: "Umar Rasheed",
            linkedin: "https://www.linkedin.com/in/umar-rasheed/",
            image: "/assets/umar-bhai.jpg",
        },
        {
            name: "Ahmad",
            linkedin:
                "https://www.linkedin.com/in/muhammad-ahmad-935075222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "/assets/mahmad.jpeg",
        },
        {
            name: "Faizan",
            linkedin: "https://www.linkedin.com/in/faizanafzal54/",
            image: "/assets/faizan.jpeg",
        },
    ];

    const steps = [
        {
            number: "01",
            description:
                "Our experts will get in touch with you and dive into your requirements within 1 day, understanding your vision thoroughly.",
        },
        {
            number: "02",
            description:
                "Following our analysis, we&apos;ll provide a detailed project estimation and timeline. You&apos;ll receive a tailored proposal outlining our offerings, ensuring they align seamlessly with your requirements.",
        },
        {
            number: "03",
            description:
                "We&apos;ll finalize a contract complying with your local laws. Watch your idea transform into a tangible product, crafted with expertise.",
        },
    ]

    return (
        <div className="bg-white w-full mx-auto px-4 sm:px-36 lg:px-8 py-10 mt-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                {/* Enquiry Form */}
                <div className="w-full lg:w-1/2">
                    <div className="w-full p-6 bg-gray-100 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Enquiry Form</h2>
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            Looking to hire top-tier developers? Complete the form, and we&apos;ll reach out to you soon.
                        </p>
                        <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-black"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-black"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Project Description"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white min-h-[120px] mb-4"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-5 text-xl bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>

                {/* Team and Process */}
                <div className="w-full lg:w-1/2">
                    <div className="p-4 sm:p-6 bg-gray-100 shadow-lg rounded-lg">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">Meet Our Experts</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {experts.map((expert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg"
                                >
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        width={64}
                                        height={64}
                                        sizes="(max-width: 640px) 48px, 64px"
                                        className="rounded-full object-cover w-12 h-12 sm:w-16 sm:h-16"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{expert.name}</h3>
                                        <Link
                                            href={expert.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline flex items-center gap-1"
                                        >
                                            <Linkedin size={16} /> LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <h2 className="text-xl sm:text-2xl font-bold mb-4">What happens next?</h2>
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-center mb-4">
                                {/* Enforced perfect circle with flex-shrink-0 */}
                                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold text-lg ring-4 ring-black/20">
                                    {step.number}
                                </div>
                                <p className="text-gray-800 text-sm sm:text-base">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {success && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Check className="text-green-500 w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Success!</h3>
                        <p className="text-gray-700">Your enquiry has been submitted successfully.</p>
                        <button onClick={handleCloseSuccess} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">OK</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EnquiryLayout