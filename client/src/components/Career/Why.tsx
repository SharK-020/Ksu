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
<<<<<<< HEAD
            <h1 className="text-sky-800">Khangchenzonga State University</h1>
=======
            <h1 className="text-sky-800">Kanchenjanga State University</h1>
>>>>>>> 0a93d46cb572e9acacebb7f843bde3db8045a6a3
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
<<<<<<< HEAD
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
=======
            <h1 className="text-sky-800">Kanchenjanga State University</h1>
          </h1>
        </div>
        <p className="text-justify">
          Kanchenjunga State University (KSU) stands out as a leader in
          fostering the formation and improvement of careers, significantly
          enhancing the professional lives of its employees. With a wide range
          of academic programs and disciplines, employees have the opportunity
          to explore their interests and passions, paving the way for a
          fulfilling career. KSU goes above and beyond by providing
          comprehensive career counseling services, helping individuals identify
          their strengths and goals. Regular career fairs and networking events
          further contribute to the professional growth of employees, connecting
          them with industry professionals and creating valuable opportunities.
          KSU's commitment to continuous learning is evident through workshops,
          seminars, and conferences, empowering employees to stay updated with
          the latest knowledge and trends in their respective fields.
          Additionally, the university's partnerships with industry leaders
          facilitate internships, job placements, and collaborative research
          projects, enabling employees to gain hands-on experience and excel in
          their careers. With mentorship programs and a supportive environment,
          KSU fosters a culture of growth and advancement, ensuring that
          employees have the resources and support needed to thrive
          professionally.
>>>>>>> 0a93d46cb572e9acacebb7f843bde3db8045a6a3
        </p>
      </article>
    </div>
  );
};

export default Why;
