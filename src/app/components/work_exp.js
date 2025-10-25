"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const WorkExperience = () => {
  const experiences = [
    {
      role: "SDE Intern",
      company: "Cyber Unbound",
      period: "Jun 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Working with Next.js and MongoDB to build an admin panel, a certificate-based authenticator for secure certificate issuance/verification, and an email automation system for notifications and onboarding. Implemented RESTful APIs, integrated third-party services, and improved deployment and testing workflows during the internship.",
      image: "cyberunbound.svg",
      skills: ["Next.js", "MongoDB", "RESTful APIs", "Email Automation"],
      current: true
    },
    {
      role: "Vice President", 
      company: "Indus Connect",
      period: "2024 - Present",
      location: "VIT Pune",
      type: "Leadership",
      description: "Led Indus Connect as Vice President — driving industry-academia partnerships, organizing tech talks, hackathons and workshops, expanding membership and outreach, securing sponsorships, and mentoring teams on product development and collaboration.",
      image: "cultural.webp",
      skills: ["Leadership", "Event Management", "Partnerships", "Mentoring"],
      current: true
    },
    {
      role: "Software Development Intern",
      company: "IANT",
      period: "2024",
      location: "Pune",
      type: "Internship", 
      description: "Developed projects in Python, Java, and Android, contributing to real-world applications. Created a project utilizing AI for automation, improving efficiency by 30%. Gained hands-on experience with RESTful APIs, database management, and Agile workflows.",
      image: "Iant.png",
      skills: ["Python", "Java", "Android", "AI", "RESTful APIs"],
      current: false
    },
    {
      role: "Vice President",
      company: "Cultural Team (GPP)",
      period: "2023 - 2024", 
      location: "VIT Pune",
      type: "Leadership",
      description: "Led a 50-member team to organize college cultural events, ensuring smooth execution of multiple large-scale programs. Spearheaded innovative event ideas that boosted participation by 40%. Managed budgets and sponsorships worth ₹2L+.",
      image: "cultural.webp",
      skills: ["Team Leadership", "Event Planning", "Budget Management", "Sponsorships"],
      current: false
    },
    {
      role: "Creative Coordinator",
      company: "VIT Pune", 
      period: "2023",
      location: "Pune",
      type: "Volunteer",
      description: "Handled creative direction for events, designing posters, banners, and merchandise. Worked on branding strategies that enhanced event visibility by 60%. Organized creative workshops, mentoring 100+ students in design principles.",
      image: "creative.jpg", 
      skills: ["Graphic Design", "Branding", "Adobe Suite", "Workshop Delivery"],
      current: false
    },
    {
      role: "Technical Coordinator",
      company: "VIT Pune",
      period: "2022 - 2023",
      location: "Pune", 
      type: "Volunteer",
      description: "Developed and maintained technical projects, including a gamified learning platform and a real-time multiplayer quiz game using socket programming. Conducted hands-on workshops on web development, Firebase authentication, and AI integration.",
      image: "technical.webp",
      skills: ["Web Development", "Socket Programming", "Firebase", "AI Integration"],
      current: false
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
            <FiBriefcase 
              className="w-5 h-5" 
              style={{ color: 'var(--accent-primary)' }} 
            />
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Professional Journey
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Work Experience
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A journey through diverse roles in technology, leadership, and innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" style={{ background: 'linear-gradient(to bottom, transparent, var(--border-primary), transparent)' }}></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:flex absolute left-6 top-8 w-4 h-4 rounded-full border-4 items-center justify-center z-10" style={{ 
                  background: experience.current ? 'var(--accent-primary)' : 'var(--bg-primary)',
                  borderColor: experience.current ? 'var(--accent-primary)' : 'var(--border-primary)'
                }}>
                  {experience.current && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--bg-primary)' }}></div>
                  )}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="lg:ml-16 group relative p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Current Position Indicator */}
                  {experience.current && (
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold border" style={{
                      background: 'var(--accent-primary)' + '15',
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)'
                    }}>
                      Current
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Logo */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        <Image
                          src={`/${experience.image}`}
                          width={40}
                          height={40}
                          alt={`${experience.company} logo`}
                          className="rounded-lg object-contain"
                        />
                      </div>
                    </motion.div>

                    {/* Experience Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <div>
                          <h3 
                            className="text-xl font-bold mb-1"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {experience.role}
                          </h3>
                          <p 
                            className="text-lg font-semibold"
                            style={{ color: 'var(--accent-primary)' }}
                          >
                            {experience.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2 lg:mt-0">
                          <span 
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium"
                            style={{ 
                              background: 'var(--bg-secondary)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <FiCalendar className="w-3 h-3" />
                            {experience.period}
                          </span>
                          <span 
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium"
                            style={{ 
                              background: 'var(--bg-secondary)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <FiMapPin className="w-3 h-3" />
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            background: experience.type === 'Internship' 
                              ? '#F59E0B15' 
                              : experience.type === 'Leadership' 
                              ? '#8B5CF615'
                              : '#10B98115',
                            color: experience.type === 'Internship' 
                              ? '#F59E0B' 
                              : experience.type === 'Leadership' 
                              ? '#8B5CF6'
                              : '#10B981'
                          }}
                        >
                          {experience.type}
                        </span>
                      </div>

                      <p 
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {experience.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-default"
                            style={{ 
                              background: 'var(--accent-primary)' + '10',
                              color: 'var(--accent-primary)',
                              border: `1px solid var(--accent-primary)25`
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: <FiBriefcase className="w-5 h-5" />, label: "Total Roles", value: "6+" },
            { icon: <FiTrendingUp className="w-5 h-5" />, label: "Years Experience", value: "3+" },
            { icon: <HiOutlineOfficeBuilding className="w-5 h-5" />, label: "Organizations", value: "4+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="text-center p-6 rounded-xl border"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div 
                className="inline-flex items-center justify-center mb-3"
                style={{ color: 'var(--accent-primary)' }}
              >
                {stat.icon}
              </div>
              <div 
                className="text-2xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;