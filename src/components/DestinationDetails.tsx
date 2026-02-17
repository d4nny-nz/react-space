
import DestinationsSubHeader from './DestinationsSubHeader';

type TDestionationDetails = {
    image: string;
    title: string;
    description: string;
    distance: string;
    time: string;
}

const DestinationDetails = ({image, title, description, distance, time }: TDestionationDetails) => {
  return (
    <div className="flex justify-center pt-15 px-15">
      <section className=" w-full">
        <img src={image} alt="" className="w-[80%] hover:saturate-200 transition duration-5000 ease-in-out hover:rotate-180" />
      </section>

      <section className=" w-full">
        <DestinationsSubHeader />
        <h2 className=" text-5xl pb-6 mt-6">{title}</h2>
        <p className="mb-6">
          {description}
        </p>
        <hr className=" border-white/60 mb-6" />
        <div className="flex items-center gap-30">
          <section>
            <h4 className=" text-xs text-white/60">AVG. DISTANCE</h4>
            <p className=" text-3xl">{distance}</p>
          </section>
          <section>
            <h4 className=" text-xs text-white/60">EST. TRAVEL TIME</h4>
            <p className=" text-3xlx">{time}</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default DestinationDetails