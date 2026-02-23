import { useEffect, useState } from "react";
import Header from "../components/Header";

type TTechData = {
  description: string;
  name: string;
  images: { portrait: string };
};

const Technology = () => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [techData, setTechData] = useState<TTechData[]>([]);

  const fetchTechData = async () => {
    setLoading(true);

    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      const tech = data.technology;

      setTechData(tech);
    } catch (error) {
      alert("Error ocurred while reading file.");
      setTechData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechData();
  }, []);

  return (
    <section
      className=" min-h-screen overflow-y-auto text-white bg-cover"
      style={{
        backgroundImage: "url('/background-technology-desktop.jpg')",
      }}
    >
      <Header />
      <main className=" h-[80vh] pt-15 px-15">
        <h1>03 SPACE LAUNCH 101</h1>

        {!loading && techData.length > 0 && (
          <div className=" flex ml-10">
            <section className=" flex gap-8 max-w-2xl mt-15">
              <div className=" flex flex-col gap-7 pt-5">
                <button
                  className={`${current !== 0 && " border-2 border-white text-white"} ${current === 0 && " bg-white"} w-18 h-18 rounded-full cursor-pointer  text-black p-0.5`}
                  onClick={() => setCurrent(0)}
                >
                  1
                </button>
                <button
                  className={`${current !== 1 && "bg-none border-2 border-white text-white"}${current === 1 && " bg-white  text-black"} w-18 h-18 rounded-full  cursor-pointer  p-0.5`}
                  onClick={() => setCurrent(1)}
                >
                  2
                </button>
                <button
                  className={`${current !== 2 && " bg-none border-2 border-white text-white"}${current === 2 && " bg-white  text-black"} w-18 h-18 rounded-full  cursor-pointer  p-0.5`}
                  onClick={() => setCurrent(2)}
                >
                  3
                </button>
              </div>
              <div className=" w-full p-6">
                <h4 className=" font-secondary uppercase text-xl opacity-80">
                  THE TERMINOLOGY...
                </h4>
                <h2 className=" font-secondary uppercase tracking-wide text-5xl mt-3">
                  {techData[current].name}
                </h2>
                <p className=" pt-5 leading-7">
                  {techData[current].description}
                </p>
              </div>
            </section>
            <section className=" w-full ">
              <img
                src={techData[current].images.portrait}
                alt=""
                className=" w-full max-w-150 h-[80vh] object-cover  "
              />
            </section>
          </div>
        )}
      </main>
    </section>
  );
};

export default Technology;
