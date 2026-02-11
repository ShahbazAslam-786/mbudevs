"use client";

import { useRouter } from "next/navigation";
import PortfolioDataList from "../data/Portfoliodatalist";
import "../style/listData.css";
import { IoCopy, IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

export const ListPage = () => {
  const router = useRouter();

const handleImageClick = (item) => {
  console.log('Selected item:', item); // now works
  router.push(`/portfolio/${item.id}`);
  window.scrollTo({ top: 0, behavior: "auto" });
};



  return (
    <div className="rounded-[15px] bg-gray-100 overflow-hidden font-sans grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-3 gap-7 p-4">
      {PortfolioDataList.map((item) => (
        <div
          key={item.id}
          className="hover-img relative overflow-hidden rounded-[20px] p-4 shadow-lg border-[2px] border-gray-300 bg-white transition-all duration-300 hover:shadow-xl"
        >
          <div className="h-full flex flex-col">
            <div
              className="image-container group w-full h-[280px] relative overflow-hidden rounded-[20px] cursor-pointer"
              onClick={() => handleImageClick(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                fill
                sizes="(max-width: 549px) 90vw, (max-width: 1024px) 45vw, 33vw"
                style={{ objectFit: "cover", borderRadius: "20px" }}
                loading={item.src === "/assets/giftya-web-1.png" ? "eager" : "lazy"}
              />

              <div className="icon-overlay absolute inset-0 flex justify-center items-center gap-5 opacity-0 bg-black/70 z-10 transition-opacity duration-500 group-hover:opacity-100">
                <IoSearchSharp
                  className="icon p-3 bg-white text-blue-600 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white"
                  size={40}
                />
                <IoCopy
                  className="icon p-3 bg-white text-blue-600 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white"
                  size={40}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(item.title);
                  }}
                />
              </div>


              <div className="dataline-content absolute bottom-10 left-1/2 w-[90%] max-w-[316px] text-white text-center opacity-0 transform -translate-x-1/2 translate-y-full transition-all duration-500 z-20 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="data-line text-xl font-primary">
                  {item.dataLine}
                </span>
              </div>
            </div>

            <div className="py-4 flex-grow">
              <h3
                className="font-semibold font-primary text-gray-900 mb-2 text-xl cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => handleImageClick(item.id)}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-base font-primary line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
