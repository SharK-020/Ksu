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
import HowToApply from "../components/Home/HowToApply";
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
					py-6 justify-between">
					<h1 className="text-5xl font-extrabold ">
						Graduate
						<br />
						Programs
					</h1>
					<div className="flex max-w-3xl gap-10">
						<p>
							The only State University of Sikkim was established
							to fulfill the need and dreams of the aspiring
							students of Sikkim and the North East for a
							teaching, research-intensive, and an affiliating
							university.
						</p>
						<p>
							Currently, the University is offering the programs,
							MA in Sanskrit (20 seats) and MA in Nepali (40
							seats) MA in Bhutia (x seats) MA in Limboo (y seats)
							MA in Lepcha (z seats) under the School of Languages
							and Literature.
						</p>
					</div>
				</div>
				{/* <div className=" mx-auto gap-4 flex md:flex-row flex-col justify-evenly">
          <Programs
            img="https://media.istockphoto.com/id/810233162/photo/definition-of-nepali.jpg?s=612x612&w=0&k=20&c=0RGHoOGtCVGW94Fyqzs30ioOEg4jnCApDhy-s0O9IdE="
            title="Nepali"
            type="Literature"
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />
          <Programs
            img="https://filose.com/wp-content/uploads/2022/04/sanskrit-calligraphy.png"
            title="Sanskrit"
            type="Literature"
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />

        </div> */}
			</section>
			{/* Faculty overview */}
			{/*       <section>Faculty overview</section> */}

			{/* Admission application overview */}

			<section className="px-8 py-10">
				<HowToApply />
			</section>

			{/* Scholarship Programs */}
			<section>
				<Scholarships />
			</section>
		</main>
	);
};

export default Home;
