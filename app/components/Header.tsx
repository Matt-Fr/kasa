"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoKasa from "../assets/logoKasa.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();

  return (
    <header className="px-5 pt-5 md:px-7 md:pt-7 lg:px-10">
      <nav className="flex items-center justify-between">
        <Link href="/">
          {
            <Image
              src={logoKasa}
              alt="logo kasa"
              className="items-center w-36 md:w-52"
            ></Image>
          }
        </Link>
        <div>
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "text-xs ml-3 text-red hover:underline md:text-lg md:ml-6 underline"
                : "text-xs ml-3 hover:underline text-red md:text-lg md:ml-6"
            }
          >
            ACCUEIL
          </Link>
          <Link
            href="/about"
            className={
              currentRoute === "/about"
                ? "text-xs ml-3 hover:underline text-red md:text-lg md:ml-6 underline"
                : "text-xs ml-3 hover:underline text-red md:text-lg md:ml-6"
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
