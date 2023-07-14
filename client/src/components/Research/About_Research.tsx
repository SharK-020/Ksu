import logo from "../../assets/logo.webp";


const About_Research = () => {
  return (
    <div className="bg-slate-50 w-[95vw] py-4 flex flex-col justify-center align-middle space-y-3 shadow-md md:w-[85vw]">
      <div className="flex justify-center space-x-3">
        <img src={logo} alt="img" className="w-[20vw]" />
        <h1 className="text-3xl font-bold pt-12">Research in KSU</h1>
      </div>
      <div className="space-y-1">
        <p className="text-md text-justify tracking-tight p-6 font-norma md:text-xl">
          Kanchenjunga State University stands as a beacon of academic
          excellence, renowned for its outstanding research contributions and
          myriad benefits it provides to its students. The university's
          commitment to fostering a culture of research is commendable,
          empowering scholars to delve into cutting-edge fields and make
          impactful discoveries. The faculty at Kanchenjunga State University is
          a remarkable blend of seasoned experts and emerging talents, ensuring
          a nurturing environment for intellectual growth. Their expertise,
          dedication, and guidance propel students towards achieving their
          research aspirations.
          
        </p>
        <p className="text-md text-justify tracking-tight  p-6 font-normal md:text-xl">
        Moreover, the university's state-of-the-art
          research equipment and facilities enhance the learning experience and
          facilitate groundbreaking investigations across various disciplines.
          From advanced laboratories to specialized research centers,
          Kanchenjunga State University provides a robust infrastructure that
          fosters innovation and collaboration. Students gain hands-on
          experience, honing their skills and preparing them for real-world
          challenges.
          
        </p>
      </div>
    </div>
  );
};

export default About_Research;
