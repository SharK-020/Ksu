import { AnimatePresence } from "framer-motion";
import CollageBanner from "../components/Life/CollageBanner";
import Events from "../components/Life/Events";
import { motion } from "framer-motion";

const Life = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        exit={{opacity:0}}
        >
          <CollageBanner />
        </motion.section>
      </AnimatePresence>

      <section>
        <Events />
      </section>
    </div>
  );
};

export default Life;
