"use client"

import Link from "next/link";

 const BusinessDevelopment = () => {
  return (
    <div className="bg-white min-h-screen pb-10 font-primary">
      <div className=" mt-16 relative w-full bg-gray-100 py-20 px-6 text-center ">
        <h1 className="text-xl font-bold font-primary text-gray-900 mb-6">What is Business Development?</h1>
        <p className="text-base max-w-3xl mx-auto font-primary text-gray-900 leading-relaxed">
          Business development is the process of identifying, strategizing, and executing opportunities that help businesses grow and expand. It encompasses a range of activities, including market research, strategic partnerships, sales growth, and customer relationship management.
        </p>
      </div>
      <div className="container mx-auto px-6 lg:px-20">

        <div className="bg-white py-16">
          <h2 className="text-xl font-primary font-semibold text-center text-gray-900 mb-10">Our Business Development Services</h2>
          <p className="text-base font-primary text-gray-900 text-center max-w-3xl mx-auto leading-relaxed mb-10">
            At MBUDevs, we offer comprehensive business development solutions tailored to your needs. Our services include market research, strategic partnerships, lead generation, brand positioning, and business model optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 base:grid-cols-3 gap-8 px-6 lg:px-16">
            {[
              { title: "Market Research & Analysis", desc: "Understanding market trends, customer behavior, and competitive analysis to make informed decisions and gain a competitive edge." },
              { title: "Lead Generation & Sales Strategy", desc: "Developing targeted strategies to attract potential clients, increase conversions, and drive revenue growth." },
              { title: "Strategic Partnerships & Networking", desc: "Identifying and establishing relationships with key partners, investors, and industry leaders to expand business opportunities." },
              { title: "Brand Positioning & Marketing", desc: "Enhancing your brand’s visibility through digital marketing, content creation, and social media strategies to reach the right audience." },
              { title: "Business Model Optimization", desc: "Assessing and improving your business model to maximize efficiency, profitability, and scalability." },
              { title: "Expansion & Market Entry Strategies", desc: "Helping businesses enter new markets, both locally and internationally, with well-defined strategies and risk management approaches." }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-semibold font-primary text-gray-900 mb-4">{service.title}</h2>
                <p className="text-base text-gray-900 font-primary leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full bg-gray-100 py-16 px-6 text-center rounded-lg shadow-lg mt-16">
          <h1 className="text-xl font-bold font-primary text-gray-900 mb-6">Get Started Today!</h1>
          <p className="text-base max-w-3xl mx-auto text-gray-900 font-primary leading-relaxed mb-6">
            If you’re looking to scale your business, enhance your market presence, and drive revenue growth, we are here to help. Contact us today for a free consultation and take the first step towards achieving your business goals!
          </p>
          <Link href="/contact">
            <button className="mt-8 px-6 py-2 text-lg md:text-base font-semibold  rounded-lg  hover:bg-blue-600 hover:text-white transition-all duration-500 text-blue-600 border-2  font-primary border-blue-600">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default BusinessDevelopment