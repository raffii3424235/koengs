import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

const SideNav = ({ toHandleNav, toSetNav }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <span className="text-xl font-bold tracking-widest">Kungs.</span>
        <div className="cursor-pointer">
          <AiOutlineClose onClick={toHandleNav} size={20} />
        </div>
      </div>
      <div className="pt-10 flex flex-col">
        <ul className="space-y-8 text-base text-center font-semibold tracking-wider">
          <li className="hover:text-[#5651e5] ease-in-out duration-300">
            <Link onClick={toSetNav} href="/">
              Home
            </Link>
          </li>
          <motion.li className="hover:text-[#5651e5] ease-in-out duration-300">
            <Link onClick={toSetNav} href="/about">
              About
            </Link>
          </motion.li>
          <motion.li className="hover:text-[#5651e5] ease-in-out duration-300">
            <Link onClick={toSetNav} href="/skills">
              Skills
            </Link>
          </motion.li>
          <motion.li className="hover:text-[#5651e5] ease-in-out duration-300">
            <Link href="/">Projects</Link>
          </motion.li>
          <motion.li className="hover:text-[#5651e5] ease-in-out duration-300">
            <Link href="/">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
