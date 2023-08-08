import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInUpLate = {
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  About.title = "Kungs - About";
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      id="about"
      className="w-full md:h-screen flex justify-between items-center"
    >
      <div className="max-w-7xl m-auto py-16">
        <motion.div variants={stagger} className="mx-6">
          <motion.h2 variants={fadeInUpLate} className="py-6 text-center">
            Who I Am
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="py-1 text-slate-100 text-justify text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            fugiat adipisci velit illo consectetur, qui mollitia numquam quos
            veniam iste eos vitae nobis quibusdam. Dolores doloribus nostrum
            eius possimus optio? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis fugiat adipisci velit illo consectetur,
            qui mollitia numquam quos veniam iste eos vitae nobis quibusdam.
            Dolores doloribus nostrum eius possimus optio?
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="py-1 text-slate-100 text-justify text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            fugiat adipisci velit illo consectetur, qui mollitia numquam quos
            veniam iste eos vitae nobis quibusdam. Dolores doloribus nostrum
            eius possimus optio? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis fugiat adipisci velit illo consectetur,
            qui mollitia numquam quos veniam iste eos vitae nobis quibusdam.
            Dolores doloribus nostrum eius possimus optio?
          </motion.p>
          <Link href="/">
            <motion.p
              whileHover={{ x: 10 }}
              whileTap={{ scale: 1.03 }}
              variants={fadeInUp}
              className="text-[#1da765] text-lg py-4 cursor-pointer font-semibold flex items-center"
            >
              Check Out Some Projects <FaArrowRight className="pl-2 text-xl" />
            </motion.p>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
