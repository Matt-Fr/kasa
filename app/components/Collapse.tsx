"use client";
import React, { useState } from "react";
import chevron from "../assets/chevron.svg";
import Image from "next/image";

interface CollapseProps {
  title: string;
  info: React.ReactNode;
  titleSize?: string;
  paraSize?: string;
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  info,
  titleSize,
  paraSize,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <article className="w-full mt-5 overflow-hidden text-xs rounded-bl rounded-br md:mt-7 md:text-2xl bg-grey md:w-4/5">
      <header
        className="flex items-center justify-between px-2 py-1 text-white rounded cursor-pointer bg-red"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h4 className={`${titleSize}`}>{title}</h4>
        <button className="flex items-center justify-center w-5 h-full md:w-8">
          <Image
            src={chevron}
            alt="icon chevron"
            className={`transform ${
              showInfo
                ? "rotate-180 w-full transition-transform"
                : "w-full transition-transform"
            }`}
          ></Image>
        </button>
      </header>
      {showInfo ? <p className={`${paraSize} p-4 text-red`}>{info}</p> : ""}
    </article>
  );
};

export default Collapse;
