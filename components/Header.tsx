import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#F5F7FA] ">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="flex relative items-center justify-center h-[84px]">
          <Image src={logo} alt="logo" className="absolute left-0" />
          <div className="gap-[50px] hidden xl:flex">
            <Link href="/">Home</Link>
            <Link href="/">Service</Link>
            <Link href="/">About</Link>
            <Link href="/">Product</Link>
            <Link href="/">Testimonial</Link>
            <Link href="/">FAQ</Link>
          </div>
          <div className="flex gap-[14px] absolute right-0 ">
            <button className="px-5 py-[10px] text-primary hover:bg-[#F5F7FA] rounded-md">Login</button>
            <button className="px-5 py-[10px] text-white bg-primary rounded-md">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
