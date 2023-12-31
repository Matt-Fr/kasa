import React from "react";
import Collapse from "../components/Collapse";
import Image from "next/image";
import bgAbout from "../assets/bgAbout.png";

const page = () => {
  return (
    <>
      <section className="w-full overflow-hidden rounded-2xl">
        <Image
          alt="backgroung image"
          src={bgAbout}
          className="object-cover w-full h-56"
          placeholder="blur"
        ></Image>
      </section>
      <section className="flex flex-col items-center">
        <Collapse
          title="Fiabilité"
          info="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          margin="mt-5 md:mt-7 md:w-4/5"
        />
        <Collapse
          margin="mt-5 md:mt-7 md:w-4/5"
          title="Respect"
          info="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          margin="mt-5 md:mt-7 md:w-4/5"
          title="Service"
          info="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          margin="mt-5 md:mt-7 md:w-4/5"
          title="Sécurité"
          info="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </>
  );
};

export default page;
