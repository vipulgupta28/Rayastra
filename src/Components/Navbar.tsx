import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUpRight } from "lucide-react"; // or any icon lib

const Navbar = () => {
  return (
    <motion.div
  initial={{ y: -60, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="w-full flex justify-center fixed top-6 z-50"
>
  <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-white rounded-full shadow-lg border border-gray-200 backdrop-blur-lg">
    
    {/* Logo */}
    <div className="flex items-center gap-2 text-black font-semibold text-lg">
       Rayastra
    </div>

    {/* Navigation Links */}
    <div className="flex items-center gap-8">
      {["Home", "Offerings", "Testimonials", "Courses", "Cities"].map(
        (link) => {
          const to = link.toLowerCase().replace(/\s+/g, "-");
          return (
            <motion.div
              key={link}
            
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-black font-medium hover:underline hover:cursor-pointer"
              >
                {link}
              </Link>
            </motion.div>
          );
        }
      )}
    </div>

    {/* Login & Sign Up */}
    <div className="flex items-center gap-4">
      
      <button className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition">
       Get Started <ArrowUpRight size={16} />
      </button>
    </div>
  </div>
</motion.div>

  );
};

export default Navbar;
