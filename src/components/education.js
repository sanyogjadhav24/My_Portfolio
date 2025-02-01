"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiBook, FiStar } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      icon: <FiUser className="w-8 h-8" />,
      degree: "B.Tech in Information Technology",
      institution: "Vishwakarma Institute of Technology, Pune",
      score: "CGPA: 9.21",
      year: "2024 - Present",
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Pune",
      score: "Percentage: 91.93%",
      year: "2023 - 2024",
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      degree: "10th Grade",
      institution: "Shree Anantrao Kulkarni English Medium School",
      score: "Percentage: 90.20%",
      year: "2020 - 2021",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.3,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center mb-12 sm:mb-16"
        >
          My Academic Journey
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 transform -translate-x-1/2 sm:block hidden" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative flex flex-col sm:flex-row items-center justify-between mb-12 w-full"
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              {/* Content */}
              <div className="w-full sm:w-5/12 p-6 sm:p-8 bg-gray-900/80 rounded-3xl border-2 border-gray-800 shadow-lg relative mb-6 sm:mb-0">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="absolute -top-8 -left-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-gray-900 shadow-2xl"
                >
                  {edu.icon}
                </motion.div>

                {/* Degree */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm sm:text-base text-gray-400 mb-4">{edu.institution}</p>

                {/* Score and Year */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-sm sm:text-base">{edu.score}</span>
                  <span className="text-gray-300 bg-gray-800/60 px-4 py-2 rounded-full text-xs sm:text-sm">
                    {edu.year}
                  </span>
                </div>
              </div>

              {/* Connector */}
              <div className="w-1/12 flex items-center justify-center sm:block hidden">
                <div className="w-6 h-6 bg-cyan-400 rounded-full" />
              </div>

              {/* Empty Space */}
              <div className="w-full sm:w-5/12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-8 h-12 sm:w-10 sm:h-16 rounded-3xl border-2 border-cyan-400 flex justify-center items-center p-2 sm:p-3">
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
