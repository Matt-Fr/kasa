"use client";
import React, { useState } from "react";
import chevron from "../assets/chevron.svg";
import Image from "next/image";

interface CollapseProps {
  title: string;
  info: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <article className="mt-5 text-xs md:mt-7 md:text-2xl">
      <header className="flex items-center justify-between px-2 py-1 text-white rounded bg-red">
        <h4 className="">{title}</h4>
        <button
          className="flex items-center justify-center w-5 h-full md:w-8"
          onClick={() => setShowInfo(!showInfo)}
        >
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
      <p>{info}</p>
    </article>
  );
};

export default Collapse;
