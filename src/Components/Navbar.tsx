import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        w-[105%] md:w-[100%] lg:w-2/3
        rounded-xl
        transition-all duration-300
        ${isScrolled ? 'bg-black text-white p-2 shadow-lg' : 'text-white p-0'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-60}
            className="font-bold text-2xl cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          >
            Rayastra
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {['home', 'about', 'services', 'contact', 'blogs'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-60}
                className="rounded-full px-4 py-2 hover:bg-orange-700 hover:text-white cursor-pointer text-white font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>

          {/* Right Section: Contact, Button, Mobile Menu Icon */}
          <div className="flex items-center gap-10">
            <div className="hidden md:block  text-white">
              <h1 className="text-sm font-semibold">Contact the expert</h1>
              <p className="text-sm">+91 8840972644</p>
            </div>

            <div className="hidden md:block">
              <ScrollLink to="startConnecting" smooth={true} duration={500} offset={-60}>
                <button className="bg-purple-600 text-white px-5 py-2 rounded hover:opacity-90 transition">
                  Enroll Now
                </button>
              </ScrollLink>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isScrolled ? 'text-white' : 'text-black'} focus:outline-none`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-lg rounded-b-lg mt-2 px-6 w-full absolute left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity, padding' }}
        >
          <div className="flex flex-col space-y-6">
            {['features', 'how-it-works', 'whoarewe', 'pricing'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-800 hover:text-black text-lg font-semibold py-3 cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section === 'whoarewe' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}

            <ScrollLink to="startConnecting" smooth={true} duration={500} offset={-60}>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 text-lg font-semibold"
              >
                Get Started
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
