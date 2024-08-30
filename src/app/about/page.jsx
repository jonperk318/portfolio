"use client"
import {motion} from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-400vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            {/* CONTAINER */}
            <div className="h-full flex flex-col px-3 md:px-4 lg:px-5 xl:px-6">
                <h1 className="font-bold text-2xl pt-4 flex justify-center">Biography</h1>
                {/* BIOGRAPHY CONTAINER */}
                <div className="h-1/2 flex flex-col md:flex-row md:px-2 lg:px-5 xl:px-24 justify-center items-center md:items-start pt-10 gap-10">
                    {/* IMAGE */}
                    <div className="relative h-1/2 max-w-xs md:w-1/3">
                        <div className="absolute -inset-2">
                            <div className="h-full mx-0 opacity-40 blur-lg bg-light-blue">
                            </div>
                        </div>
                        <img src="/profile.JPG" className="relative object-contain rounded-xl z-10" alt="profile" />
                    </div>
                    {/* TEXT */}
                    <div className="h-full w-2/3 flex flex-col px-1 sm:px-2 md:px-3 lg:px-5 xl:px-10 gap-24 md:gap-32 lg:gap-48">
                        {/* BIO */}
                        <div className="flex flex-col gap-8 justify-center">
                            <p className="text-md">Hi, I&apos;m JP. I&apos;m a student at the University of Alabama at Birmingham studying computational physics with minors in computer science and mathematics.
                                I reasearch machine learning applications in signal processing and work full time as an intelligence analyst at DarkTower.</p>
                                <p className="text-md">As a recipient of the NASA Alabama Space Grant Consortium award, I am graduating with distinguished honors. I have built two web sites from scratch, developed several tools to expedite web scraping, created more than 40 ML models, and tested eleven algorithm benchmarks in four languages. I have a lot of fun solving complex problems and am passionate about building new technologies, particularly for improving our understanding of the world and mitigating our negative impacts.</p>
                            <p className="text-md">When I&apos;m not behind a computer screen, I enjoy spending time with my partner, Ruby, walking my dog, Marlowe, singing, playing the guitar, cooking, and learning foreign languages.</p>
                            <div className="flex flex-row">
                                {/* SCROLL SVG */}
                                <div>
                                    <motion.svg
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: "10px" }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeIn" }}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={50}
                                        height={50}
                                        className="justify-center mt-16"
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
                                {/* SIGNATURE */}
                                <div className="pl-28 md:pl-52 lg:pl-72 xl:pl-96">
                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1046 879" width="200" height="auto" className="pl-40%">
                                        <title>signature</title>
                                        <defs>
                                                <image width="533" height="365" id="img1" href="data:image/png;base64,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" />
                                        </defs>
                                        <style>
                                        </style>
                                        <use id="Background" href="#img1" x="257" y="257"/>
                                    </svg>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* EDUCATION CONTAINER */}
                <div className="flex flex-col gap-12 justify-center items-center py-28">
                    <h1 className="font-bold text-2xl pt-8 flex justify-center">Education</h1>
                    <div className="flex justify-between gap-12 md:gap-24">
                        {/* LIBERTY */}
                        <div className="flex flex-col items-end content-end w-1/2 text-right bg-space-cadet rounded-xl p-4 text-sm md:text-lg gap-2">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">B.S. Interdisciplinary Studies</h2>
                            <h3 className="text-light-blue">Liberty University</h3>
                            <p className="italic">Lynchburg, VA</p>
                            <p className="bg-black rounded-xl w-fit p-2">Aug 2016 - Dec 2019</p>
                            <p className="font-semibold">Concentrations in business and world religions</p>
                        </div>
                        {/* UAB */}
                        <div className="flex flex-col items-start content-start w-1/2 text-left bg-space-cadet rounded-xl p-4 text-sm md:text-lg gap-2">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">B.S. Physics (Computational Track)</h2>
                            <h3 className="text-fuchsia">University of Alabama at Birmingham</h3>
                            <p className="italic">Birmingham, AL</p>
                            <p className="bg-black rounded-xl w-fit p-2">May 2022 - Dec 2024</p>
                            <p className="font-semibold">Minors in Mathematics, Computer and Information Sciences</p>
                            <p className="italic">High distinguished honors, presidential honor roll, NASA Alabama Space Grant Consortium scholarship recipient</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;