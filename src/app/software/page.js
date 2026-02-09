
"use client"

import Link from "next/link";

const SoftwareQuailtyInsurance = () => {
    const testingServices = [
        {
            title: "Functional Testing",
            description: "Ensure every feature works as intended with systematic verification against requirements.",
            icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Performance Testing",
            description: "Validate speed, responsiveness and stability under various workload conditions.",
            icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Security Testing",
            description: "Identify vulnerabilities and protect your application from potential threats.",
            icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        }
    ];

    const testingProcess = [
        {
            title: "Requirement Analysis",
            description: "We analyze your requirements and develop a comprehensive test strategy"
        },
        {
            title: "Test Planning",
            description: "Detailed test plans are created with clear objectives and timelines"
        },
        {
            title: "Test Execution",
            description: "Systematic testing with real-time defect tracking and reporting"
        },
        {
            title: "Quality Certification",
            description: "Final verification and quality sign-off before deployment"
        }
    ];

    const benefits = [
        {
            title: "Expert QA Team",
            description: "Certified professionals with industry-specific expertise",
            icon: "👨‍💻"
        },
        {
            title: "Comprehensive Coverage",
            description: "End-to-end testing for all application types and platforms",
            icon: "🔍"
        },
        {
            title: "Detailed Reporting",
            description: "Actionable insights with clear metrics and defect classification",
            icon: "📊"
        },
        {
            title: "Cost Efficiency",
            description: "Early defect detection reduces development costs by 40%+",
            icon: "💰"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-primary">
            {/* Hero Section */}
            <section className="bg-gray-100 pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                    </div>
                    <h2 className="text-xl text-gray-900 font-primary font-bold mb-3 font-primary">
                        Precision Software Testing Services
                    </h2>
                    <p className="text-base font-primary text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We deliver flawless digital experiences through comprehensive quality assurance solutions tailored to your business requirements.
                    </p>
                    <div className="flex justify-center mt-12">
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-2 text-base md:text-lg font-semibold rounded-lg bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-500 text-white border-2 font-primary border-blue-600"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">Comprehensive Testing Solutions</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto font-primary">
                        Our specialized testing services ensure your software meets the highest quality standards
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testingServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-t-4 border-blue-600 flex flex-col items-center text-center"
                        >
                            <div className="mb-5">
                                {service.icon}
                            </div>
                            <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">{service.title}</h2>
                            <p className="text-gray-600 text-base font-primary">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">Our Quality Assurance Process</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto font-primary text-base">
                            A structured methodology ensuring comprehensive test coverage and maximum efficiency
                        </p>
                    </div>

                    <div className="space-y-8">
                        {testingProcess.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row">
                                <div className="flex md:flex-col items-center md:items-start mb-4 md:mb-0 md:mr-8">
                                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-medium text-lg shrink-0">
                                        {index + 1}
                                    </div>
                                    {index < testingProcess.length - 1 && (
                                        <div className="hidden md:block h-16 w-px bg-gray-200 mx-auto my-2"></div>
                                    )}
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg flex-1">
                                    <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">{step.title}</h2>
                                    <p className="text-gray-600 text-base font-primary">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">Why Choose Our Testing Services</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl font-primary text-base mx-auto">
                            We deliver exceptional value through our quality assurance expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <div className="text-3xl mb-4">{benefit.icon}</div>
                                <h2 className="text-xl text-gray-900 font-bold mb-3 font-primary">{benefit.title}</h2>
                                <p className="text-gray-600 text-base font-primary">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareQuailtyInsurance;