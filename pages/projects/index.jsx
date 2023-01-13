import { motion } from "framer-motion";
import Image from "next/image";
const desktopImg = require("../../public/image/desktop.png");

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 1,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 1,
    },
  },
};

const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  Projects.title = "Kungs - Projects";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      id="project"
      className="w-full lg:h-screen p-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full py-16 px-4 lg:px-3">
        <motion.h2 variants={fadeInUp} className="py-4 mb-4 text-center">
          Projects
        </motion.h2>
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* <div className="border border-gray-400 py-3">
            <img className="w-52 h-52" src={desktopImg} alt="desktop" />
            <Image src={desktopImg} />
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
