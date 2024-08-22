"use client"
import {motion} from "framer-motion"

const Homepage = () => {

      return  (
        <motion.div 
          className="h-full" 
          initial={{y: "-200vh"}} 
          animate={{y: "0%"}} 
          transition={{duration: 1}}
          >
          <div className=" h-full flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 text-xl items-center justify-center content-center pt-10">
            {/* TEXT */}
            <div className="h-full w-1/2 flex flex-col gap-8">
              <h1 className="text-4xl font-bold md:text-6xl">Jonathan Perkins</h1>
              <p className="md:text-xl">
                Data Scientist, Intelligence Analyst at DarkTower, Physics and Computer Science student at UAB</p>
              <div className="flex gap-4 w-full">
                <button className="text-xs md:text-lg p-4 rounded-xl ring-2 ring-fusha hover:ring-purple hover:bg-purple">See my work</button>
                <button className="text-xs md:text-lg p-4 rounded-xl ring-2 ring-fusha hover:ring-purple hover:bg-purple">Contact me</button>
              </div>
            </div>
            {/* IMAGE */}
            <div className="relative h-1/2 w-1/2 m-10 pt-8">
              <div className="absolute -inset-2 pt-8">
                <div className="w-100% h-full mx-0 opacity-40 blur-lg bg-purple">
                </div>
              </div>
              <img src="/IMG_0207.JPG" className="relative object-contain rounded-xl justify-center content-center" alt="sky" />
            </div>
          </div>
        </motion.div>
  )
}

export default Homepage;
