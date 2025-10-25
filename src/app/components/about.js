"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiDownload, HiExternalLink } from "react-icons/hi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/sanyogjadhav24",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaGithub,
      href: "https://github.com/sanyogjadhav24",
      label: "GitHub", 
      color: "#6B7280",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/sanyogjadhav24",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: FaEnvelope,
      href: "mailto:sanyogjadhav24@gmail.com",
      label: "Email",
      color: "#EF4444",
    },
  ];

  const expertise = [
    {
      title: "Blockchain Development",
      description: "Building decentralized applications with Web3, Solidity, and IPFS",
      icon: "🔗",
      technologies: ["Solidity", "Web3.js", "IPFS", "Ethereum"]
    },
    {
      title: "Full-Stack Development", 
      description: "Creating modern web applications with React, Next.js, and Node.js",
      icon: "💻",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "AI/ML Integration",
      description: "Implementing intelligent features and automation solutions",
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "OpenCV", "ML APIs"]
    }
  ];

  return (
    <section ref={ref} style={{ background: 'var(--bg-primary)' }} className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <motion.span 
                  variants={itemVariants}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    background: 'var(--bg-elevated)', 
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--border-secondary)'
                  }}
                >
                  Software Developer                </motion.span>
                <h1 className="text-display font-bold" style={{ color: 'var(--text-primary)' }}>
                  About Me
                </h1>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7' }}>
                  I'm a passionate <strong style={{ color: 'var(--accent-primary)' }}>Software Development Engineer</strong> currently 
                  interning at Cyber Unbound, specializing in blockchain technology and full-stack development. 
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7' }}>
                  With expertise spanning from decentralized applications to AI-powered solutions, 
                  I focus on building scalable, user-centric products that solve real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-heading font-semibold" style={{ color: 'var(--text-primary)' }}>
                Areas of Expertise
              </h2>
              <div className="grid gap-6">
                {expertise.map((area, index) => (
                  <motion.div
                    key={area.title}
                    variants={itemVariants}
                    className="card-elevated p-6 group hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{area.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                          {area.title}
                        </h3>
                        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{ 
                                background: 'var(--bg-tertiary)', 
                                color: 'var(--text-tertiary)',
                                border: '1px solid var(--border-primary)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-heading font-semibold" style={{ color: 'var(--text-primary)' }}>
                Professional Highlights
              </h2>
              <div className="space-y-4">
                {[
                  "SDE Intern at Cyber Unbound (June 2025 - Present)",
                  "Vice President at Indus Connect",
                  "Built 15+ projects across Web3, AI/ML, and Full-Stack",
                  "Expert in modern tech stacks and emerging technologies"
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-3 rounded-lg"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent-primary)' }}
                    />
                    <p style={{ color: 'var(--text-secondary)' }}>{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm card-elevated group"
                  >
                    <social.icon size={18} style={{ color: social.color }} />
                    <span style={{ color: 'var(--text-secondary)' }} className="group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                    <HiExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </motion.a>
                ))}
              </div>
              
              
            </motion.div>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Projects Built", color: "var(--accent-primary)" },
                { value: "3+", label: "Years Experience", color: "var(--accent-light)" },
                { value: "10+", label: "Technologies", color: "var(--accent-secondary)" },
                { value: "5+", label: "Leadership Roles", color: "var(--accent-primary)" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="card-elevated p-6 text-center group"
                >
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Current Focus */}
            <motion.div variants={itemVariants} className="card-elevated p-6">
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Currently Working On
              </h3>
              <div className="space-y-4">
                {[
                  "Blockchain Social Media Platform",
                  "AI-Powered Admin Panel", 
                  "Advanced Web3 Applications"
                ].map((project, index) => (
                  <div key={project} className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: 'var(--accent-primary)' }}
                    />
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {project}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div variants={itemVariants} className="card-elevated p-6">
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Recent Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-primary)' }}>
                    <span className="text-xs font-bold text-white">🏆</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                      SDE Internship at Cyber Unbound
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      Building next-gen blockchain solutions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-light)' }}>
                    <span className="text-xs font-bold text-white">🚀</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                      Upcoming Intern at Pattern Tech
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      Excited to contribute to innovative tech solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;