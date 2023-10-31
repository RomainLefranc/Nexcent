import React from "react";
import rightIcon from "@/public/white-right.svg";
import Image from "next/image";

function Demo() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-8 flex flex-col items-center gap-8">
        <h1 className="text-[32px] leading-[35px] lg:text-[64px] font-semibold lg:leading-[76px] text-[#263238] max-w-[887px] text-center">Pellentesque suscipit fringilla libero eu.</h1>
        <button className="px-8 py-[14px] flex gap-2 items-center rounded text-white bg-primary ">
          Get a Demo <Image src={rightIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Demo;
