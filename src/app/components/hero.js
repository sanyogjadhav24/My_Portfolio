"use client";
import {BackgroundBeams} from "./ui/background-beams";
import React from "react";
import Typewriter from "react-typewriter-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import SkillsShowcase from "./skills";
import WorkExperience from "./work_exp";


export default function BackgroundBeamsDemo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-hidden px-4 md:px-6 mt-24">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center md:items-start w-full">
        
        {/* Mobile Image Section - Fixed Visibility */}
        {/* Mobile Image Section - Fixed with proper z-index */}<motion.div 
  className="md:hidden flex justify-center mb-6 w-full relative z-20"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ 
    opacity: 1, // Keep opacity static after initial animation
    scale: 1,
    y: [-10, 10, -10] // Float animation
  }}
  transition={{ 
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
    default: {
      duration: 0.8,
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }}
>
  <img 
    src="/profile.jpg" 
    alt="Sanyog Jadhav" 
    className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover border-4 border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:rotate-3"
  />
</motion.div>

        {/* Text Content Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <motion.h1 
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-sans font-bold"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 120
            }}
          >
            <motion.span
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="inline-block"
            >
              Hello, I am
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              className="inline-block mt-2"
            >
              Sanyog Jadhav
            </motion.span>
          </motion.h1>

          {/* Typewriter Section */}
          <motion.div 
            className="relative z-10 text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-sans font-bold mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Typewriter
              text="Software Developer | Fullstack Developer"
              cursorColor="linear-gradient(to right, #9333ea, #db2777)"
              typeSpeed={80}
              deleteSpeed={40}
              loop={true}
              cursorStyle="|"
              wrapperClassName="typewriter-cursor"
            />
          </motion.div>

          {/* Full Paragraph Section - Preserved Content */}
          <motion.p 
            className="text-neutral-400 max-w-2xl my-4 sm:my-6 text-sm sm:text-base md:text-lg relative z-10 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            As a dedicated Full Stack Developer, I specialize in crafting scalable and efficient solutions to complex technical challenges. 
            With a deep understanding of front-end and back-end technologies, I seamlessly integrate innovation with functionality 
            to build high-performance applications. My focus remains on precision, optimization, and delivering robust, user-centric solutions.
          </motion.p>

          {/* Resume Button Section */}
          <motion.div
  className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center sm:justify-start items-center w-full"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", delay: 1 }}
>
  <div className="relative group"> {/* Ensure wrapper is using group for hover and pointer-events handling */}
    {/* Gradient animation - positioned absolutely within the button wrapper */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 pointer-events-none z-10 rounded-lg" // Gradient stays below button
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    
    {/* Button with correct z-index */}
    <motion.a
      href="/sanyogResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 cursor-pointer text-sm sm:text-base relative z-20" // Ensure button has higher z-index
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px 5px rgba(192, 132, 252, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Resume</span>
    </motion.a>
  </div>
</motion.div>

        </div>

        {/* Desktop Image Section */}
        <motion.div 
          className="hidden md:flex md:w-1/3 justify-end"
          style={{ y }}
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
        >
          <motion.img 
            src="/profile.jpg" 
            alt="Sanyog Jadhav" 
            className="rounded-full w-52 h-52 lg:w-72 lg:h-72 object-cover border-4 border-neutral-800 shadow-[0_0_30px_10px_rgba(192,132,252,0.3)] ring-4 ring-purple-600/40 bg-white/10 p-1"
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: "0 0 40px 15px rgba(192, 132, 252, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={floatingVariants}
            animate="float"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="w-full pt-10 pb-20 mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillsShowcase />
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <WorkExperience/>
      </motion.div>


     

      <BackgroundBeams />
    </div>
  );
}