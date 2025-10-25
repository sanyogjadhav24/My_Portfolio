"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiTrendingUp, FiBook } from "react-icons/fi";
import { HiAcademicCap, HiStar } from "react-icons/hi";

const Education = () => {
  const educationData = [
    {
      icon: <HiAcademicCap className="w-6 h-6" />,
      degree: "B.Tech in Information Technology",
      institution: "Vishwakarma Institute of Technology, Pune",
      score: "CGPA: 9.25",
      year: "2024 - Present",
      status: "Current",
      description: "Specializing in software development, data structures, and modern web technologies."
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Pune",
      score: "Percentage: 91.93%",
      year: "2023 - 2024",
      status: "Completed",
      description: "Foundation in computer science principles, programming, and engineering mathematics."
    },
    {
      icon: <HiStar className="w-6 h-6" />,
      degree: "10th Grade",
      institution: "Shree Anantrao Kulkarni English Medium School",
      score: "Percentage: 90.20%",
      year: "2020 - 2021",
      status: "Completed",
      description: "Strong academic foundation with focus on mathematics and science."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.6
      },
    }
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.2,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FiBookOpen 
              className="w-5 h-5" 
              style={{ color: 'var(--accent-primary)' }} 
            />
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Academic Journey
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Education & Learning
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A continuous journey of learning and academic excellence in technology and innovation
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div 
                className="p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
                style={{ 
                  background: 'var(--bg-elevated)',
                  borderColor: 'var(--border-primary)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon and Status */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      variants={iconVariants}
                      initial="rest"
                      whileHover="hover"
                      className="p-4 rounded-xl flex items-center justify-center"
                      style={{ background: 'var(--bg-secondary)' }}
                    >
                      <div style={{ color: 'var(--accent-primary)' }}>
                        {edu.icon}
                      </div>
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ 
                          backgroundColor: edu.status === 'Current' ? 'var(--accent-primary)' : '#10B981'
                        }}
                      />
                      <span 
                        className="text-sm font-medium"
                        style={{ 
                          color: edu.status === 'Current' ? 'var(--accent-primary)' : '#10B981'
                        }}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 
                        className="text-xl font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span 
                          className="text-sm font-medium px-3 py-1 rounded-lg"
                          style={{ 
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)' 
                          }}
                        >
                          {edu.year}
                        </span>
                        <span 
                          className="font-semibold"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          {edu.score}
                        </span>
                      </div>
                    </div>
                    
                    <p 
                      className="font-medium mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {edu.institution}
                    </p>
                    
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Stats */}
       
      </div>
    </section>
  );
};

export default Education;
