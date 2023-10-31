import Image from "next/image";
import React from "react";
import achievement1 from "@/public/achievements-1.png";
import achievement2 from "@/public/achievements-2.png";
import achievement3 from "@/public/achievements-3.png";
import achievement4 from "@/public/achievements-4.png";

const ACHIEVEMENTS = [
  {
    icon: achievement1,
    title: "2,245,341",
    text: "Members",
  },
  {
    icon: achievement2,
    title: "46,328",
    text: "Clubs",
  },
  {
    icon: achievement3,
    title: "828,867",
    text: "Event Bookings",
  },
  {
    icon: achievement4,
    title: "1,926,436",
    text: "Payments",
  },
];

function Achievements() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-[1200px] my-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid grid-cols-1 items-center gap-4 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-center text-4xl font-semibold leading-[44px] sm:text-left">
            Helping a local <br />
            <span className="text-primary ">business reinvent itself</span>
          </h1>
          <p className="mt-2 text-center leading-6 text-gray-900 sm:text-left">We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-1 justify-center gap-x-[30px] gap-y-[40px] sm:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, i) => (
            <div className=" flex flex-col items-center gap-4 sm:flex-row" key={i}>
              <Image src={achievement.icon} alt="" className="h-12 w-12" />
              <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-[28px] font-bold leading-9 text-neutral-dark-gray">{achievement.title}</h1>
                <p className="leading-6 text-neutral-gray">{achievement.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
