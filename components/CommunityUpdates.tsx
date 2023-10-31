import React from "react";

import communityUpdateImg1 from "@/public/community-update-1.png";
import communityUpdateImg2 from "@/public/community-update-2.png";
import communityUpdateImg3 from "@/public/community-update-3.png";
import Image from "next/image";
import Link from "next/link";
import rightIcon from "@/public/Right.svg";

const CARDS = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: communityUpdateImg1,
  },
  {
    title: "What are your safeguarding responsibilities and how can you manage them?",
    image: communityUpdateImg2,
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: communityUpdateImg3,
  },
];

function CommunityUpdates() {
  return (
    <div className="max-w-[1200px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 mx-auto lg:pb-[95px] flex flex-col items-center">
      <h1 className="text-neutral-dark-gray text-4xl font-semibold leading-[44px]">Caring is the new marketing</h1>
      <p className="mt-2 max-w-[628px] text-neutral-gray leading-6 text-center">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their
        membership income and lot&apos;s more.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4 self-stretch ">
        {CARDS.map((card, i) => (
          <div className=" flex flex-col items-center w-[350px]" key={i}>
            <Image src={card.image} alt="" />
            <div className=" -mt-[85px] w-[317px] flex flex-col items-center gap-4 rounded-lg bg-[#F5F7FA] p-4 shadow-lg">
              <h2 className="text-center text-xl font-semibold leading-7 text-neutral-gray">{card.title}</h2>
              <Link href="/" className=" flex gap-2 items-center text-primary text-xl font-semibold leading-7 ">
                Read more
                <Image src={rightIcon} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityUpdates;
