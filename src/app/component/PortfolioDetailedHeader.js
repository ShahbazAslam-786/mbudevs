"use client"

import PortfolioDataList from "../data/Portfoliodatalist";

export const PortfolioDetailedHeader = ({ portfolioId }) => {
  const portfolio = PortfolioDataList.find((item) => item.id === portfolioId);

  if (!portfolio) {
    return <div className="font-primary">Portfolio not found</div>;
  }

  return (
    <div
      className=""
    >
      <div className="containerd pr-4 pl-4 mx-auto lg:pr-16 lg:pl-16">
        <div className="row flex flex-col gap-4 lg:flex-row lg:justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-center font-primary font-bold text-4xl text-white lg:w-[500px] break-words"
              style={{ wordBreak: "break-word", whiteSpace: "normal" }}
            >
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
