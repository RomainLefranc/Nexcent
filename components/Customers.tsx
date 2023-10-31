import React from "react";
import Image from "next/image";
import Link from "next/link";

import customerlogo1 from "@/public/customers-logo-1.svg";
import customerlogo2 from "@/public/customers-logo-2.svg";
import customerlogo3 from "@/public/customers-logo-3.svg";
import customerlogo4 from "@/public/customers-logo-4.svg";
import customerlogo5 from "@/public/customers-logo-5.svg";
import customerlogo6 from "@/public/customers-logo-6.svg";

import rightIcon from "@/public/Right.svg";

const CUSTOMERS_LOGO = [customerlogo1, customerlogo2, customerlogo3, customerlogo4, customerlogo5, customerlogo6];

function Customers() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-[1200px] my-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 mx-auto py-8 flex md:gap-[78px] flex-col gap-[40px] md:flex-row items-center">
        <div className="h-[326px] w-[326px] flex-shrink-0 bg-customer bg-center rounded-lg" />
        <div>
          <p className="text-neutral-gray font-medium leading-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
            sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
            efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-primary text-xl font-semibold leading-7 pt-4">Tim Smith</p>
          <p className="pt-2 text-neutral-light-gray leading-6">British Dragon Boat Racing Association</p>
          <div className="flex gap-8 items-center flex-wrap pt-8">
            <div className=" flex flex-wrap gap-[11px]  lg:gap-[41px]">
              {CUSTOMERS_LOGO.map((image, i) => (
                <div className="w-12 h-12 flex items-center justify-center" key={i}>
                  <Image src={image} alt="" />
                </div>
              ))}
            </div>
            <Link href="/" className=" flex gap-2 items-center text-primary">
              Meet all customers
              <Image src={rightIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
