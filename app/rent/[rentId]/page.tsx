"use client";
import React from "react";
import data from "../../data.json";
import { useParams } from "next/navigation";
import Collapse from "@/app/components/Collapse";
import Image from "next/image";

// Définition de l'interface Rent
interface Rent {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

const Page = () => {
  const { rentId } = useParams();

  const rent = data.find((singleAcc) => singleAcc.id === rentId) as
    | Rent
    | undefined;

  if (!rent) {
    return <main>ERROR</main>;
  } else {
    const {
      title,
      description,
      pictures,
      host: { name, picture },
      rating,
      location,
      tags,
      equipments,
    } = rent;

    return (
      <>
        <section>
          <div>
            <h2>{title}</h2>
            <span>{location}</span>
            <div>
              {tags.map((tag) => {
                return <span key={tag}>{tag}</span>;
              })}
            </div>
          </div>
          <div>
            <div>
              <span>{name}</span>
              <Image src={picture} alt={name} width={100} height={100} />
            </div>
            <div></div>
          </div>
        </section>
        <section>
          <div>
            <Collapse title="Description" info={description} />
          </div>
          <div>
            <Collapse
              title="Équipements"
              info={equipments.map((equipement) => {
                return <span key={equipement}>{equipement}</span>;
              })}
            />
          </div>
        </section>
      </>
    );
  }
};

export default Page;
