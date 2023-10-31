import Image from "next/image";
import React from "react";
import whiteLogo from "@/public/white-logo.png";

import socialIcon1 from "@/public/social-logo-1.png";
import socialIcon2 from "@/public/social-logo-2.png";
import socialIcon3 from "@/public/social-logo-3.png";
import socialIcon4 from "@/public/social-logo-4.png";
import Link from "next/link";
import sendIcon from "@/public/send.svg";

const SOCIALS = [
  {
    href: "/",
    icon: socialIcon1,
    alt: "instagram",
  },
  {
    href: "/",
    icon: socialIcon2,
    alt: "dribble",
  },
  {
    href: "/",
    icon: socialIcon3,
    alt: "twitter",
  },
  {
    href: "/",
    icon: socialIcon4,
    alt: "youtube",
  },
];

const COMPANY_LINKS = [
  {
    text: "About us",
    href: "/",
    alt: "",
  },
  {
    text: "Blog",
    href: "/",
  },
  {
    text: "Contact us",
    href: "/",
  },
  {
    text: "Pricing",
    href: "/",
  },
  {
    text: "Testimonials",
    href: "/",
  },
];

const SUPPORT_LINKS = [
  {
    text: "Help center",
    href: "/",
  },
  {
    text: "Terms of service",
    href: "/",
  },
  {
    text: "Legal",
    href: "/",
  },
  {
    text: "Privacy policy",
    href: "/",
  },
  {
    text: "Status",
    href: "/",
  },
];

function Footer() {
  return (
    <div className="bg-[#263238]">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 py-16 text-white">
        <div className="flex flex-col w-full gap-10 col-span-4 sm:col-span-2 lg:col-span-2">
          <Image src={whiteLogo} alt="" />
          <div className=" flex flex-col gap-2 text-sm leading-5">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map((social, i) => (
              <Link href={social.href} key={i}>
                <Image src={social.icon} alt={social.alt} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 lg:col-span-1 w-full">
          <h2 className="text-xl font-semibold leading-7">Company</h2>

          <div className="flex flex-col gap-3">
            {COMPANY_LINKS.map((link, i) => (
              <Link href={link.href} key={i} className="text-sm leading-5">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 lg:col-span-1 w-full">
          <h2 className="text-xl font-semibold leading-7">Support</h2>

          <div className="flex flex-col gap-3">
            {SUPPORT_LINKS.map((link, i) => (
              <Link href={link.href} key={i} className="text-sm leading-5">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 col-span-4 sm:col-span-2  lg:col-span-2 w-full">
          <h2 className="text-xl font-semibold leading-7">Stay up to date</h2>

          <div className="relative">
            <Image src={sendIcon} alt="" className="absolute right-3 top-1/2 -translate-y-[50%]" />
            <input type="email" placeholder="Your email address" className="flex flex-col gap-3 rounded-lg p-3 text-black text-sm lead w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
