import React from "react";
import communityIcon1 from "@/public/community-icon-1.png";
import communityIcon2 from "@/public/community-icon-2.png";
import communityIcon3 from "@/public/community-icon-3.png";
import communityIconShadow from "@/public/community-icon-shadow.png";
import Image from "next/image";

const CARDS = [
  {
    icon: communityIcon1,
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: communityIcon2,
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: communityIcon3,
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Community() {
  return (
    <div className="max-w-[1200px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 mx-auto flex flex-col justify-center items-center text-center pb-[42px]">
      <h1 className="max-w-[542px] text-4xl leading-[44px] font-semibold text-neutral-dark-gray">Manage your entire community in a single system</h1>
      <p className="mt-2 leading-6  text-neutral-gray">Who is Nextcent suitable for?</p>
      <div className="mt-4 flex flex-col sm:flex-row items-center flex-wrap justify-center lg:justify-between gap-4 sm:gap-8 md:gap-10 lg:gap-0 self-stretch">
        {CARDS.map((card, i) => (
          <div className="py-6 px-8 w-full sm:w-[250px] lg:w-[300px] flex flex-col items-center shadow-lg rounded-lg flex-shrink-0" key={i}>
            <div className="relative">
              <Image src={communityIconShadow} className="absolute -bottom-[8px] -right-[17px]" alt="" />
              <Image className="relative" src={card.icon} alt="" />
            </div>
            <h2 className="mt-4 text-[28px] leading-9 font-bold text-neutral-dark-gray">{card.title}</h2>
            <p className="mt-2 text-sm leading-5 text-neutral-gray">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
