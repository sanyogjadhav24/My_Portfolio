"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTrendingUp, FiLayers, FiTool, FiZap } from "react-icons/fi";
import { useState } from "react";

const skills = [
  {
    category: "Frontend Development",
    icon: <FiCode className="w-6 h-6" />,
    color: "#3B82F6",
    description: "Building responsive and interactive user interfaces",
    technologies: [
      { name: "React.js", logo: "react.svg", proficiency: 90 },
      { name: "Next.js", logo: "nextjs.svg", proficiency: 85 },
      { name: "JavaScript", logo: "js.svg", proficiency: 88 },
      { name: "HTML5", logo: "html.svg", proficiency: 95 },
      { name: "CSS3", logo: "css.svg", proficiency: 92 },
      { name: "Tailwind CSS", logo: "bootstrap.svg", proficiency: 85 },
    ],
  },
  {
    category: "Backend Development",
    icon: <FiDatabase className="w-6 h-6" />,
    color: "#10B981",
    description: "Server-side development and database management",
    technologies: [
      { name: "Node.js", logo: "nodejs.svg", proficiency: 85 },
      { name: "Python", logo: "python.svg", proficiency: 80 },
      { name: "MongoDB", logo: "mongodb.svg", proficiency: 82 },
      { name: "MySQL", logo: "mysql.svg", proficiency: 78 },
      { name: "Firebase", logo: "firebase.svg", proficiency: 88 },
      { name: "REST APIs", logo: "cloudinary.svg", proficiency: 85 },
    ],
  },
  {
    category: "Data Science & ML",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "#8B5CF6",
    description: "Machine learning and data analysis",
    technologies: [
      { name: "Python", logo: "python.svg", proficiency: 80 },
      { name: "TensorFlow", logo: "tensorflow.svg", proficiency: 75 },
      { name: "Jupyter", logo: "jupyter.svg", proficiency: 85 },
      { name: "NumPy", logo: "numpy.svg", proficiency: 82 },
      { name: "Matplotlib", logo: "matplotlib.svg", proficiency: 78 },
      { name: "R", logo: "r.svg", proficiency: 70 },
    ],
  },
  {
    category: "Blockchain & Web3",
    icon: <FiLayers className="w-6 h-6" />,
    color: "#F59E0B",
    description: "Decentralized applications and smart contracts",
    technologies: [
      { name: "Solidity", logo: "solidity.svg", proficiency: 75 },
      { name: "Web3.js", logo: "web3.svg", proficiency: 78 },
      { name: "Ethereum", logo: "ethereum.svg", proficiency: 80 },
      { name: "IPFS", logo: "ipfs.svg", proficiency: 72 },
      { name: "MetaMask", logo: "metamask.svg", proficiency: 85 },
      { name: "Smart Contracts", logo: "contract.svg", proficiency: 75 },
    ],
  },
  {
    category: "Development Tools",
    icon: <FiTool className="w-6 h-6" />,
    color: "#EF4444",
    description: "Version control and deployment platforms",
    technologies: [
      { name: "Git", logo: "git.svg", proficiency: 90 },
      { name: "GitHub", logo: "github.svg", proficiency: 92 },
      { name: "VS Code", logo: "vscode.svg", proficiency: 95 },
      { name: "Vercel", logo: "vercel.svg", proficiency: 85 },
      { name: "Netlify", logo: "netlify.svg", proficiency: 80 },
    ],
  },
];

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

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
            <FiZap 
              className="w-5 h-5" 
              style={{ color: 'var(--accent-primary)' }} 
            />
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Technical Expertise
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills & Technologies
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A comprehensive toolkit of modern technologies mastered through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm overflow-hidden"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${skillCategory.color}20 0%, transparent 100%)`
                }}
              />

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: skillCategory.color + '15',
                      color: skillCategory.color
                    }}
                  >
                    {skillCategory.icon}
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {skillCategory.category}
                    </h3>
                  </div>
                </div>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {skillCategory.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative z-10 space-y-3">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer group/tech"
                    style={{ background: 'var(--bg-secondary)' }}
                    onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image 
                          src={`/${tech.logo}`} 
                          alt={tech.name} 
                          width={24} 
                          height={24} 
                          unoptimized={true}
                          className="transition-transform duration-200 group-hover/tech:scale-110"
                        />
                        {hoveredTech === `${categoryIndex}-${techIndex}` && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -inset-1 rounded-full border-2"
                            style={{ borderColor: skillCategory.color }}
                          />
                        )}
                      </div>
                      <span 
                        className="font-medium text-sm"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {tech.name}
                      </span>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-16 h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'var(--bg-tertiary)' }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: skillCategory.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                        />
                      </div>
                      <span 
                        className="text-xs font-semibold min-w-[2rem] text-right"
                        style={{ color: skillCategory.color }}
                      >
                        {tech.proficiency}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Technologies", value: "25+" },
              { label: "Categories", value: "5+" },
              { label: "Years Learning", value: "4+" },
              { label: "Projects Built", value: "15+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl border"
                style={{ 
                  background: 'var(--bg-elevated)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div 
                  className="text-2xl font-bold mb-1"
                  style={{ color: 'var(--accent-primary)' }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
