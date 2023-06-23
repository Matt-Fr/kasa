import Thumbnail from "./components/Thumbnail";
import backgroundImg from "./assets/background.png";
import Image from "next/image";
import data from "./data.json";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className=" h-28 w-full relative flex items-center rounded-2xl overflow-hidden my-4">
        <Image
          src={backgroundImg}
          alt="background image"
          className=" h-full w-full object-cover contrast-[.60]"
        />
        <h1 className="absolute leading-6 w-48 text-[1.5rem] inset font text-white ml-5">
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <section className="">
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
