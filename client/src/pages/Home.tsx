import React from "react";
import Banner from "../components/Home/Banner";
import Mission from "../components/Home/Mission";
import logo from "../assets/logo.webp";
import Link from "../components/Home/Link";
import Stats from "../components/Home/Stats";
import Campus from "../components/Home/Campus";

const Home = () => {
  return (
    <main className="">
      {/* Banner */}
      <section className="">
        <Banner />
      </section>
      {/* about section */}
      <section className="flex flex-col md:w-[80%] mx-auto md:flex-row text-justify space-x-4">
        <div
          className="flex space-x-4 p-4 items-center justify-center
        md:hidden"
        >
          <img src={logo} alt="KSU_logo" width="100" height="100" />
          <div className="text-3xl font-extrabold">
            <h1 className="">About Kanchendzonga</h1>
            <h1 className="">State University</h1>
          </div>
        </div>
        <div className="hidden md:flex h-full justify-end w-full pt-6 ">
          <img src={logo} alt="KSU_logo" width="100" height="100" />
        </div>
        <article className="space-y-2 font-medium p-6">
          <div className="text-3xl font-extrabold hidden md:block">
            <h1 className="">About Kanchendzonga</h1>
            <h1 className="">State University</h1>
          </div>
          <p className="">
            Khangchendzonga State University is a new government state
            university in Gangtok, Sikkim, India. The university was established
            in 2018 as Sikkim State University under The Sikkim State University
            Act, 2003.
          </p>
          <p className="">
            The University is mandated to provide teaching and research in
            various branches of learning and courses of study and to promote
            research and extension work in these fields. The University is also
            mandated to provide courses of study and promote research in areas
            which are of special and direct relevance to the State of Sikkim.
          </p>
          <p className="">
            The University is committed to provide quality education to the
            students of Sikkim and other parts of the country. The University is
            also committed to provide opportunities to the students of Sikkim to
            pursue higher education in the State.
          </p>
        </article>

        {/*Latest news Component here */}
        <div></div>
      </section>
      {/* vision mission */}
      <section className=" flex flex-col justify-center md:flex md:flex-row md:justify-between md:px-16">
        <Link />
        <Mission />
      </section>
      {/* Metrics and numbers */}
      <section className="flex justify-center">
        <Stats />
      </section>
      {/* Campus Life and facilities overview */}
      <section>
        <Campus />
      </section>
      {/* Overview of programs */}
      <section>Programs overview</section>
      {/* Faculty overview */}
      <section>Faculty overview</section>
      {/* Admission application overview */}
      <section>Admission application overview</section>
      {/* Scholarship Programs */}
      <section>Scholarship Programs</section>
    </main>
  );
};

export default Home;
