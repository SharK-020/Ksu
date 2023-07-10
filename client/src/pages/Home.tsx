import Banner from "../components/Home/Banner";
import Mission from "../components/Home/Mission";
import Stats from "../components/Home/Stats";
import Campus from "../components/Home/Campus";
import Scholarships from "../components/Home/Scholarships";
import Programs from "../components/Home/Programs";
import Apply from "../components/Home/Apply";
import Notice from "../components/Notice";
import About from "../components/Home/About";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<main className="">
			{/* Banner */}
			<section className="">
				<Banner />
			</section>
			{/* about section */}
			<section className="flex flex-col lg:flex-row py-5 px-5 lg:px-16">
				<div className="flex-1">
					<About />
				</div>

        {/*Latest news Component here */}
        <div className="flex lg:w-[40%]  justify-center">
          <Notice />
        </div>
      </section>
      {/* vision mission */}
      <section className="md:px-16">
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
{/*       <section>Faculty overview</section> */}

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
						<Link to="/admission">Read More</Link>
					</div>
				</div>
			</section>

			{/* Scholarship Programs */}
			<section>
				<Scholarships />
			</section>
		</main>
	);
};

export default Home;
