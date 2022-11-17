import Image from "next/image";
import React from "react";
import data from "../../components/SkillsData";
import { motion } from "framer-motion";

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

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      id="skills"
      className="w-full lg:h-screen p-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full py-16 px-4 lg:px-2">
        <motion.h2 variants={fadeInUp} className="py-4 mb-4 text-center">
          What I Can Do
        </motion.h2>
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {data.map((e, index) => (
            <motion.div
              variants={fadeInRight}
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-[#232826] select-none rounded-lg"
            >
              <div className="py-6 saturate-100 hover:saturate-100 ease-linear duration-150 sm:saturate-0">
                <motion.div className="grid gap-2 justify-center items-center">
                  <motion.div className="mx-auto">
                    <Image src={e.img} width="70" height="70" alt={e.alt} />
                  </motion.div>
                  <div className="flex flex-col items-center ">
                    <h3 className="text-lg font-bold">{e.title}</h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
