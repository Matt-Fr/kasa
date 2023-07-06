import React from "react";
import starFull from "../assets/starfull.svg";
import starEmpty from "../assets/starempty.svg";
import Image from "next/image";

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;
  const starArray = Array(5).fill(0); // Create an array of length 5

  return (
    <div>
      {starArray.map((_, index) => {
        if (index < fullStars) {
          return <Image key={index} src={starFull} alt="Full Star" />;
        } else if (index < fullStars + emptyStars) {
          return <Image key={index} src={starEmpty} alt="Empty Star" />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Rating;
