import { Link } from "react-router";
import Header from "../components/Header";


const Home = () => {
  return (
    <section
      className=" min-h-screen"
      style={{
        backgroundImage: "url(/background-home-desktop.jpg)",
      }}
    >
      <Header />
      <main className="px-10 flex items-center justify-center h-[80vh]">
        <div className="w-full md:w-1/2 text-white max-w-xl">
          <h2 className="uppercase text-sm tracking-widest text-slate-300 mb-6">
            SO, YOU WANT TO TRAVEL TO
          </h2>

          {/* ASk about the h1 */}
          <h1 className="bellefair text-[clamp(3rem,9vw,9rem)] leading-none">
            SPACE
          </h1>
          <p className="mt-6 text-slate-300 text-sm md:text-base max-w-md">
            Let's face it; if you want to go to space, you might as well go to
            outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we'll give you a truly out of this world
            experience!
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Link to={"/destination"}>
            <button
              aria-label="Explore"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center text-black font-medium tracking-widest shadow-lg hover:scale-105 transition-transform"
            >
              EXPLORE
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Home;
