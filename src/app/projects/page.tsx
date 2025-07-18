"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CldImage from "@/components/cldImg";

const items = [
  {
    color: "from-salmon to-watermelon",
    title: "Full stack personal blog",
    desc: "Full stack web app built for Ruby M. using React, Sass CSS, Node, Express.js, and SQLite, deployed on an Ubuntu VPS using an Nginx reverse-proxy server",
    img: "foureyedbutterfly_ivcbqz",
    link: "https://foureyedbutterfly.com/",
  },
  {
    color: "from-watermelon to-lilac",
    title: "ML analysis of HDF5 data (NMF)",
    desc: "Denoised hyperspectral datasets of hybrid perovskite materials in Python, and used Scikit-learn and Nimfa to build unsupervised Non-negative Matrix Factorization models to extract image and spectral features",
    img: "nmf_h2pza2",
    link: "https://research.jayandsparrow.com/nmf",
  },
  {
    color: "from-lilac to-purple",
    title: "ML analysis of HDF5 data (VAE)",
    desc: "Trained, validated, and analyzed unsupervised and semi-supervised variational autoencoder models of hyperspectral datasets of energy materials and of artificial datasets in Pytorch, demonstrating relationships between image and spectral features",
    img: "ssvae_rg3ptu",
    link: "https://research.jayandsparrow.com/vae",
  },
  {
    color: "from-purple to-blue",
    title: "Sorting algorithm benchmark",
    desc: "Compared 8 sorting algorithms implemented and tested in 4 languages: Python, Java, C++, and JavaScript; deployed the results to a static web page, visualized using Chart.js",
    img: "sorting_xte9dj",
    link: "https://jonperk318.github.io/sorting-algorithms/",
  },
  {
    color: "from-blue to-light-blue",
    title: "Searching algorithm benchmark",
    desc: "Compared 3 searching algorithms implemented and tested in 4 languages: Python, Java, C++, and JavaScript; created data visualizations using Chart.js",
    img: "searching_q0eav8",
    link: "https://jonperk318.github.io/searching-algorithms/",
  },
  {
    color: "from-light-blue to-fuchsia",
    title: "Telegram parsers",
    desc: "Open source intelligence tools built in Python to parse sensitive information from JSON files exported from Telegram channels, created to combat financial fraud",
    img: "cc-parser_aqrk6h",
    link: "https://github.com/jonperk318/telegram-parser",
  },
  {
    color: "from-fuchsia to-salmon",
    title: "This web site",
    desc: "This portfolio is a web application I created from scratch using Next.js, React, TypeScript, Framer Motion, and Tailwind CSS, deployed on Vercel",
    img: "portfolio-site_fmbt9c",
    link: "https://github.com/jonperk318/portfolio",
  },
];

const ProjectsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-79.4%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-400vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem-60px)] flex items-center justify-center text-center text-4xl md:text-6xl lg:text-8xl">
          My Projects
        </div>
        {/* SCROLL SVG */}
        <motion.svg
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          className="w-screen flex items-center justify-center mb-24"
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#0095ef"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#0095ef" strokeWidth="1"></path>
          <path d="M15 11L12 14L9 11" stroke="#0095ef" strokeWidth="1"></path>
        </motion.svg>
        {/* ITEMS */}
        <div className="sticky z-40 top-0 left-0 flex h-screen gap-6 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-[175vw] flex items-center justify-center bg-linear-to-r from-fuchsia to-salmon" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen text-black flex items-center justify-center bg-linear-to-r ${item.color}`}
                key={item.title}
              >
                <div className="flex flex-col h-[90%] gap-4 bg-white/[0.4] p-4 rounded-xl">
                  <h1 className="text-lg font-bold lg:text-xl xl:text-2xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[510px] xl:h-[340px]">
                    <CldImage publicId={item.img} />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <button className="rounded-xl p-2 ring-4 ring-black hover:bg-black hover:text-silver hover:cursor-pointer">
                      View project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-linear-to-r from-fuchsia to-salmon" />
          </motion.div>
        </div>
      </div>
      {/* CONTACT ME */}
      <div className="w-screen h-[115vh] flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl pt-12">
          Do you have a project? I&apos;d love to hear about it!
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 7, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#0095ef">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-28 md:h-28 text-lg md:text-xl absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-light-blue rounded-full ring-4 ring-light-blue hover:bg-light-blue hover:text-black flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
