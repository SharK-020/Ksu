import pic1 from "../../assets/Banner/banner3.webp";
import pic2 from "../../assets/Banner/banner4.webp";
import pic3 from "../../assets/Banner/banner5.webp";

const CollageBanner = () => {
  return (
    <div className="relative transition-all duration-300">
      {/*Background */}
      <div
        className="absolute inset-6 md:inset-10 lg:inset-14 lg:h-[80%]
       bg-teal-200 -z-40"
      ></div>

      <div className="flex items-center gap-2 lg:gap-4 ">
        {/*Heading */}
        <div className="pl-4 md:pl-10 hidden md:block">
          {/*TO-DO: insert nice font here */}
          <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl">
            Life At Ksu
          </h1>
        </div>

        {/*collage*/}
        <div className="flex flex-1 gap-1 md:gap-2 p-4 md:p-8">
          <div
            className="flex flex-col items-center justify-center"
          >
            <h1 className="block md:hidden font-extrabold text-2xl md:text-4xl lg:text-5xl
            p-4">
              Life At Ksu
            </h1>
            <img src={pic1} alt="" loading="lazy"
            className="hover:scale-105
            transition duration-300" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <img
              src={pic2}
              alt=""
              loading="lazy"
              className="hover:scale-105
        transition duration-300"
            />
            <img
              src={pic3}
              alt=""
              loading="lazy"
              className="hover:scale-105
        transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageBanner;
