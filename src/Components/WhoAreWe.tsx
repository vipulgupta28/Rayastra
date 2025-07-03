import { useState, useRef, useEffect } from 'react';
import { TextGenerateEffect } from '../ui/textgenerate';
import image1 from "../assets/WhoAreWe.png"
import image2 from "../assets/Mission.png";
import image3 from "../assets/Approach.png"
import image4 from "../assets/Team.png";
import image5 from "../assets/Impact.png";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
    const [initialScrollDone, setInitialScrollDone] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const words = `Who Are We?
`;


  const sections = [
    {
      title: "Our Mission",
      content: "To make learning accessible, engaging, and boundary-less for every curious mind.",
      image: image1
    },
    {
      title: "Our Approach",
      content: "We combine cutting-edge technology with proven educational methods to create immersive learning experiences.",
      image: image3
    },
    {
      title: "Our Team",
      content: "A diverse group of educators, technologists, and creatives united by a passion for knowledge sharing.",
      image: image4
    },
    {
      title: "Our Impact",
      content: "Thousands of learners empowered with knowledge that helps them explore their world with confidence.",
      image: image5
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollTop;
      const sectionHeight = container.scrollHeight / sections.length;
      const newIndex = Math.floor(scrollPosition / sectionHeight);

        if (!initialScrollDone && scrollPosition > 10) {
        setInitialScrollDone(true);
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);

     if (!initialScrollDone) {
      const sectionHeight = container.scrollHeight / (sections.length + 1);
      container.scrollTo({
        top: sectionHeight * 0.7, // Scroll to 70% of first section
        behavior: 'smooth'
      });
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, sections.length, initialScrollDone]);

  return (
    <section
      ref={scrollContainerRef}
      className="h-screen w-full flex overflow-y-auto snap-y snap-mandatory bg-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* Left Half (Sticky Image Pane) */}
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center  p-12">
        <div className="relative w-full h-[85%] rounded-3xl overflow-hidden shadow-2xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <span className="text-sm font-medium text-blue-300 tracking-widest mb-2 block">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-4xl font-bold mb-4">{section.title}</h3>
                <p className="text-xl text-gray-100 max-w-lg leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Half (Scrollable Content) */}
      <div className="w-1/2">
        {/* Introduction Section */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-20 snap-start">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">
              <TextGenerateEffect words={words} />
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At Rayastra, we are dreamers, explorers, and passionate educators on a mission to transform curiosity into clarity.
            </p>
            <div className="flex items-center justify-center mt-16">
              <div className="w-16 h-1 bg-blue-500 rounded-full" />
              <span className="mx-6 text-gray-500 font-medium tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-16 h-1 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="h-screen w-full flex items-center justify-center snap-start px-20"
          >
            <div className={`max-w-2xl transition-all duration-700 ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-12'}`}>
              <span className="text-sm font-semibold text-blue-600 tracking-wider mb-4 block">
                {`0${index + 1}`}
              </span>
              <h3 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">{section.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}