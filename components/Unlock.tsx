import Image from "next/image";
import React from "react";
import unlock from "@/public/unlock-1.png";
function Unlock() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
      <div className=" flex flex-col lg:flex-row items-center gap-4">
        <Image src={unlock} alt="" className="lg:w-2/5" />
        <div className="lg:w-3/5 flex flex-col justify-center sm:justify-start sm:block">
          <h1 className="text-4xl font-semibold leading-[44px] text-neutral-dark-gray">The unseen of spending three years at Pixelgrade</h1>
          <p className="mt-4 text-sm leading-5 text-neutral-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam
            mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="px-8 py-[14px] bg-primary rounded text-white mt-8">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Unlock;
