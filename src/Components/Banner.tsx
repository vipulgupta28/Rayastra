import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Banner = () => {
  const lines = ["Come", "Join", "Us"];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden px-6 text-center">
      
     

      {/* Animated Heading */}
      <div className="space-y-4">
        {lines.map((line, i) => (
          <motion.h1
            key={line}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={headingVariants}
            className="text-[4rem] sm:text-[6rem] font-bold leading-tight"
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="mt-8 text-lg sm:text-xl text-white/90 max-w-xl"
      >
        Spark your child’s curiosity with <span className="font-bold text-yellow-300">interactive learning</span> — from coding to creativity.
        <br />
        Empower young minds with fun, engaging, and personalized education.
      </motion.p>
    </section>
  );
};

export default Banner;
