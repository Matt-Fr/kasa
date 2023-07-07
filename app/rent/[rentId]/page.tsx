"use client";
import React from "react";
import data from "../../data.json";
import { useParams } from "next/navigation";
import Collapse from "@/app/components/Collapse";
import Image from "next/image";
import Rating from "@/app/components/Rating";

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
  rating: number;
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
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
          <div className="col-span-full">carrousel</div>
          <section>
            <h2 className="text-lg md:text-4xl text-red">{title}</h2>
            <span className="text-sm text-red md:text-lg">{location}</span>

            <div className="flex flex-wrap">
              {tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="px-6 py-1 mt-3 mr-3 text-xs text-white rounded md:text-sm bg-red whitespace-nowrap"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </section>
          <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-end ">
            <div className="flex flex-wrap items-center ">
              <span className="w-16 mr-2 text-xs text-right md:w-24 md:text-lg text-red">
                {name}
              </span>

              <Image
                src={picture}
                alt={name}
                width={128}
                height={128}
                className="w-8 rounded-full md:w-16"
              />
            </div>

            <Rating rating={rating} />
          </div>

          <Collapse
            title="Description"
            info={description}
            paraSize="md:text-lg"
            titleSize="md:text-lg"
          />

          <Collapse
            paraSize="md:text-lg"
            titleSize="md:text-lg"
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
