"use client"
import {motion} from "framer-motion";
import { IconContext } from "react-icons";

import { FaAws, FaCss3Alt, FaDigitalOcean, FaDocker, FaGitAlt, FaHtml5, FaJava, FaLinux, FaNode, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiCplusplus, SiGnu, SiGnubash, SiJavascript, SiJetbrains, SiJupyter, SiMacos, SiMariadb, SiMysql, SiNumpy, SiScipy, SiOpencv, SiPandas, SiPytorch, SiScikitlearn, SiTailwindcss, SiTensorflow, SiVisualstudiocode, SiVite, SiWebpack } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const ExperiencePage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-500vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >   
            {/* CONTAINER */}
            <div className="h-full">
                {/* SKILLS CONTAINER */}
                <div className="h-1/3 flex flex-col px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 items-center justify-center content-center">
                    <h1 className="font-bold text-2xl pt-8">Skills</h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center p-16">
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://www.python.org/">
                                <FaPython />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://numpy.org/">
                                <SiNumpy />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://scipy.org/">
                                <SiScipy />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://pandas.pydata.org/">
                                <SiPandas />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://pytorch.org/">
                                <SiPytorch />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://www.tensorflow.org/">
                                <SiTensorflow />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://scikit-learn.org/stable/index.html">
                                <SiScikitlearn/>
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:62}}>
                            <a href="https://jupyter.org/">
                                <SiJupyter />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-watermelon", size:62}}>
                            <a href="https://www.java.com/">
                                <FaJava />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:62}}>
                            <a href="https://www.javascript.com/">
                                <SiJavascript />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:62}}>
                            <a href="https://nodejs.org/">
                                <FaNode />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:62}}>
                            <a href="https://react.dev/">
                                <FaReact />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:62}}>
                            <a href="https://vitejs.dev/">
                                <SiVite />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:62}}>
                            <a href="https://nextjs.org/">
                                <RiNextjsFill />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-lilac", size:62}}>
                            <a href="https://www.w3schools.com/html/">
                                <FaHtml5 />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-lilac", size:62}}>
                            <a href="https://www.w3schools.com/css/">
                                <FaCss3Alt />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-lilac", size:62}}>
                            <a href="https://tailwindcss.com/">
                                <SiTailwindcss />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-lilac", size:62}}>
                            <a href="https://sass-lang.com/">
                                <FaSass />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-blue", size:62}}>
                            <a href="https://www.w3schools.com/cpp/">
                                <SiCplusplus />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-blue", size:62}}>
                            <a href="https://opencv.org/">
                                <SiOpencv />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://www.mysql.com/">
                                <SiMysql />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://mariadb.org/">
                                <SiMariadb />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://webpack.js.org/">
                                <SiWebpack />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://www.docker.com/">
                                <FaDocker />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://git-scm.com/">
                                <FaGitAlt />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://aws.amazon.com/">
                                <FaAws />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://www.digitalocean.com/">
                                <FaDigitalOcean />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://code.visualstudio.com/">
                                <SiVisualstudiocode />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-teal", size:62}}>
                            <a href="https://www.jetbrains.com/">
                                <SiJetbrains />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-purple", size:62}}>
                            <a href="https://www.linux.org/">
                                <FaLinux />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-purple", size:62}}>
                            <a href="https://developer.apple.com/macos/">
                                <SiMacos />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-purple", size:62}}>
                            <a href="https://www.gnu.org/home.en.html">
                                <SiGnu />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: "hover:scale-125 hover:fill-purple", size:62}}>
                            <a href="https://www.gnu.org/software/bash/">
                                <SiGnubash />
                            </a>
                        </IconContext.Provider>
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
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#0095ef"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#0095ef" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#0095ef"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                {/* WORK EXPERIENCE CONTAINER */}
                <div className="flex flex-col gap-12 justify-center items-center py-28">
                    {/* EXPERIENCE TITLE */}
                    <h1 className="font-bold text-2xl">Work Experience</h1>
                    {/* EXPERIENCE LIST */}
                    <div className="">
                        {/* EXPERIENCE ITEM 1 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2 text-right pr-12 pt-6 pl-8 md:pl-32">
                                {/* JOB TITLE */}
                                <div className="bg-fuchsia text-black rounded-b-xl rounded-s-xl p-2 font-semibold">
                                    Intelligence Analyst II</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Tracked and documented vulnerabilities of Fortune 500 clients, built tools in Python to increase data collection efficiency, deployed OSINT software in a Linux environment, wrote automation scripts, analyzed leaked SQL databases</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-fuchsia text-sm font-semibold">
                                    Oct 2023 - Present</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit float-right mr-3">
                                    DarkTower</div>
                            </div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2"></div>
                        </div>
                        {/* EXPERIENCE ITEM 2 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2"></div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2 pl-12 pt-6 pr-8 md:pr-32">
                                {/* JOB TITLE */}
                                <div className="bg-fuchsia text-black rounded-b-xl rounded-e-xl p-2 font-semibold">
                                    Machine Learning Researcher</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Trained and validated deep neural nets in Pytorch using hyperspectral data of energy materials to map spectral and spatial features and understand phase stability, fully cleansed HDF5 data of cosmic rays</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-fuchsia text-sm font-semibold">
                                    Aug 2022 - Present</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit ml-3">
                                    University of Alabama at Birmingham</div>
                            </div>
                        </div>
                        {/* EXPERIENCE ITEM 3 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2 text-right pr-12 pt-6 pl-8 md:pl-32">
                                {/* JOB TITLE */}
                                <div className="bg-fuchsia text-black rounded-b-xl rounded-s-xl p-2 font-semibold">
                                    Data Scientist Intern</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Participated in REU internship, used NMF and PCA to demonstrate location and cause of energy material degredation</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-fuchsia text-sm font-semibold">
                                    May 2023 - Aug 2023</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit float-right mr-3">
                                    National Science Foundation</div>
                            </div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2"></div>
                        </div>
                        {/* EXPERIENCE ITEM 4 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2"></div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2 pl-12 pt-6 pr-8 md:pr-32">
                                {/* JOB TITLE */}
                                <div className="bg-light-blue text-black rounded-b-xl rounded-e-xl p-2 font-semibold">
                                    Chess Instructor</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Supervised daily chess programs, implemented creative techniques to teach strategy, tactics, and critical thinking skills</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-light-blue text-sm font-semibold">
                                    Aug 2022 - May 2024</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit ml-3">
                                    The Knight School</div>
                            </div>
                        </div>
                        {/* EXPERIENCE ITEM 5 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2 text-right pr-12 pt-6 pl-8 md:pl-32">
                                {/* JOB TITLE */}
                                <div className="bg-light-blue text-black rounded-b-xl rounded-s-xl p-2 font-semibold">
                                    Soccer Coach</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Instructed children in soccer techniques, adjusting coaching based on need, communicating regularly about expectations and progress</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-light-blue text-sm font-semibold">
                                    May 2022 - May 2024</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit float-right mr-3">
                                    Soccer Shots</div>
                            </div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2"></div>
                        </div>
                        {/* EXPERIENCE ITEM 6 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2"></div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2 pl-12 pt-6 pr-8 md:pr-32">
                                {/* JOB TITLE */}
                                <div className="bg-light-blue text-black rounded-b-xl rounded-e-xl p-2 font-semibold">
                                    Children&apos;s Counselor</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Supervised after-school and seasonal camp programs, directing and mentoring hundreds of children in recreational and academic activities</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-light-blue text-sm font-semibold">
                                    May 2021 - May 2023</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit ml-3">
                                    SMBC</div>
                            </div>
                        </div>
                        {/* EXPERIENCE ITEM 7 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2 text-right pr-12 pt-6 pl-8 md:pl-32">
                                {/* JOB TITLE */}
                                <div className="bg-light-blue text-black rounded-b-xl rounded-s-xl p-2 font-semibold">
                                    Server</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Greeted customers, served tables, and maintained restaurant</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-light-blue text-sm font-semibold">
                                    Sep 2019 - Mar 2020</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit float-right mr-3">
                                    Olexa&apos;s Cafe</div>
                            </div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2"></div>
                        </div>
                        {/* EXPERIENCE ITEM 8 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2"></div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2 pl-12 pt-6 pr-8 md:pr-32">
                                {/* JOB TITLE */}
                                <div className="bg-light-blue text-black rounded-b-xl rounded-e-xl p-2 font-semibold">
                                    Band Member / Camp Leadership</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Worked in various youth camp leadership positions, traveled the country on three different bands as guitarist, pianist, and vocalist</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-light-blue text-sm font-semibold">
                                    May 2014 - Aug 2019</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit ml-3">
                                    Word of Life</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExperiencePage;