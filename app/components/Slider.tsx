"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import chevron from "../assets/chevron.svg";

type SliderProps = {
  pictures: string[]; // An array of strings representing the image URLs
};

const Slider = ({ pictures }: SliderProps) => {
  const images = pictures;
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <div className="flex h-64 col-span-full md:h-[415px] overflow-hidden  rounded-2xl relative items-center justify-center">
      {images.map((picture, picindex) => {
        let position = " translate-x-full opacity-0";
        if (picindex === index) {
          position = " opacity-100";
        }
        if (
          picindex === index - 1 ||
          (index === 0 && picindex === images.length - 1)
        ) {
          position = "-translate-x-full opacity-0";
        }
        if (images.length === 1) {
          position = "z-50 ";
        }
        return (
          <Image
            fill
            src={picture}
            alt="apartment pic"
            key={picture}
            style={{ objectFit: "cover" }}
            className={` min-h-full min-w-full transition-all duration-300 ease-linear ${position} absolute`}
          />
        );
      })}
      <Image
        src={chevron}
        onClick={() => {
          setIndex(index - 1);
        }}
        alt="left arrow"
        className="absolute transform rotate-90 -translate-y-1/2 md:cursor-pointer md:w-12 left-4 top-1/2"
      ></Image>
      <Image
        onClick={() => {
          setIndex(index + 1);
        }}
        src={chevron}
        alt="right arrow"
        className="absolute transform -rotate-90 -translate-y-1/2 md:cursor-pointer md:w-12 right-4 top-1/2"
      ></Image>

      <span className="absolute z-[-10] md:z-10 text-white  bottom-3">{`${
        index + 1
      } / ${images.length}`}</span>
    </div>
  );
};

export default Slider;
