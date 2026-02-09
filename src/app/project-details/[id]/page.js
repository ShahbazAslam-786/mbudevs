"use client";
import { usePathname } from "next/navigation";
import PortfolioDataList from "../../data/Portfoliodatalist";
import { PortfolioDetailedHeader } from "../../component/PortfolioDetailedHeader";
import { PortfolioDiscription } from "../../component/portfolioDiscription";
import { ImageModel } from "../../component/imageModel";
import { ProjectSlider } from "../../component/projectSlider";

const PortfolioDetailed = () => {
  const pathname = usePathname(); 
  const id = pathname.split("/").pop(); 
  const item = PortfolioDataList.find((p) => p.id.toString() === id);

  if (!item) {
    return <p className="mt-28 text-center">Project not found</p>;
  }

  return (
    <div className="portfolio-detailed  relative mt-10">
      <PortfolioDetailedHeader portfolioId={parseInt(id, 10)} />
      <div className="p-4 mt-8 md:p-16 ">
        <div className="flex flex-col gap-2 lg:flex-row md:justify-center min-[860px]:items-center lg:items-start lg:gap-12">
          <div className="flex-1">
            <ImageModel item={item} />
          </div>

          <div className="flex-1 min-[860px]:w-[730px] ">
            <PortfolioDiscription portfolioId={parseInt(id, 10)} />
          </div>
        </div>
        <div className="mt-8 min-[860px]:w-[730px] mx-auto lg:mx-0 lg:w-full">
          <ProjectSlider />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailed;
