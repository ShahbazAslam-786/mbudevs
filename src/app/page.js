import React, { useContext } from "react";

import { LetsWorkHome } from "../app/component/LetsWorkHome";
import NoiseFitCaseStudy from "../app/component/NoiseFitCaseStudy";
import DomainsGrid from "../app/component/DomainsGrid";
import FeaturedProject from "../app/component/FeaturedProject";
import MVPSection from "../app/component/MVPSection";
import EnquiryForm from "../app/component/EnquiryForm";
import TechExpertise from "../app/component/TechExpertise";
import { Sameto } from "./component/Sameto";

const Home = () => {

  return (
    <div className="pt-20">
      <LetsWorkHome />
      <NoiseFitCaseStudy />
      <DomainsGrid />
      <FeaturedProject />
      <Sameto />
      <MVPSection />
      <TechExpertise />
      <EnquiryForm padding="p-4 md:p-8" />
    </div>
  );
};

export default Home;
