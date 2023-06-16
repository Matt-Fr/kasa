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
          <div className="infoAcc-container">
            <h2 className="infoAcc-container-title">{title}</h2>
            <span className="infoAcc-container-location">{location}</span>
            <div className="infoAcc-container-tagContainer">
              {tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="infoAcc-container-tagContainer-tag"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <div className="infoOwner-container">
              <span>{name}</span>
              <Image src={picture} alt={name} width={100} height={100} />
            </div>
            <div className="infoOwner-starsContainer"></div>
          </div>
        </section>
        <section className="collapseContainerAcc">
          <div className="collapseContainerAcc-div">
            <Collapse title="Description" info={description} />
          </div>
          <div className="collapseContainerAcc-div">
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
