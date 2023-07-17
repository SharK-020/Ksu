import logo from "../../assets/logo.webp";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile view */}
      <div
        className="flex space-x-4 p-4 items-center justify-center
        md:hidden"
      >
        <img src={logo} alt="KSU_logo" width="100" height="100" />
        <div className="text-3xl font-extrabold">
          <h1 className="">
            About {""}
            <span className="text-sky-800">Khangchenzonga</span>
          </h1>
          <h1 className="text-sky-800">State University</h1>
        </div>
      </div>
      {/* Desktop view */}
      <div className="hidden md:block pt-6 ">
        <img src={logo} alt="KSU_logo" width="100" height="100" />
      </div>
      <article className="space-y-2 font-medium p-6 flex-1  text-justify">
        <div className="text-3xl font-extrabold hidden md:flex md:space-x-2 md:py-8">
          <h1 className="">
            About {""}
            <span className="text-sky-800">Khangchenzonga</span>
          </h1>
          <h1 className="text-sky-800">State University</h1>
        </div>
        <p className="">
          Khangchendzonga State University is a new government state university
          in Gangtok, Sikkim, India. The university was established in 2018 as
          Sikkim State University under The Sikkim State University Act, 2003.
        </p>
        <p className="">
          The University is mandated to provide teaching and research in various
          branches of learning and courses of study and to promote research and
          extension work in these fields. The University is also mandated to
          provide courses of study and promote research in areas which are of
          special and direct relevance to the State of Sikkim.
        </p>
        <p className="">
          The University is committed to provide quality education to the
          students of Sikkim and other parts of the country. The University is
          also committed to provide opportunities to the students of Sikkim to
          pursue higher education in the State.
        </p>
      </article>
    </div>
  );
};

export default About;
