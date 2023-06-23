"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoKasa from "../assets/logoKasa.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();

  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link href="/">
          {
            <Image
              src={logoKasa}
              alt="logo kasa"
              className=" w-36 md:w-52 items-center"
            ></Image>
          }
        </Link>
        <div>
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "text-xs ml-3 text-red md:text-lg md:ml-6 underline"
                : "text-xs ml-3 text-red md:text-lg md:ml-6"
            }
          >
            ACCUEIL
          </Link>
          <Link
            href="/about"
            className={
              currentRoute === "/about"
                ? "text-xs ml-3 text-red md:text-lg md:ml-6 underline"
                : "text-xs ml-3 text-red md:text-lg md:ml-6"
            }
          >
            À PROPOS
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
