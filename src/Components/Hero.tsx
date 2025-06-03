import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";
import Video from "../assets/WhatsApp Video 2025-05-22 at 13.51.38_a7934368.mp4";


const Hero = () => {
  const containerRef = useRef(null);
 


  const words = ["Passion", "Dedication", "Creativity"];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-black via-[#2E1065] to-purple-900 h-screen overflow-hidden"
    >
      <video
  src={Video}
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
/>


      {/* fixed hero content */}
      <div className="inset-0 z-10 flex h-screen px-20">
        <div className="flex flex-col justify-center space-y-7">
          <h1 className="text-[100px] z-100 text-white font-bold leading-none">
            Rayastra
          </h1>

          <div className="text-5xl text-white z-100 font-semibold leading-tight">
            <p>Turning your curiosities into clarities</p>
            <p className="flex items-center">
              With{" "}
              <span className="ml-2 inline-block relative h-[1em]">
                <AnimatePresence>
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute  px-3 bg-white/20 rounded-xl left-0"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>

          <div className="text-base z-100 text-white">Learn beyond this world</div>

        <motion.button
      className="relative h-[52px] w-[120px] overflow-hidden flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-white  hover:bg-purple-700 cursor-pointer text-black rounded-xl transition duration-300 font-semibold"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animate Text and Icon inside a container */}
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key="airplane"
            className="flex text-white items-center gap-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
      
            <Plane className="w-7 h-7" />
          </motion.div>
        ) : (
          <motion.div
            key="text"
            className="flex items-center gap-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Explore</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
          
        </div>
        

        
  

        </div>
      </div>
   
  );
};

export default Hero;
