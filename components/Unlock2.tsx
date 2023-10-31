import Image from "next/image";
import React from "react";
import unlock from "@/public/unlock-2.png";

function Unlock2() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
      <div className=" flex flex-col lg:flex-row items-center gap-4">
        <Image src={unlock} alt="" className="lg:w-2/5" />
        <div className="lg:w-3/5 flex flex-col justify-center sm:justify-start sm:block">
          <h1 className="text-4xl font-semibold leading-[44px] text-neutral-dark-gray">How to design your site footer like we did</h1>
          <p className="mt-4 text-sm leading-5 text-neutral-gray">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget
            nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className="px-8 py-[14px] bg-primary rounded text-white mt-8">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Unlock2;
