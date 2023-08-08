import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const desktopImg = require("../../public/image/tanyain-desktop.png");
import { FaLink } from "react-icons/fa";

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

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get("/api/projects/")
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-2/3"
        >
          {data.map((res, index) => (
            <div
              key={index}
              className={
                res.soon
                  ? "border-2 border-gray-400 rounded-lg bg-gray-700 blur-sm"
                  : "border-2 border-gray-400 rounded-lg bg-gray-700"
              }
            >
              <Image
                className="rounded-t-lg"
                src={res.image}
                height={res.images.default.height}
                width={res.images.default.width}
                alt={res.alt}
                blurDataURL={res.images.default.blurDataURL}
              />
              <div className="py-2 px-4">
                <a
                  href={res.url}
                  className="items-center flex space-x-2 hover:text-[#1da765] duration-200 ease-linear cursor-pointer"
                >
                  <h3 className="text-2xl">{res.title}</h3>
                  <FaLink size={18} />
                </a>
                <p className="text-justify leading-tight pt-1">
                  {res.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
