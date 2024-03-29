//Submenu for navbar

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type MobileSubmenuProps = {
  menuItem: {
    name: string;
    link: string;
  }[];
};

const MobileSubmenu = ({ menuItem }: MobileSubmenuProps) => {
  return (
    <AnimatePresence>
    <motion.div 
    className="flex flex-col space-y-2 py-2"
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    exit={{opacity:0}}
    transition={{duration: 0.2}}
    >
      {menuItem.map((item, index) => (
        <Link to={item.link} key={index}>
          <div className="flex space-x-2 cursor-pointer ml-8 mr-2
          text-gray-800 hover:text-gray-950 transition duration-300">
            <ArrowRightIcon className="h-6 w-6" />
            <h1 className="text-base font-semibold">
                {item.name}
            </h1>
          </div>
        </Link>
      ))}
    </motion.div>
    </AnimatePresence>
  );
};

export default MobileSubmenu;
