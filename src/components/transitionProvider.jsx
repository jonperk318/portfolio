"use client"
import Navbar from "@/components/navbar.jsx";
import { AnimatePresence } from "framer-motion"
import Starfield from 'react-starfield';
import {motion} from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {

    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <Starfield 
                starCount={20000}
                starColor={[255, 255, 255]}
                speedFactor={0.03}
                backgroundColor="black" />
            <div key={pathName} className="w-screen min-h-screen text-silver animated-background bg-black bg-gradient-to-r from-black from-30% via-purple/[0.3] to-black">
                <motion.div className="h-screen w-screen fixed bg-black rounded-b-[150px] z-40" 
                    animate={{height: "0vh"}}
                    exit={{height: "140vh"}}
                    transition={{duration:0.5, ease: "easeOut"}}
                    key="start" />
                <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl cursor-default z-50 w-fit h-fit" 
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration:0.8, ease: "easeOut"}}
                    key="text">
                        {pathName.charAt(1).toUpperCase() + pathName.substring(2)}
                </motion.div>
                <motion.div className="h-screen w-screen fixed bg-black rounded-t-[150px] bottom-0 z-40" 
                    initial={{height: "140vh"}}
                    animate={{height: "0vh", transition: {delay: 0.5}}}
                    key="finish" />
                <div className="h-24">
                    <Navbar/>
                </div>
                <div className="h-[calc(100vh - 6rem)]">{children}</div>
            </div>
            {/*<div className="w-screen h-screen animated-background bg-black bg-gradient-to-r from-black from-30% via-fusha/[0.3] to-black text-silver">*/}
            {/*<div className="w-screen animated-background h-screen bg-black bg-gradient-to-r from-black from-80% via-purple/[0.3] to-black opacity-50"></div>*/}
        </AnimatePresence>
    )
}

export default TransitionProvider