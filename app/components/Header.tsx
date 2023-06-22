import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoKasa from "../assets/logoKasa.svg";
const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link href="/">
          {
            <Image
              src={logoKasa}
              alt="logo kasa"
              className="  w-36 items-center"
            ></Image>
          }
        </Link>
        <div>
          <Link href="/">ACCUEIL</Link>
          <Link href="/about">À PROPOS</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
