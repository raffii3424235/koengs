import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerLate = {
  animate: {
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const Main = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      id="home"
      className="w-full h-screen text-center select-none"
    >
      <div className="max-w-7xl w-full h-full mx-auto p-2 justify-center items-center flex ">
        <div className="space-y-2">
          <motion.div variants={stagger}>
            <motion.p
              variants={fadeInUp}
              className="uppercase text-sm tracking-widest font-semibold text-slate-300"
            >
              Let&#39;s build something together
            </motion.p>
            <motion.h1 className="font-bold py-2" variants={fadeInUp}>
              Hi, I&#39;m <span className="rgb-text">Kungs</span>
            </motion.h1>
            <motion.h1 className="font-bold" variants={fadeInUp}>
              A Front-End Web Developer
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-semibold py-4 text-lg text-slate-300 m-auto sm:max-w-[70%]"
            >
              I&#39;m foucused on building responsive front-end web application
              while learning back-end technologies.
            </motion.p>
            <motion.div
              variants={staggerLate}
              className="flex items-center justify-between max-w-xs m-auto p-4"
            >
              <Link href="/">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  variants={fadeInUp}
                >
                  <FaLinkedinIn
                    className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                    size={30}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  variants={fadeInUp}
                >
                  <FaGithub
                    className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                    size={30}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  variants={fadeInUp}
                >
                  <FaTiktok
                    className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                    size={30}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  variants={fadeInUp}
                >
                  <FaTwitter
                    className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                    size={30}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  variants={fadeInUp}
                >
                  <FaInstagram
                    className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                    size={30}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
