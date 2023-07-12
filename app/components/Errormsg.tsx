import Link from "next/link";
import React from "react";

const Errormsg = () => {
  return (
    <section className="flex flex-col items-center min-h-[70vh] text-red justify-evenly ">
      <div className="flex flex-col items-center">
        <h1 className=" text-8xl md:text-[288px] ">404</h1>
        <span className="text-base md:text-4xl">
          Oups! La page que vous demandez n&apos;existe pas.
        </span>
      </div>
      <Link href="/" className="text-sm underline md:text-lg">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
};

export default Errormsg;
