"use client"

import { useBrand } from "../component/contextData";
const WebDevelopmentServices = () => {
  const { brand } = useBrand();

  return (
    <div className="bg-white min-h-screen pb-4 font-primary">
      <div className="mx-auto">
        <div className="relative w-full bg-gray-100 px-10 pt-16">
          <div className="text-center py-16 px-4">
            <h1 className="text-xl text-gray-900 font-bold mb-6  font-primary">
              Code For The Next Level Development
            </h1>

            <p className="text-base max-w-4xl text-gray-900 mx-auto font-primary ">
              {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} is a highly reputable web development company based in Pakistan, driven by a team of skilled and passionate
              web designers who excel in their craft. We understand the challenges of site development and are dedicated to
              delivering top-notch solutions. Our commitment doesn’t end until the job is done. At {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"}, we bring your vision to life,
              offering customized websites along with reliable maintenance services to ensure optimal performance.
            </p>

          </div>
        </div>

        <div className="bg-white p-4 mt-12">
          <h2 className="text-xl font-primary font-semibold text-center text-gray-900 mb-6">
            Professional And Leading Web Design And Development Company
          </h2>
          <p className="text-base mb-6 text-gray-900 px-4 sm:px-16 lg:px-[170px] leading-relaxed  font-primary">
            {brand === "MBUDev" ? "MBUDevs" : "BizzDevs"} Technologies stands as a premier web design and development company in Pakistan, offering customized end-to-end solutions. Our services combine creativity, functionality, and adaptability to perfectly align with your unique requirements and preferences.
            <br />
            <br />
            We provide exceptional web design services aimed at enhancing brand visibility. Our dedication has earned us recognition as a top web design company, establishing a strong presence in the international market.
            <br />
            <br />
            Our experts deliver cost-effective web design and development solutions tailored to businesses of all sizes. We employ top talent to craft flexible, user-friendly, and cutting-edge websites. Elexoft Technologies stands out by deeply understanding customers' needs to provide exceptional results.
            <br />
            <span className="text-blue-500  font-primary hover:text-gray-900 cursor-pointer">strategic business approach</span> and specific needs to build a strong and competitive online presence.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
