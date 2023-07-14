import promo from "../../assets/promo1.webp";
import room from "../../assets/hall1.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

const Campus = () => {
  //routing to life@ksu
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/life");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="bg-[#082F49] grid grid-cols-2">
        <div
          className="place-self-center p-4 text-left text-4xl
        md:text-[4rem] leading-tight text-gray-100 font-extrabold"
        >
          <h1 className="">Campus</h1>
          <h1 className="">And</h1>
          <h1 className="">Facilities</h1>
        </div>
        <img
          src={promo}
          alt="promo"
          className="place-self-end w-full"
          width={400}
          height={700}
        />
      </div>
      <div className="flex flex-col md:flex-row">

      <div className="flex ">
          <img
            src={room}
            height={1000}
            width={500}
            alt="hall"
            className="w-full"
          />
        </div>
        <article className="w-full flex flex-col">
          <p className="text-justify text-gray-900
           bg-[#ffe449] p-8 font-medium">
            The University is located at Samdur, Tadong, Gangtok, East Sikkim.
            The University has a sprawling campus of 75 acres of land. The
            University has a well-equipped library, laboratories, classrooms,
            seminar halls, auditorium, conference halls, hostels, guest house,
            canteen, and other facilities
          </p>
          <div className="bg-[#00b3b4] text-white flex flex-col
           items-center justify-center p-8 h-full">
            <span className="flex cursor-pointer space-x-2 justify-start
             items-center font-semibold text-xl hover:-translate-y-2 transition-transform
             duration-500">
            <button className=""
            onClick={handleClick}
            >Explore all facilities</button>
            <ArrowRightIcon className="h-5 w-5 " />
            </span>

          </div>
        </article>

      </div>
    </div>
  );
};

export default Campus;
