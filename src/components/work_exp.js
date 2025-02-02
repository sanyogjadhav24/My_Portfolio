"use client";
import motion  from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

const WorkExperience = () => {
  const experiences = [
    {
      title: "Intern at IANT",
      description:
        "Developed projects in Python, Java, and Android, contributing to real-world applications. Created a project utilizing AI for automation, improving efficiency by 30%. Gained hands-on experience with RESTful APIs, database management, and Agile workflows. Assisted in software testing and debugging, enhancing system performance.",
      image: "iant.png",
    },
    {
      title: "Vice President, Cultural Team (GPP)",
      description:
        "Led a 50-member team to organize college cultural events, ensuring smooth execution of multiple large-scale programs. Spearheaded innovative event ideas that boosted participation. Managed budgeting, sponsorships, and team coordination. Introduced digital management systems, improving efficiency and outreach.",
      image: "cultural.webp",
    },
    {
      title: "Creative Coordinator (VIT Pune)",
      description:
        "Handled creative direction for events, designing posters, banners, and merchandise. Worked on branding strategies that enhanced event visibility. Collaborated with different teams to maintain a cohesive visual theme. Organized and executed creative workshops, mentoring students in design principles and tools like Adobe Suite.",
      image: "creative.jpg",
    },
    {
      title: "Technical Coordinator",
      description:
        "Developed and maintained technical projects, including a gamified learning platform and a real-time multiplayer quiz game using socket programming. Conducted hands-on workshops on web development, Firebase authentication, and AI integration. Led the development of various college projects, optimizing performance and security.",
      image: "technical.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -12,
      scale: 1.05,
      boxShadow: "0 12px 30px rgba(128, 90, 213, 0.2)",
      rotate: 2,
    },
  };

  // Ref for the container to enable horizontal scrolling
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Show/hide left arrow
      if (container.scrollLeft > 0) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }

      // Show/hide right arrow
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    };

    container.addEventListener("scroll", handleScroll);

    // Initial check for arrows
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#0A0416] to-black text-white py-24 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Professional Journey
        </motion.h2>

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="overflow-x-auto lg:overflow-visible no-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex lg:grid lg:grid-cols-2 lg:gap-8 w-max lg:w-full">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative bg-gradient-to-br from-[#1A0933] to-[#0D041F] p-8 rounded-2xl border border-transparent hover:border-[#3A1B6E] transition-all duration-300 flex-shrink-0 w-[300px] sm:w-[400px] lg:w-full mx-4 lg:mx-0"
                  style={{
                    boxShadow: "0 4px 24px rgba(88, 51, 163, 0.1)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex flex-col sm:flex-row sm:items-start items-center space-y-4 sm:space-y-0 sm:space-x-6 z-10">
                    <motion.div
                      className="flex-shrink-0 relative"
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className="absolute inset-0 bg-purple-500/30 blur-[20px] rounded-full" />
                      <Image
                        src={`/${experience.image}`}
                        width={80}
                        height={80}
                        alt="Icon"
                        className="rounded-lg transform transition-transform duration-300 object-contain p-2"
                      />
                    </motion.div>

                    <div className="flex-1 text-center sm:text-left">
                      <motion.h3
                        className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {experience.title}
                      </motion.h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrows for Mobile */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-500/30 p-3 rounded-full backdrop-blur-sm hover:bg-purple-500/50 transition-all duration-300 lg:hidden"
              style={{ zIndex: 10 }}
            >
              <FaChevronLeft className="text-white" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500/30 p-3 rounded-full backdrop-blur-sm hover:bg-purple-500/50 transition-all duration-300 lg:hidden"
              style={{ zIndex: 10 }}
            >
              <FaChevronRight className="text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;