import Banner from "../components/Home/Banner";
import Programs from "../components/Home/Programs";

const Know = () => {
  return (
    <main className="pb-6">
      {/* Banner */}
      <section className="">
        <Banner />
      </section>
      {/* Know KSU section */}
      <section className="flex flex-col justify-center">
        <div className="text-center">
          <div className="text-4xl font-extrabold mt-5  ">
            <h1 className="">
              KHANGCHENDZONGA STATE UNIVERSITY, SIKKIM
            </h1>
            <h1 className="">
              (ERSTWHILE SIKKIM STATE UNIVERSITY)
            </h1>
          </div>
        </div>

        <article className="space-y-2 font-medium p-10 w-full md:w-[90%] lg:w-[70%]
        mx-auto text-justify">
          <p className="mt-2 text-lg">
            The only State University of Sikkim was established to fulfill the
            need and dreams of the aspiring students of Sikkim and the North
            East for a teaching, research-intensive, and an affiliating
            university.
          </p>
          <p className="text-lg">
            The Sikkim State University was established by Act No 5 of 2003
            passed by the Sikkim Legislative Assembly. However, the University
            commenced its operations in 2018 onwards. Originally known as Sikkim
            State University, the University was renamed as Khangchendzonga
            State University, Sikkim vide Act number 16 of 2021 passed by the
            Sikkim State Legislative Assembly. The same has been notified by
            University Grants Commission vide F No 9-19/2018(CPP-I/PU) dated
            29th March, 2022.
          </p>
          <p className="text-lg">
            The university is currently operating out of a temporary campus at
            the Nar Bahadur Bhandari Govt College Complex, Tadong, Gangtok, East
            Sikkim with limited courses till such time the permanent campus is
            completed at Temi Tarku, South Sikkim.
          </p>
          <p className="text-lg">
            Currently, the University is offering two programs, MA in Sanskrit (
            20 seats) and MA in Nepali (40 seats)under the School of Languages
            and Literature.
          </p>
        </article>
      </section>

      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4">
          {/* idea taken from stanford university */}
          <Programs
            img="https://www.stanford.edu/wp-content/uploads/2023/03/Untitled-design-72.jpg"
            type={undefined}
            title="Excellence in teaching and research"
            /* needs to be changed in accordance with KSU */
            desc="provides students the opportunity to engage with big ideas, to cross conceptual and disciplinary boundaries, and to become global citizens who embrace diversity of thought and experience.."
          />
          <Programs
            img="https://www.stanford.edu/wp-content/uploads/2023/03/Untitled-design-73.jpg"
            title="Access"
            type={undefined}
            /* needs to be changed in accordance with KSU */
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />
          <Programs
            img="https://www.stanford.edu/wp-content/uploads/2023/03/Untitled-design-74.jpg"
            title="Community"
            type={undefined}
            /* needs to be changed in accordance with KSU */
            desc="Laboris nostrud qui pariatur tempor velit nisi in consectetur. Ipsum nostrud nulla adipisicing non ullamco consequat aliqua nostrud fugiat consectetur qui ad labore do. Nisi id aliquip ut non minim mollit irure minim anim ea laborum dolor eiusmod. Non esse Lorem ex ex elit sunt cupidatat eu dolore ea laborum culpa ut minim. Minim commodo qui excepteur nulla fugiat laborum anim dolore dolore ex."
          />
        </div>
      </section>
    </main>
  );
};

export default Know;
