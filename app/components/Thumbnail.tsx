import autoprefixer from "autoprefixer";
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
    <Link href={`/rent/${id}`}>
      <article>
        <Image src={cover} alt={title} width={200} height={100} />
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default Thumbnail;
