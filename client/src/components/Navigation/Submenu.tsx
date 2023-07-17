//Submenu for navbar

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SubmenuProps = {
  menuItem: {
    name: string;
    link: string;
  }[];
};

const Submenu = ({ menuItem }: SubmenuProps) => {
  return (
    <AnimatePresence>
    <motion.div 
    className="flex flex-col bg-slate-200 rounded-b-lg"
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    exit={{opacity:0}}
    transition={{duration: 0.2}}
    >
      {menuItem.map((item, index) => (
        <Link to={item.link} key={index}>
          <div className="flex space-x-2 cursor-pointer transition duration-300
          px-4 py-3 hover:bg-slate-300">
            <ArrowRightIcon className="h-6 w-6" />
            <h1 className="text-sm font-semibold text-gray-800 hover:text-gray-950
            transition duration-300">
                {item.name}
            </h1>
          </div>
        </Link>
      ))}
    </motion.div>
    </AnimatePresence>
  );
};

export default Submenu;
