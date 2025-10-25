"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiCalendar, FiCode, FiLayers } from "react-icons/fi";
import { HiOutlineChip, HiOutlineGlobeAlt } from "react-icons/hi";

const projects = [
  // BLOCKCHAIN
  {
    title: "Decentralized Social Media Platform",
    description: "A Web3 social media platform featuring IPFS for decentralized storage, Lit Protocol for encryption/decryption, post randomization algorithms, wallet authentication, zero-knowledge proof login, and semantic content analysis.",
    category: "BLOCKCHAIN",
    tech: ["React", "IPFS", "Lit Protocol", "Web3", "ZKP", "Solidity", "Ethereum"],
    github: "#",
    demo: "#",
    status: "In Development",
    date: "2024",
    featured: true,
    complexity: "Advanced"
  },
  {
    title: "Campaign Fundraiser DApp",
    description: "A decentralized crowdfunding platform built on blockchain with smart contracts for transparent fund management, milestone-based releases, contributor verification, and automated fund distribution.",
    category: "BLOCKCHAIN",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "IPFS"],
    github: "#",
    demo: "#",
    status: "Completed",
    date: "2024",
    featured: true,
    complexity: "Advanced"
  },
  {
    title: "Alumni Verification Platform",
    description: "A blockchain-based verification system for alumni credentials using smart contracts for immutable record keeping, decentralized identity verification, and tamper-proof certificate validation.",
    category: "BLOCKCHAIN",
    tech: ["Solidity", "Web3", "React", "Ethereum", "Digital Certificates", "DID"],
    github: "#",
    demo: "#",
    status: "Completed",
    date: "2024",
    featured: false,
    complexity: "Intermediate"
  },
  {
    title: "Krushi Sarjana",
    description: "A comprehensive farmer-to-consumer platform featuring multilingual voice assistant, blockchain-based security to eliminate middlemen, and ML models for crop price and profit prediction. Empowers farmers with direct market access.",
    category: "BLOCKCHAIN",
    tech: ["Blockchain", "React", "ML Models", "Voice Assistant", "Multilingual AI", "Smart Contracts"],
    github: "#",
    demo: "#",
    status: "Completed",
    date: "2024",
    featured: true,
    complexity: "Advanced"
  },

  // WEB APP'S
  {
    title: "TaleCademy",
    description: "A platform for interactive storytelling and immersive learning experiences with AI-powered content generation and real-time collaboration features.",
    category: "WEB APP'S",
    tech: ["Next.js", "Firebase", "Cloudinary", "Generative AI"],
    github: "https://github.com/sanyogjadhav24/TaleCademy",
    demo: "#",
    status: "Completed",
    date: "2024",
    featured: true,
    complexity: "Advanced"
  },
  {
    title: "URL Shortener",
    description: "A simple and efficient URL shortening service with comprehensive analytics, custom aliases, and click tracking dashboard.",
    category: "WEB APP'S",
    tech: ["Node.js", "Firebase", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/sanyogjadhav24/URL_Shortner",
    demo: "#",
    status: "Completed",
    date: "2024",
    featured: false,
    complexity: "Intermediate"
  },
  {
    title: "Live Code Editor",
    description: "A real-time code editor supporting HTML, CSS, and JavaScript with AI assistance.",
    category: "WEB APP'S",
    tech: ["JQuery", "Firebase", "Tailwind CSS", "Html & Css"],
    link: "https://github.com/sanyogjadhav24/Live-Code-Editor"
  },
  {
    title: "EV Charging Station",
    description: "A web-based project for locating and managing EV charging stations.",
    category: "WEB APP'S",
    tech: ["Html & Css", "Python", "MySql"],
    link: "#"
  },

  // Data Structure
  {
    title: "Mutual Connection",
    description: "A data structure-based project using BFS algorithm to efficiently match users with similar interests.",
    category: "Data Structure",
    tech: ["React", "JavaScript", "BFS Algorithm"],
    link: "https://github.com/sanyogjadhav24/MutualConnection"
  },
  {
    title: "Converge",
    description: "Smart hackathon team formation platform that matches participants based on skills and technical background. Features hackathon event discovery, competition finder, and intelligent team recommendations for optimal collaboration.",
    category: "WEB APP'S",
    tech: ["React", "Node.js", "MongoDB", "ML Algorithms", "Firebase", "Recommendation System"],
    link: "#"
  },

  // MACHINE LEARNING
  {
    title: "GestureX",
    description: "A multi-functional hand gesture recognition system with modules for virtual mouse control, a magic canvas, and gesture-based command execution.",
    category: "MACHINE LEARNING",
    tech: ["Python", "OpenCV", "Mediapipe", "NumPy", "PyAutoGUI"],
    link: "#"
  },

  // IOT
  {
    title: "Smart Gloves",
    description: "An IoT-enabled glove that assists disabled individuals in controlling devices and interacting with their environment.",
    category: "IOT",
    tech: ["Arduino", "Bluetooth", "Sensors"],
    link: "#"
  },

  // MOBILE APPS
  {
    title: "GuideME",
    description: "A mobile application providing real-time counselling app.",
    category: "MOBILE APPS",
    tech: ["React Native", "HyGraph", "Clerk"],
    link: "#"
  }
];

const categories = [
  { id: "ALL", name: "All Projects", icon: <FiLayers className="w-4 h-4" /> },
  { id: "BLOCKCHAIN", name: "Blockchain", icon: <HiOutlineChip className="w-4 h-4" /> },
  { id: "WEB APP'S", name: "Web Apps", icon: <HiOutlineGlobeAlt className="w-4 h-4" /> },
  { id: "MACHINE LEARNING", name: "ML & AI", icon: <FiCode className="w-4 h-4" /> },
  { id: "Data Structure", name: "Algorithms", icon: <FiFolder className="w-4 h-4" /> },
  { id: "IOT", name: "IoT", icon: <HiOutlineChip className="w-4 h-4" /> },
  { id: "MOBILE APPS", name: "Mobile", icon: <FiFolder className="w-4 h-4" /> }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "#10B981";
      case "In Development": return "#F59E0B";
      case "Planning": return "#8B5CF6";
      default: return "#6B7280";
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case "Advanced": return "#EF4444";
      case "Intermediate": return "#F59E0B";
      case "Beginner": return "#10B981";
      default: return "#6B7280";
    }
  };

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FiFolder 
              className="w-5 h-5" 
              style={{ color: 'var(--accent-primary)' }} 
            />
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Portfolio Showcase
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore my diverse portfolio spanning blockchain development, web applications, machine learning, 
            and innovative solutions that demonstrate technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Featured Projects Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Projects", value: projects.length, icon: <FiFolder className="w-4 h-4" /> },
            { label: "Technologies", value: "25+", icon: <FiCode className="w-4 h-4" /> },
            { label: "Categories", value: "6", icon: <FiLayers className="w-4 h-4" /> },
            { label: "Featured", value: featuredProjects.length, icon: <FiStar className="w-4 h-4" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="text-center p-4 rounded-xl border"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div 
                className="inline-flex items-center justify-center mb-2"
                style={{ color: 'var(--accent-primary)' }}
              >
                {stat.icon}
              </div>
              <div 
                className="text-xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                category.id === selectedCategory
                  ? "shadow-lg"
                  : "hover:shadow-md"
              }`}
              style={{
                background: category.id === selectedCategory 
                  ? 'var(--accent-primary)' 
                  : 'var(--bg-elevated)',
                color: category.id === selectedCategory 
                  ? 'white' 
                  : 'var(--text-secondary)',
                borderColor: category.id === selectedCategory 
                  ? 'var(--accent-primary)' 
                  : 'var(--border-primary)'
              }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {selectedCategory === "ALL" ? "All Projects" : categories.find(c => c.id === selectedCategory)?.name}
            <span 
              className="text-sm font-normal px-3 py-1 rounded-full"
              style={{ 
                background: 'var(--accent-primary)' + '15',
                color: 'var(--accent-primary)'
              }}
            >
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm overflow-hidden"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold" style={{
                  background: '#F59E0B15',
                  color: '#F59E0B'
                }}>
                  <FiStar className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Status and Complexity Indicators */}
              <div className="flex items-center gap-2 mb-4">
                <span 
                  className="px-2 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: getStatusColor(project.status) + '15',
                    color: getStatusColor(project.status)
                  }}
                >
                  {project.status}
                </span>
                <span 
                  className="px-2 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: getComplexityColor(project.complexity) + '15',
                    color: getComplexityColor(project.complexity)
                  }}
                >
                  {project.complexity}
                </span>
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 
                    className="text-xl font-bold group-hover:text-blue-400 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <FiCalendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
                
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                      style={{ 
                        background: 'var(--accent-primary)' + '10',
                        color: 'var(--accent-primary)',
                        border: `1px solid var(--accent-primary)25`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span 
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{ 
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.github && project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                    style={{ 
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
                
                {project.demo && project.demo !== "#" && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                    style={{ 
                      background: 'var(--accent-primary)',
                      color: 'white'
                    }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'var(--accent-primary)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiFolder className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
            <p style={{ color: 'var(--text-secondary)' }}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
