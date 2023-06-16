import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">KASA</Link>
        <div>
          <Link href="/">ACCUEIL</Link>
          <Link href="/about">À PROPOS</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
