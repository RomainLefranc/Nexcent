"use client";
import hero from "@/public/hero.png";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const carouselOptions: Options = {
  autoplay: true,
  pauseOnHover: true,
  resetProgress: true,
  pagination: true,
  arrows: false,
  type: "loop",
};

function Hero() {
  return (
    <div className="bg-[#F5F7FA] relative">
      <div className="mx-auto max-w-[1200px] py-24 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <Splide options={carouselOptions}>
          <SplideSlide>
            <div className="flex flex-col items-center md:flex-row gap-[50px] md:gap-[104px]">
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-[64px]  font-semibold leading-[76px] text-neutral-dark-gray">
                  Lessons and insights <br /> <span className="text-primary">from 8 years</span>
                </h1>
                <p className="mt-4 text-neutral-gray">Where to grow your business as a photographer: site or social media?</p>
                <button className="px-8 py-[14px] bg-primary rounded text-white mt-8">Register</button>
              </div>
              <Image src={hero} alt="hero" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="flex flex-col items-center md:flex-row gap-[50px] md:gap-[104px]">
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-[64px]  font-semibold leading-[76px] text-neutral-dark-gray">
                  Lessons and insights <br /> <span className="text-primary">from 8 years</span>
                </h1>
                <p className="mt-4 text-neutral-gray">Where to grow your business as a photographer: site or social media?</p>
                <button className="px-8 py-[14px] bg-primary rounded text-white mt-8">Register</button>
              </div>
              <Image src={hero} alt="hero" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Hero;
