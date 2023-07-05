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
        <section className="grid-cols-1 ">
          <h2 className="text-lg md:text-4xl text-red">{title}</h2>
          <span className="text-sm text-red md:text-lg">{location}</span>
          <div>
            {tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className="px-6 py-1 mr-3 text-xs text-white rounded md:text-sm bg-red"
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div>
            <span className="text-xs md:text-lg text-red">{name}</span>

            <Image
              src={picture}
              alt={name}
              width={100}
              height={100}
              className="w-8 rounded-full md:w-16"
            />
          </div>

          <Collapse title="Description" info={description} />

          <Collapse
            title="Équipements"
            info={equipments.map((equipement) => {
              return (
                <span key={equipement}>
                  {equipement}
                  <br />
                </span>
              );
            })}
          />
        </section>
      </>
    );
  }
};

export default Page;
