import React from "react";
import Banner from "../components/Home/Banner";
import Mission from "../components/Home/Mission";
import logo from "../assets/logo.webp";
import Link from "../components/Home/Link";
import Stats from "../components/Home/Stats";
import Campus from "../components/Home/Campus";
import Scholarships from "../components/Home/Scholarships";
import Programs from "../components/Home/Programs";
import Apply from "../components/Home/Apply";
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
      <section className="flex justify-center py-10">
        <Stats />
      </section>
      {/* Campus Life and facilities overview */}
      <section>
        <Campus />
      </section>
      {/* Overview of programs */}
      <section className="px-8 py-10 md:px-10 lg:px-16">
        <div
          className="flex flex-col md:flex-row gap-4 mx-auto font-medium items-center
					py-6 justify-between"
        >
          <h1 className="text-5xl font-extrabold ">
            Graduate
            <br />
            Programs
          </h1>
          <div className="flex max-w-3xl gap-10">
            <p>
              The only State University of Sikkim was established to fulfill the
              need and dreams of the aspiring students of Sikkim and the North
              East for a teaching, research-intensive, and an affiliating
              university.
            </p>
            <p>
              Currently, the University is offering two programs, MA in Sanskrit
              (20 seats) and MA in Nepali (40 seats)under the School of
              Languages and Literature.
            </p>
          </div>
        </div>
        <div className=" mx-auto gap-4 flex md:flex-row flex-col justify-evenly">
          <Programs
            img="https://estudiar.vamtam.com/wp-content/uploads/2021/01/amplitude-magazin-srXbJ1TAdhI-unsplash.jpg"
            title="Nepali"
            type="Literature"
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />
          <Programs
            img="https://estudiar.vamtam.com/wp-content/uploads/2021/01/amplitude-magazin-srXbJ1TAdhI-unsplash.jpg"
            title="Sanskrit"
            type="Literature"
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />
        </div>
      </section>
      {/* Faculty overview */}
      <section>Faculty overview</section>

      {/* Admission application overview */}
      <section className="px-8 py-10 md:px-10 lg:px-16">
        <div className="links p-4 space-y-2 md:justify-center md:align-middle md:space-y-5">
                  <div className="">
                          <h1 className="underline text-5xl font-extrabold ">
                                  How to Apply
                          </h1>  
                  </div>     
          </div>
        <div className=" mx-auto gap-2 flex md:flex-row flex-col justify-evenly">
          <Apply
          img="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/9-Things-to-Keep-in-Mind-When-Applying-for-Job.jpg.optimal.jpg"
          title="You Apply"
          desc="Tell us a little about yourself and we will help with the rest. Our convenient online application tool only takes 10 minutes to complete."
          />
          <Apply
          img="https://thumbs.dreamstime.com/b/connect-complex-like-puzzle-pictured-as-word-connect-puzzle-pieces-to-show-connect-can-be-difficult-needs-164222379.jpg"
          title="We Connect"
          desc="After you submit your application, an admissions representative will contact you and will help you to complete the process."
          />
          <Apply
          img="https://www.shutterstock.com/image-photo/man-getting-ready-work-260nw-373931122.jpg"
          title="You get ready"
          desc="Once you have completed your application and connected with an admissions representative, you are ready to create your schedule."
          />
        </div>
      </section>
      <section className="px-20 mb-5 mt-5">
      <div className="links p-4 space-y-2 md:justify-center md:align-middle md:space-y-5">
                <div className="text-xl font-bold ">
                  <a href= "/Home/Admission.tsx" target="_blank" rel="noopener noreferrer"> 
                  READ MORE 
                  </a>
                </div>     
        </div>
      </section>

      {/* Scholarship Programs */}
      <section >
        <Scholarships />
      </section>
    </main>
  );
};

export default Home;
