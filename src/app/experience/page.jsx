"use client"
import {motion} from "framer-motion";
import { IconContext } from "react-icons";

import { FaAws, FaCss3Alt, FaDigitalOcean, FaDocker, FaGitAlt, FaHtml5, FaJava,
        FaLinux, FaNode, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiCplusplus, SiGnu, SiGnubash, SiJavascript, SiJetbrains, SiJupyter,
        SiMacos, SiMariadb, SiMysql, SiNumpy, SiScipy, SiOpencv, SiPandas,
        SiPytorch, SiScikitlearn, SiTailwindcss, SiTensorflow, SiVisualstudiocode,
        SiVite, SiWebpack, SiFastapi, SiVim} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const ExperiencePage = () => {

    const icons = [
        {elm: FaPython, href: "https://www.python.org/", hover: "fill-light-blue"},
        {elm: SiFastapi, href: "https://fastapi.tiangolo.com/", hover: "fill-light-blue"},
        {elm: SiNumpy, href: "https://www.python.org/", hover: "fill-light-blue"},
        {elm: SiScipy, href: "https://www.scipy.org/", hover: "fill-light-blue"},
        {elm: SiPandas, href: "https://pandas.pydata.org/", hover: "fill-light-blue"},
        {elm: SiPytorch, href: "https://pytorch.org/", hover: "fill-light-blue"},
        {elm: SiTensorflow, href: "https://www.tensorflow.org/", hover: "fill-light-blue"},
        {elm: SiScikitlearn, href: "https://scikit-learn.org/stable/index.html", hover: "fill-light-blue"},
        {elm: SiJupyter, href: "https://jupyter.org/", hover: "fill-light-blue"},
        {elm: FaJava, href: "https://www.java.com/", hover: "fill-watermelon"},
        {elm: SiJavascript, href: "https://www.javascript.com/", hover: "fill-yellow"},
        {elm: FaNode, href: "https://nodejs.org/", hover: "fill-yellow"},
        {elm: FaReact, href: "https://react.dev/", hover: "fill-yellow"},
        {elm: SiVite, href: "https://vitejs.dev/", hover: "fill-yellow"},
        {elm: RiNextjsFill, href: "https://nextjs.org/", hover: "fill-yellow"},
        {elm: SiWebpack, href: "https://webpack.js.org/", hover: "fill-yellow"},
        {elm: FaHtml5, href: "https://www.w3schools.com/html/", hover: "fill-lilac"},
        {elm: FaCss3Alt, href: "https://www.w3schools.com/css/", hover: "fill-lilac"},
        {elm: SiTailwindcss, href: "https://tailwindcss.com/", hover: "fill-lilac"},
        {elm: FaSass, href: "https://sass-lang.com/", hover: "fill-lilac"},
        {elm: SiCplusplus, href: "https://www.w3schools.com/cpp/", hover: "fill-blue"},
        {elm: SiOpencv, href: "https://opencv.org/", hover: "fill-blue"},
        {elm: SiMysql, href: "https://www.mysql.com/", hover: "fill-teal"},
        {elm: SiMariadb, href: "https://mariadb.org/", hover: "fill-teal"},
        {elm: FaDocker, href: "https://www.docker.com/", hover: "fill-teal"},
        {elm: FaGitAlt, href: "https://git-scm.com/", hover: "fill-teal"},
        {elm: FaAws, href: "https://aws.amazon.com/", hover: "fill-teal"},
        {elm: FaDigitalOcean, href: "https://www.digitalocean.com/", hover: "fill-teal"},
        {elm: SiVim, href: "https://www.vim.org/", hover: "fil-teal"},
        {elm: SiVisualstudiocode, href: "https://code.visualstudio.com/", hover: "fill-teal"},
        {elm: SiJetbrains, href: "https://www.jetbrains.com/", hover: "fill-teal"},
        {elm: FaLinux, href: "https://www.linux.org/", hover: "fill-purple"},
        {elm: SiMacos, href: "https://developer.apple.com/macos/", hover: "fill-purple"},
        {elm: SiGnu, href: "https://www.gnu.org/home.en.html", hover: "fill-purple"},
        {elm: SiGnubash, href: "https://www.gnu.org/software/bash/", hover: "fill-purple"},
    ];

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
                <div className="h-1/3 flex flex-col px-2 sm:px-4 md:px-6 lg:px-10
                        xl:px-20 items-center justify-center content-center">
                    <h1 className="font-bold text-2xl pt-8">
                        Skills
                    </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center p-16">
                        {icons.map((Icon, i) => (
                            <IconContext.Provider
                                    value={{ className: "hover:scale-125 hover:"
                                            + Icon.hover, size:62 }}
                                    key={i}>
                                <a href={Icon.href}>
                                    <Icon.elm />
                                </a>
                            </IconContext.Provider>
                        ))}
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
                    <h1 className="font-bold text-2xl">
                        Work Experience
                    </h1>
                    {/* EXPERIENCE LIST */}
                    <div className="">
                        {/* EXPERIENCE ITEM 0 */}
                        <div className="flex justify-between h-72 md:h-48">
                            {/* LEFT */}
                            <div className="w-1/2"></div>
                            {/* CENTER */}
                            <div>
                                {/* LINE */}
                                <div className="w-1 h-full bg-light-blue
                                        rounded relative">
                                    <div className="absolute w-5 h-5 rounded-full
                                            ring-4 bg-light-blue -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/2 pl-12 pt-6 pr-8 md:pr-32">
                                {/* JOB TITLE */}
                                <div className="bg-fuchsia text-black rounded-b-xl rounded-e-xl p-2 font-semibold">
                                    Software Engineer</div>
                                {/* JOB DESC */}
                                <div className="p-2 text-sm italic">
                                    Built a full stack web application using React/TS and FastAPI enabling users to upload, optimize, and benchmark neural networks. Implemented authentication and authorization, and designed intuitive way for users to configure optimization pipeline. Integrated UI with backend modules in Python and optimized deployment in Docker containers.</div>
                                {/* JOB DATE */}
                                <div className="p-2 text-fuchsia text-sm font-semibold">
                                    Dec 2024 - Present</div>
                                {/* JOB COMP NAME */}
                                <div className="p-1 rounded bg-silver text-black text-sm font-semibold w-fit ml-3">
                                    Parsons Corporation</div>
                            </div>
                        </div>
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
                                    Oct 2023 - Dec 2024</div>
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
                                    WOL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExperiencePage;
