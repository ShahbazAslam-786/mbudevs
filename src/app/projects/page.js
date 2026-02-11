"use client"

import React from 'react';
import "../style/Header.css";
import { ListPage } from '../component/ListPage';



 const Portfolio = () => {
  return (
    <>

      <div className="content pt-28 pb-10">
        <div className="sub-container pr-[15px] pl-[15px] mx-auto md:pr-12 md:pl-12 lg:pr-16 lg:pl-16 mb-[50px] px-[50px] ">
          <h1 className='leading-[30px] text-center mb-[15px] text-xl font-semibold text-gray-900 font-primary'> Projects</h1>
          <p className='text-gray-900 text-base font-primary leading-[22px] text-justify'>
            Many modern businesses that rely on technology often face the challenge of finding a trustworthy IT partner. At MBUDevs Technologies, our portfolio, client testimonials, and recommendation letters speak for the quality of our work. As the demand for digital solutions grows, the market is filled with companies offering website development, landing pages, online stores, and mobile applications.

            A reputable IT company approaches website and app development with a clear focus on the client’s business objectives. It’s not just about completing a project but delivering a solution that drives results.

            Whether it’s a website, landing page, or mobile app, each tool should serve a specific purpose—boosting sales, attracting new customers, and enhancing brand visibility and loyalty.

          </p>
        </div>

        <div className="sub-container pr-[15px] pl-[15px] font-primary mx-auto md:pr-12 md:pl-12 lg:pr-16 lg:pl-16 mb-[50px] px-[50px] ">
          <ListPage />
        </div>
        <div className="sub-container  xl:mb-[50px] xl:px-[50px] mx-auto">
        </div>
      </div>

    </>
  )
}

export default Portfolio