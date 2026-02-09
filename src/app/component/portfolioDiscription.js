"use client"
import PortfolioDataList from "../data/Portfoliodatalist";

export const PortfolioDiscription = ({ portfolioId }) => {
  const portfolio = PortfolioDataList.find((item) => item.id === portfolioId);
  if (!portfolio) {
    return <div className="font-primary">Portfolio not found</div>;
  }
  const detail = portfolio.portfolioDescription;

  return (
    <div>
      <div>
  {/* Project Description Section */}
  <h4 className="border-b-[2px] text-xl border-gray-300 mb-[10px] pb-[4.5px] text-gray-900 ">
    <span className="border-b-[2px] font-semibold border-blue-700 pb-[5px] font-primary">
      Project Description
    </span>
  </h4>
  <div className="mb-[30px]">
    <div className="h-48 md:h-64 lg:h-72 overflow-auto flex items-center justify-center text-center px-4">
      <p className="text-gray-900 text-base font-primary">
        {detail.ProjectDescription}
      </p>
    </div>
  </div>

  {/* Tech Stack Section */}
  {detail.TechStack && (
    <>
      <h4 className="border-b-[2px] text-xl border-gray-300 mb-[10px] pb-[4.5px] text-gray-900">
        <span className="border-b-[2px] font-semibold border-blue-700 pb-[5px] font-primary">
          Tech Stack
        </span>
      </h4>
      <p className="mb-[30px] text-gray-900 text-base font-primary">
        {detail.TechStack}
      </p>
    </>
  )}
</div>

    </div>
  );
};
