import Thumbnail from "./components/Thumbnail";
import backgroundImg from "./assets/background.png";
import Image from "next/image";
import data from "./data.json";

export default function Home() {
  return (
    <main>
      <section className="homeHeader">
        <Image src={backgroundImg} alt="" width={5} height={5} />
        <h1 className="homeHeader-title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="thumbContainer">
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