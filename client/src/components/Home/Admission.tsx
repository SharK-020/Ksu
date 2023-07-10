import React from "react";

const Admission = () => {
	return (
		<section className="flex flex-col md:w-[80%] mx-auto md:flex-row text-justify space-x-4">
			<div className="links p-4 space-y-2 md:justify-center md:align-middle md:space-y-5">
				<div className="">
					<h1 className="text-5xl font-extrabold ">
						Admission and
						<br /> Application Overview
					</h1>
				</div>
				<div className="">
					<h1 className="text-4xl font-bold mt-10">
						Admission Overview
					</h1>
				</div>
				<article className="">
					<p className="mt-2 text-xl">
						We look for those students we believe will thrive at
						KSU. Our application process is designed to discover
						your individual story, so that we might see how you
						would take advantage of the many opportunities available
						at KSU. Like many highly selective universities, we
						conduct a comprehensive, holistic review of your
						application to consider academic and personal
						characteristics. We will review your performance in
						school, the rigor of your program, your writing skills
						and any test scores you choose to submit. We also
						consider personal qualities, as revealed in community
						involvement, leadership and achievements.
					</p>
					<p className="mt-2 text-xl text-blue-600 ">
						<button className="rounded-none ">
							<a href=""> READ MORE </a>
						</button>
					</p>
				</article>
				<div>
					<h1 className="text-4xl font-bold mt-10">
						Application Overview
					</h1>
				</div>
				<article>
					<p className="mt-2 text-xl">
						Let us look at various section of the online
						application:
					</p>
					<p className="underline mt-2 text-xl text-blue-600">
						{/* Bullet points */}
						<ul className="list-disc ml-9">
							<li className="mt-2">
								<a href="#background">Personal Background</a>
							</li>
							<li className="mt-2">
								<a href="#prog"> Program Selection</a>
							</li>
							<li className="mt-2">
								<a href="#academics">Academic History</a>
							</li>
							<li className="mt-2">
								<a href="#test">Test Scores</a>
							</li>
							<li className="mt-2">
								<a href="#exp">Experience</a>
							</li>
							<li className="mt-2">
								<a href="#statement">Statement</a>
							</li>
						</ul>
					</p>
					<hr />
					<h1 className="underline text-3xl font-bold mt-10">
						<a id="background">Personal Background</a>
					</h1>
					<p className="mt-2 text-xl">
						KSU is committed to creating an inclusive, accessible,
						diverse, and equitable university for all of our
						community members. In this section, we invite you to
						share biographical and demographic information that may
						provide the admission committee with a more holistic
						view of your lived experiences.
					</p>

					<h1 className="underline text-3xl font-bold mt-10">
						<a id="prog">Program Selection</a>
					</h1>
					<p className="mt-2 text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, cum veniam cumque nisi nobis accusamus earum
						debitis fugiat cupiditate, iure officiis mollitia modi
						iste non, fuga sint minus odio. Nihil hic alias quo
						suscipit quidem fugiat doloremque quos? Quam
						voluptatibus officiis necessitatibus, architecto
						suscipit officia pariatur illo magnam nam quod.
					</p>

					<h1 className="underline text-3xl font-bold mt-10">
						<a id="academics">Academic History</a>
					</h1>
					<p>
						<p className="mt-2 text-xl">
							In this section, you must list and provide your
							unofficial transcript for every post-secondary
							institution where you were enrolled — or are
							currently enrolled — in an undergraduate or graduate
							degree program.
						</p>
						<p className="mt-2 text-xl">
							You must also respond to the following questions:
							<ul className="list-disc ml-9">
								<li>
									Have you ever been suspended, dismissed, or
									placed on enforced leave from any college,
									university, or post-secondary institution or
									been the subject of disciplinary action by
									such an institution?
								</li>
								<li>
									Have you ever been placed on academic
									probation by any college or university?
								</li>
							</ul>
						</p>
					</p>

					<h1 className="underline text-3xl font-bold mt-10">
						<a id="test">Test Scores</a>
					</h1>
					<p className="mt-2 text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, cum veniam cumque nisi nobis accusamus earum
						debitis fugiat cupiditate, iure officiis mollitia modi
						iste non, fuga sint minus odio. Nihil hic alias quo
						suscipit quidem fugiat doloremque quos? Quam
						voluptatibus officiis necessitatibus, architecto
						suscipit officia pariatur illo magnam nam quod.
					</p>

					<h1 className="underline text-3xl font-bold mt-10">
						<a id="exp">Experience</a>
					</h1>
					<p className="mt-2 text-xl">
						This sections provides you an opportunity to provide
						information about any relevant experience in the
						following categories:
						<ul className="list-decimal ml-9 mt-2">
							<li>Research experience</li>
							<li>Publications/presentations/posters</li>
							<li>Awards & honors</li>
							<li>Work experience</li>
						</ul>
						In addition, you have the option to upload your
						resume/CV. Resume requirements and guidelines vary by
						program.
					</p>

					<h1 className="underline text-3xl font-bold mt-10">
						<a id="statement">Statement</a>
					</h1>
					<p className="mt-2 text-xl">
						In this section, you provide your Statement of Purpose
						for pursuing graduate study in your field of interest.
						In addition, you have the opportunity to submit an
						optional Diversity Statement.
					</p>
				</article>
			</div>
		</section>
	);
};

export default Admission;
