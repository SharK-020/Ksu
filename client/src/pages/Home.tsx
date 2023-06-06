import React from "react";
import Banner from "../components/Banner";
import Mission from "../components/Mission";

const Home = () => {
  return (
    <main className="">
      {/* Banner */}
      <section className="">
        <Banner />
      </section>
      {/* about section */}
      <section>
        <article>
          <h1 className="text-3xl text-center font-bold text-slate-950 mt-10">
            About Kanchendzonga State University
          </h1>
          <p className="text-center text-slate-950 mt-5">
            Khangchendzonga State University is a new government state university
            in Gangtok, Sikkim, India. The university was established in 2018 as
            Sikkim State University under The Sikkim State University Act, 2003.
          </p>
          <p className="text-center text-slate-950 mt-5">
            The University is mandated to provide teaching and research in various
            branches of learning and courses of study and to promote research and
            extension work in these fields. The University is also mandated to
            provide courses of study and promote research in areas which are of
            special and direct relevance to the State of Sikkim.
          </p>
          <p className="text-center text-slate-950 mt-5">
            The University is committed to provide quality education to the
            students of Sikkim and other parts of the country. The University is
            also committed to provide opportunities to the students of Sikkim to
            pursue higher education in the State.
          </p>
        </article>

        {/*Latest news Component here */}
        <div>

        </div>
      </section>
      {/* vison mission */}
      <section className="">
        <div className="flex justify-center">
          <Mission/>
        </div>
      </section>
      {/* Metrics and numbers */}
      <section>
          Few Statistics here
      </section>
      {/* Campus Life and facilities overview */}
      <section>
          Campus life images and stuff
      </section>
      {/* Overview of programs */}
      <section>
          Programs overview
      </section>
      {/* Faculty overview */}
      <section>
          Faculty overview
      </section>
      {/* Admission application overview */}
      <section>
          Admission application overview
      </section>
      {/* Scholarship Programs */}
      <section>
          Scholarship Programs
      </section>

    </main>
  );
};

export default Home;
