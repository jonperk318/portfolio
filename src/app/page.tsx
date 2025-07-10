"use client"
import {motion} from "framer-motion"
import Link from "next/link"

import CldImage from "@/components/cldImg"

const Homepage = () => {

      return  (
        <motion.div
          className="h-full"
          initial={{y: "-200vh"}}
          animate={{y: "0%"}}
          transition={{duration: 1}}
          >
          <div className=" h-full flex flex-col lg:flex-row px-2 md:px-10 lg:px-12 xl:px-14 text-xl items-center justify-center content-center pt-10">
            {/* TEXT */}
            <div className="h-full w-2/3 lg:w-1/2 flex flex-col gap-8">
              <h1 className="text-4xl font-bold md:text-7xl">Jonathan Perkins</h1>
              <p className="md:text-xl font-thin"><span className="font-bold">Full Stack Software Engineer</span> with expertise in web application development, database management, machine learning, and IT/security</p>
              <div className="flex gap-4 w-full">
                <Link className="text-sm md:text-lg text-center p-4 rounded-xl ring-2 ring-fuchsia hover:ring-purple hover:bg-purple font-semibold" href={"/projects"}>See my work</Link>
                <Link className="text-sm md:text-lg text-center p-4 rounded-xl ring-2 ring-fuchsia hover:ring-purple hover:bg-purple font-semibold" href={"/contact"}>Contact me</Link>
              </div>
            </div>
            {/* IMAGE */}
            <div className="relative h-1/2 w-2/3 lg:w-1/2 m-10 pt-8">
              <div className="absolute -inset-2 pt-8">
                <div className="w-100% h-full mx-0 opacity-40 blur-lg bg-purple">
                </div>
              </div>
              <div className="relative object-contain">
                <CldImage publicId={"IMG_0207_pfxdlp"} />
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Homepage;
