import Thumbnail from "./components/Thumbnail";
import backgroundImg from "./assets/background.png";
import Image from "next/image";
import data from "./data.json";

export default function Home() {
  return (
    <>
      <section className="relative flex items-center w-full mt-6 overflow-hidden h-28 rounded-2xl sm:justify-center md:h-56 md:mt-8">
        <Image
          src={backgroundImg}
          alt="background image"
          className=" h-full w-full object-cover contrast-[.60]"
        />
        <h1 className="absolute leading-6 w-[13.4rem] text-[1.5rem] text-white ml-5 md:text-5xl  sm:w-auto sm:ml-0">
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <section className="grid grid-cols-1 gap-6 my-6 md:my-8 sm:grid-cols-2 md:bg-grey md:p-8 md:gap-8 rounded-2xl lg:grid-cols-3">
        {data.map((accommodation) => {
          const { id, title, cover } = accommodation;

          return (
            <Thumbnail key={id} id={id} title={title} cover={cover}></Thumbnail>
          );
        })}
      </section>
    </>
  );
}
