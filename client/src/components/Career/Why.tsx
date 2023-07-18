import logo from "../../assets/logo.webp";

const Why = () => {
  return (
    <div className="flex flex-col md:flex-row shadow-sm lg:px-28">
      {/* Mobile view */}
      <div
        className="flex space-x-4 p-4 items-center justify-center
        md:hidden"
      >
        <img src={logo} alt="KSU_logo" width="100" height="100" />
        <div className="text-3xl font-extrabold">
          <h1 className="">
            <span className="">Career Options</span>
            <h1 className="text-sky-800">Khangchenzonga State University</h1>
          </h1>
        </div>
      </div>
      {/* Desktop view */}
      <div className="hidden md:block pt-6 ">
        <img src={logo} alt="KSU_logo" width="100" height="100" />
      </div>
      <article className="space-y-2 font-medium p-6 flex-1  text-justify">
        <div className="text-3xl font-extrabold hidden md:flex md:space-x-2 md:py-8">
          <h1 className="">
            <span className="">Career Options </span>
            <h1 className="text-sky-800">Khangchenzonga State University</h1>
          </h1>
        </div>
        <p className="text-justify">
          Khangchenzonga State University offers a plethora of career options
          and abundant opportunities for students. With its diverse range of
          programs and industry-aligned curriculum, the university equips
          students with the skills and knowledge needed to excel in their chosen
          fields. Its strong industry partnerships and robust placement support
          ensure promising career prospects for graduates.
        </p>
        <p className="text-justify">
          The literature departments at Khangchenzonga State University provide
          comprehensive Nepali and Sanskrit courses, fostering a deep
          appreciation for language, culture, and heritage. Through critical
          analysis, creative expression, and research, students gain a profound
          understanding of literary traditions, preparing them for careers in
          academia, publishing, translation, cultural preservation, and more.
        </p>
        <p className="text-justify">
          The literature departments at Khangchenzonga State University provide
          comprehensive Nepali and Sanskrit courses, fostering a deep
          appreciation for language, culture, and heritage. Through critical
          analysis, creative expression, and research, students gain a profound
          understanding of literary traditions, preparing them for careers in
          academia, publishing, translation, cultural preservation, and more.
        </p>
      </article>
    </div>
  );
};

export default Why;
