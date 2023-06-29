import Thumbnail from "./components/Thumbnail";
import backgroundImg from "./assets/background.png";
import Image from "next/image";
import data from "./data.json";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative flex items-center w-full my-4 overflow-hidden h-28 rounded-2xl md:justify-center md:h-56 md:my-8">
        <Image
          src={backgroundImg}
          alt="background image"
          className=" h-full w-full object-cover contrast-[.60]"
        />
        <h1 className="absolute leading-6 w-48 text-[1.5rem] text-white ml-5 md:text-5xl  md:w-auto md:ml-0">
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <section className="grid ">
        {data.map((accommodation) => {
          const { id, title, cover } = accommodation;

          return (
            <Thumbnail key={id} id={id} title={title} cover={cover}></Thumbnail>
          );
        })}
      </section>
    </main>
  );
}
