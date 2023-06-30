import Image from "next/image";
import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-white bg-black h-52">
      <Image
        src={logoFooter}
        alt="logo kasa footer"
        className="items-center w-32 m-6 md:w-52"
      ></Image>
      <span className="text-xs md:text-2xl ">
        © 2023 Kasa. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
