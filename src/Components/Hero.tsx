import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring,AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";
import { BackgroundLines } from "../ui/bg-lines";

const Hero = () => {
  const containerRef = useRef(null);
  const words = ["Passion", "Dedication", "Creativity"];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Spring animations based on scroll
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    springConfig
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0]),
    springConfig
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative h-screen bg-white flex items-center justify-center"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]" />

      {/* Hero content with scroll spring animation */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{ y, scale, opacity }}
      >
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
            Rayastra
          </h1>

          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
            <p className="mb-3 md:mb-4">Turning your curiosities into clarities</p>
            <div className="flex flex-col flex-wrap items-center justify-center gap-x-2">
              <span>With</span>
              <span className="inline-block relative h-[1.2em]">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className=" px-3 py-1 rounded-lg left-0 bg-gray-900 text-white whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-4 leading-relaxed">
            Learn beyond this world with our comprehensive courses and expert guidance.
          </p>

          {/* Button */}
          <div className="pt-2">
      <button
        className="relative hover:cursor-pointer h-12 sm:h-14 w-36 sm:w-40 overflow-hidden flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-red-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="hover"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explore</span>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span>Explore</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
        </div>
        </BackgroundLines>
      </motion.div>
  
    </div>
  );
};

export default Hero;