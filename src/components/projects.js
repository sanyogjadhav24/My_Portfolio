"use client";
import  motion  from "framer-motion";
import useState from "react";

const projects = [
  // DIGITAL FORENSICS

  // WEB APP'S
  {
    title: "TaleCademy",
    description: "A platform for interactive storytelling and immersive learning experiences.",
    category: "WEB APP'S",
    tech: ["Next.js", "Firebase", "Cloudinary", "Generative AI"],
    link: "https://github.com/sanyogjadhav24/TaleCademy"
  },
  {
    title: "URL Shortener",
    description: "A simple and efficient URL shortening service with analytics support.",
    category: "WEB APP'S",
    tech: ["Node.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/sanyogjadhav24/URL_Shortner"
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

const categories = ["ALL", "WEB APP'S", "Data Structure", "MACHINE LEARNING",  "IOT", "MOBILE APPS"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-transparent text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ">
            Projects
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Explore my diverse portfolio spanning web development, machine learning,
            and digital forensics. Each project demonstrates technical expertise and
            innovative problem-solving.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                category === selectedCategory
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-20 before:h-1 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 hover:before:w-24 before:transition-all"
        >
          {selectedCategory === "ALL" ? "Featured Projects" : selectedCategory}
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all group relative overflow-hidden"
              >
                {/* Separate link for each card */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-0" />

                {/* Inner content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-900 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-300">No projects found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
