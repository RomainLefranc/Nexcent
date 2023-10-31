import React from "react";
import clientLogo1 from "@/public/client-logo-1.png";
import clientLogo2 from "@/public/client-logo-2.png";
import clientLogo3 from "@/public/client-logo-3.png";
import clientLogo4 from "@/public/client-logo-4.png";
import clientLogo5 from "@/public/client-logo-5.png";
import clientLogo6 from "@/public/client-logo-6.png";
import clientLogo7 from "@/public/client-logo-7.png";
import Image from "next/image";

const IMAGES = [clientLogo1, clientLogo3, clientLogo2, clientLogo4, clientLogo5, clientLogo6, clientLogo7];

function Clients() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col justify-center text-center py-10">
      <h1 className="text-neutral-dark-gray text-[36px] leading-[44px]">Our Clients</h1>
      <p className="mt-2 text-neutral-gray leading-6">We have been working with some Fortune 500+ clients</p>
      <div className="flex mt-4 sm:justify-between  justify-center gap-4 sm:gap-0 lg:gap-16 items-center flex-wrap h-[98px]">
        {IMAGES.map((image, i) => (
          <div className="h-12 w-12 flex items-center justify-center flex-shrink-0" key={i}>
            <Image src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
