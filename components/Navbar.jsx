import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import SideNav from "./SideNav";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
  initial: {
    y: -60,
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

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 70) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={
        shadow
          ? "fixed bg-[#181818] shadow-lg w-full h-16 z-[100] ease-in-out duration-300"
          : "fixed bg-[#181818] w-full h-16 z-[100] ease-in-out duration-300"
      }
    >
      <motion.div
        variants={fadeInDown}
        className="flex justify-between items-center w-full h-full px-8"
      >
        <Link href="/">
          <span className="text-xl font-bold tracking-widest">Kungs.</span>
        </Link>
        <div>
          <ul className="hidden md:flex space-x-10 text-sm font-semibold tracking-wider">
            <li className="hover:text-[#1da765] ease-in-out duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#1da765] ease-in-out duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#1da765] ease-in-out duration-300">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:text-[#1da765] ease-in-out duration-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-[#1da765] ease-in-out duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className={nav ? "hidden" : "md:hidden cursor-pointer"}>
            <AiOutlineMenu onClick={handleNav} size={20} />
          </div>
        </div>
      </motion.div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen ease-linear duration-500 bg-black/70"
            : "ease-linear duration-500 md:hidden fixed h-screen"
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[70%] sm:w-[55%] md:w-[40%] h-screen bg-[#181818] p-10 ease-linear duration-500"
              : "fixed top-0 left-[-100%] w-[70%] sm:w-[55%] md:w-[40%] h-screen bg-[#181818] ease-linear duration-500"
          }
        >
          <SideNav toHandleNav={handleNav} toSetNav={() => setNav(false)} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
