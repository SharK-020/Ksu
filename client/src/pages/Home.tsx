import React from "react";
import Banner from "../components/Banner";
import Mission from "../components/Mission";
import imageToAdd from "./../assets/logo.webp";

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
          
          <div>
          </div>

          <div>
            
          <h1 className="text-5xl text-left font-bold text-slate-950 mt-10 px-96">
          <img src="http://localhost:5173/src/assets/logo.webp" alt="KSU_logo"  width="100" height="100"  />
            About Kanchendzonga 
          </h1>
          <h1 className="text-5xl text-left font-bold text-slate-950 px-96 mb-10">
            State University
          </h1>
          <p className="text-justify text-slate-950 mt-5 px-96">
            Khangchendzonga State University is a new government state university
            in Gangtok, Sikkim, India. The university was established in 2018 as
            Sikkim State University under The Sikkim State University Act, 2003.
          </p>
          <p className="text-justify text-slate-950 mt-5 px-96">
            The University is mandated to provide teaching and research in various
            branches of learning and courses of study and to promote research and
            extension work in these fields. The University is also mandated to
            provide courses of study and promote research in areas which are of
            special and direct relevance to the State of Sikkim.
          </p>
          <p className="text-justify text-slate-950 mt-5 px-96 pb-60">
            The University is committed to provide quality education to the
            students of Sikkim and other parts of the country. The University is
            also committed to provide opportunities to the students of Sikkim to
            pursue higher education in the State.
          </p>
          </div>
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
