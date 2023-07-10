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
    <Link
      href={`/rent/${id}`}
      className="relative flex items-center justify-center h-64 overflow-hidden transition-transform rounded-xl md:hover:scale-105"
    >
      <Image
        width={300}
        height={250}
        src={cover}
        alt={title}
        className="object-cover contrast-[.60] min-w-full min-h-full"
      />
      <h3 className="absolute text-lg text-white bottom-5 left-5 right-5">
        {title}
      </h3>
    </Link>
  );
};

export default Thumbnail;
