import Banner3 from "../components/Career/Banner3"

import Options from "../components/Career/Options"
import Why from "../components/Career/Why"


const Careers = () => {
  return (
    <main className="space-y-2">
      <section>
        <Banner3/>
      </section>

      <section>
        <Why/>
      </section>

      <section className="flex justify-center h-auto">
        <Options/>
      </section>
    </main>
  )
}

export default Careers