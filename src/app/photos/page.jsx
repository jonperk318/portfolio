"use client"
import {motion} from "framer-motion";

const photos = [
    "/gallery/horsehair.jpeg", "/gallery/high-peak.jpg", "/gallery/mar2.jpeg", "/gallery/fancy.jpeg", "/gallery/empire.jpeg", 
    "/gallery/empire2.jpeg", "/gallery/happy.JPG", "/gallery/jellyfish.jpeg", "/gallery/aquarium.jpg", "/gallery/aquarium2.jpeg", 
    "/gallery/meditate.jpg", "/gallery/tank.jpeg", "/gallery/tennissee.JPG", "/gallery/woah.jpeg", "/gallery/mel.jpeg", 
    "/gallery/horsehair2.jpeg", "/gallery/horsehair3.jpeg", "/gallery/flower.jpeg", "/gallery/flowers.jpeg", "/gallery/universal.jpeg", 
    "/gallery/wine.jpeg", "/gallery/carlowe.JPG", "/gallery/car.jpg", "/gallery/danish.jpeg", "/gallery/jellyfish3.jpeg", 
    "/gallery/light-tree.jpeg", "/gallery/mar1.jpeg", "/gallery/ocean.jpeg", "/gallery/plants.jpg", "/gallery/pink-flowers.jpeg", 
    "/gallery/pj.jpeg", "/gallery/ruffner.jpeg", "/gallery/moss-rock.jpeg", "/gallery/pumpkin.jpeg", "/gallery/soo.JPG", 
    "/gallery/sunny.jpeg", "/gallery/tulips.jpeg", "/gallery/woah.jpeg", "/gallery/wedding.jpeg", "/gallery/wicked.jpeg", 
    "/gallery/peace.JPG", "/gallery/gardens.jpeg", "/gallery/cactus.jpeg", "/gallery/2niversal.jpeg", "/gallery/cheaha2.jpeg", 
    "/gallery/cheaha.jpeg", "/gallery/palm.jpeg", "/gallery/snow.jpeg", "/gallery/glow.jpeg", "/gallery/lunar-eclipse.jpg", 
    "/gallery/mesa.jpeg", "/gallery/ruins.jpeg", "/gallery/miami.jpeg", "/gallery/wetland.jpeg", "/gallery/everglades.PNG", 
    "/gallery/astronaut.jpeg", "/gallery/house-date.jpeg", "/gallery/yellow-flowers.JPG", "/gallery/fred.JPG", "/gallery/fred2.JPG", 
    "/gallery/kabsa.JPG", "/gallery/seol.jpeg", "/gallery/guard.jpeg", "/gallery/noodles.jpeg", "/gallery/korea.jpeg", 
    "/gallery/plant.JPG", "/gallery/hike.jpg", "/gallery/high-peak.jpg", "/gallery/flashlight.JPG", "/gallery/leaf.JPG", 
    "/gallery/lake.JPG", "/gallery/squad.jpeg", "/gallery/lighthouse.jpg", "/gallery/concert.JPG", "/gallery/cascade.jpg", 
    "/gallery/mist.JPG", "/gallery/beach.JPG"
]

const PhotosPage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-200vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div className="">Photos Page</div>
        </motion.div>
    )
}

export default PhotosPage;