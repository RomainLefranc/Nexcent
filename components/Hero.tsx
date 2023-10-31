import React from "react";

import hero from "@/public/hero.png";
import Image from "next/image";
import activeDot from "@/public/active-dot.svg";
import inactiveDot from "@/public/inactive-dot.svg";

function Hero() {
  return (
    <div className="bg-[#F5F7FA] relative">
      <div className="flex gap-2 absolute bottom-4 left-1/2 -translate-x-[50%]">
        <Image src={activeDot} alt="" />
        <Image src={inactiveDot} alt="" />
        <Image src={inactiveDot} alt="" />
      </div>
      <div className="mx-auto max-w-[1200px] py-24 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col items-center md:flex-row gap-[50px]  md:gap-[104px]">
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-[64px]  font-semibold leading-[76px] text-neutral-dark-gray">
            Lessons and insights <br /> <span className="text-primary">from 8 years</span>
          </h1>
          <p className="mt-4 text-neutral-gray">Where to grow your business as a photographer: site or social media?</p>
          <button className="px-8 py-[14px] bg-primary rounded text-white mt-8">Register</button>
        </div>
        <Image src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
