import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ThumbnailProps {
  id: string;
  title: string;
  cover: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ id, title, cover }) => {
  return (
    <Link href={`/rent/${id}`} className="relative flex h-64 border-2">
      <Image src={cover} alt={title} fill className="object-cover " />
      <h3 className="absolute text-lg text-white">{title}</h3>
    </Link>
  );
};

export default Thumbnail;
