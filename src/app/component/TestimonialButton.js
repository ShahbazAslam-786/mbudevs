import { FaArrowRight } from "react-icons/fa6";
import { useBrand } from "../component/contextData";
import Link from "next/link";


export const TestimonialButton = () => {
      const {brand} = useBrand();
    return (
    <div>
      <div className="pl-[1rem] pr-[1rem]">
        <p className="text-gray-900 font-primary pb-[1.5rem] text-xl font-bold leading-[30px]">
          What they've said about us
        </p>
        <p className="w-[350px] text-gray-900 font-primary text-base leading-[30px]">
          Employers 100% satisfaction ratio and tremendous respect showcase the
          affection of employers towards {brand === "MBUDev" ? "MbuDevs" : "BizzDevs"}.
        </p>
      </div>
      <div className="w-200px mt-[3rem] pl-[1rem] pr-[1rem]">
        <Link href="/contact" target="_blank" className="bg-blue-600 font-primary w-[150px] pt-[10px] pb-[10px] pl-[30px] text-[14px] rounded-[4px] flex fex-row gap-4 items-center hover:shadow-lg">
          <span className="text-[white] text-base font-primary">Contact Us</span>
          <FaArrowRight color="white" />
        </Link>
      </div>
    </div>
  );
};
