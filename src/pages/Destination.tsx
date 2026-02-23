import {  Outlet } from "react-router"
import Header from "../components/Header";

const Destination = () => {
  return (
    <section
      className=" min-h-screen overflow-y-auto text-white bg-cover"
      style={{
        backgroundImage: "url('/background-destination-desktop.jpg')",
      }}
    >
      <Header />
      <main className=" h-[80vh] pt-15 px-15">
        <h1>01 PICK YOUR DESTINATION</h1>
        

        <section>
          <Outlet/>

        </section>
      </main>
    </section>
  );
}

export default Destination