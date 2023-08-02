import Banner from "../components/Home/Banner";
import Mission from "../components/Home/Mission";
import Stats from "../components/Home/Stats";
import Campus from "../components/Home/Campus";
import Scholarships from "../components/Home/Scholarships";
import Programs from "../components/Home/Programs";
import Notice from "../components/Notice";
import About from "../components/Home/About";
import { noticeSampleData } from "../components/noticeSampleData";
import { motion } from "framer-motion";
import animVariants from "../utils/variants";
import PictureCard from "../components/Home/PictureCard";
import cm from "../assets/cm.webp";
import gov from "../assets/governor.webp";
import vc from "../assets/vice_chancelor.webp";
import knl from "../assets/knLepcha.webp";
import ias from "../assets/iasTelang.webp";

const Home = () => {
/* 	const token = useSelector((state: RootState) => state.auth.token);
	console.log(token); */
	return (
		<main className="">
			{/* Banner */}
			<section className="">
				<Banner />
			</section>

			{/* about section */}
			<motion.section
				className=" py-5 px-5 lg:px-16"
				variants={animVariants.baseCard}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}>
				<div className="lg:w-[70%] mx-auto">
					<About />
				</div>
			</motion.section>

			{/* Notice section */}
			<motion.section
				className="px-5 py-5 md:px-10 lg:px-16"
				variants={animVariants.section}
				initial="offscreen"
				whileInView="onscreen">
				<div className="relative flex flex-col md:flex-row justify-center gap-6 lg:gap-20 ">
					<Notice
						noticeData={noticeSampleData}
						noticeTitle="Latest Notifications"
					/>

					<Notice
						noticeData={noticeSampleData}
						noticeTitle="Quick Links"
					/>
				</div>
			</motion.section>

			<motion.section
				className="px-5 py-5 md:px-10 lg:px-16"
				variants={animVariants.section}
				initial="offscreen"
				whileInView="onscreen">
				<div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-items-end">
					<PictureCard
						picture={gov}
						title="Shri Laxman Prasad Acharya"
						designation="Hon'ble Governor of Sikkim"
					/>
					<PictureCard
						picture={cm}
						title="Shri Prem Singh Tamang (Golay)"
						designation="Hon'ble Chief Minister of Sikkim"
					/>
					<PictureCard
						picture={knl}
						title="Shri K.N Lepcha"
						designation="Hon'ble Minister, Education Dept., Govt. of Sikkim"
					/>
					<PictureCard
						picture={ias}
						title="Shri R. Telang, IAS"
						designation="Additional Chief Secretary, Education Dept., Govt. of Sikkim"
					/>
					<PictureCard
						picture={vc}
						title="Prof. (Dr.) Ashis Pradhan"
						designation="Vice Chancellor, KSU"
					/>
				</div>
			</motion.section>

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
							Currently, the University is offering two programs,
							MA in Sanskrit (20 seats) and MA in Nepali (40
							seats)under the School of Languages and Literature.
						</p>
					</div>
				</div>
				<div className=" mx-auto gap-4 flex md:flex-row flex-col justify-evenly">
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
				</div>
			</section>
			{/* Faculty overview */}
			{/*       <section>Faculty overview</section> */}

			{/* Scholarship Programs */}
			<section>
				<Scholarships />
			</section>
		</main>
	);
};

export default Home;
