import Header from "../components/Header";
import { useEffect, useState } from "react";

type TCrewData = {
  name: string;
  role: string;
  bio: string;
  images: { png: string };
};

const Crew = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [crewData, setCrewData] = useState<TCrewData[]>([]);

  const fetchCrewData = async () => {
    setLoading(true);

    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      const crew = data.crew;

      setCrewData(crew);
    } catch (error) {
      alert("Error occured while reading file.");
      setCrewData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrewData();
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev + 1 > 3) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className=" min-h-screen overflow-y-auto text-white bg-cover"
      style={{
        backgroundImage: "url('/background-crew-desktop.jpg')",
      }}
    >
      <Header />
      <main className=" h-[80vh] pt-15 px-15">
        <h1>02 MEET YOUR CREW</h1>

        {!loading && crewData.length > 0 && (
          <section className=" flex gap-5">
            <div className=" w-full mt-10">
              <h3 className=" font-secondary uppercase text-5xl opacity-60 my-6 tracking-widest">
                {crewData[current].role}
              </h3>
              <h2 className=" font-secondary uppercase text-7xl tracking-wide">
                {crewData[current].name}
              </h2>
              <p className=" text-2l pr-40 my-5 leading-8">
                {crewData[current].bio}
              </p>

              <section className=" flex gap-3 my-15">
                <button
                  className={`${current !== 0 && "opacity-20"} w-4 h-4 rounded-full bg-white cursor-pointer`}
                  onClick={() => setCurrent(0)}
                ></button>
                <button
                  className={`${current !== 1 && "opacity-20"} w-4 h-4 rounded-full bg-white cursor-pointer`}
                  onClick={() => setCurrent(1)}
                ></button>
                <button
                  className={`${current !== 2 && "opacity-20"} w-4 h-4 rounded-full bg-white cursor-pointer`}
                  onClick={() => setCurrent(2)}
                ></button>
                <button
                  className={`${current !== 3 && "opacity-20"} w-4 h-4 rounded-full bg-white cursor-pointer`}
                  onClick={() => setCurrent(3)}
                ></button>
              </section>
            </div>
            <div className=" w-full">
              <img
                src={crewData[current].images.png}
                alt=""
                className=" w-full h-[80vh] object-contain"
              />
            </div>
          </section>
        )}
      </main>
    </section>
  );
};

export default Crew;
