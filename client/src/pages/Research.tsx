import Banner2 from "../components/Research/Banner2";
import About_Research from "../components/Research/About_Research";
import Publication from "../components/Research/Publication";

const Research = () => {
  return (
    <main className="space-y-2 md:space-y-6">
      <section>
        {/* Banner */}
        <Banner2 />
      </section>

      <section className="flex justify-center h-auto">
        {/* About REsearch */}
        <About_Research />
      </section>

      <section className="flex justify-center align-middle">
        {/* Publication */}
        <Publication />
      </section>
    </main>
  );
};

export default Research;
