import Image from "next/image";
import React from "react";
import bgAbout from "../assets/bgAbout.png";
import chevron from "../assets/chevron.svg";

const Slider = () => {
  return (
    <div className="flex h-64 col-span-full md:h-[415px]  overflow-hidden rounded-2xl relative">
      <Image src={bgAbout} alt="a pic" className="object-cover w-full "></Image>
      <Image
        src={chevron}
        alt="left arrow"
        className="absolute transform rotate-90 -translate-y-1/2 cursor-pointer md:w-12 left-4 top-1/2"
      ></Image>
      <Image
        src={chevron}
        alt="right arrow"
        className="absolute transform -rotate-90 -translate-y-1/2 cursor-pointer md:w-12 right-4 top-1/2"
      ></Image>
    </div>
  );
};

export default Slider;
