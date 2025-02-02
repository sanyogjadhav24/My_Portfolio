"use client";
import Image from 'next/image';
import  motion  from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React Js', logo: '/react.svg' },
      { name: 'Next Js', logo: '/nextjs.svg' },
      { name: 'HTML', logo: '/html.svg' },
      { name: 'CSS', logo: '/css.svg' },
      { name: 'JavaScript', logo: '/js.svg' },
      { name: 'Bootstrap', logo: '/bootstrap.svg' },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node JS', logo: '/nodejs.svg' },
      { name: 'Python', logo: '/python.svg' },
      { name: 'MySQL', logo: '/mysql.svg' },
      { name: 'MongoDB', logo: '/mongodb.svg' },
      { name: 'Firebase', logo: '/firebase.svg' },
      { name: 'Cloudinary', logo: '/cloudinary.svg' },
    ],
  },
  {
    category: 'ML & DS',
    technologies: [
      { name: 'Excel', logo: '/excel.svg' },
      { name: 'Python', logo: '/python.svg' },
      { name: 'Jupyter', logo: '/jupyter.svg' },
      { name: 'R', logo: '/r.svg' },
      { name: 'Numpy', logo: '/numpy.svg' },
      { name: 'Matplotlib', logo: '/matplotlib.svg' },
      { name: 'Tensorflow', logo: '/tensorflow.svg' },
    ],
  },
  {
    category: 'Others',
    technologies: [
      { name: 'Git', logo: '/git.svg' },
      { name: 'GitHub', logo: '/github.svg' },
      { name: 'Vercel', logo: '/vercel.svg' },
      { name: 'Netlify', logo: '/netlify.svg' },
      { name: 'VS Code', logo: '/vscode.svg' },
    ],
  },
];

export default function SkillsShowcase() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-10 space-y-8">
      <h1 className="text-4xl font-semibold text-white">Skills</h1>
      <p className="text-lg text-white mb-8 text-center opacity-75">
        These are some of the skills I have learned and worked with over the years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border-4 border-transparent bg-clip-border transition-all duration-300 relative overflow-hidden"
          >
            <h2 className="text-xl font-semibold text-white mb-4">{skill.category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {skill.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center bg-gray-800 p-3 rounded-lg space-x-2 hover:bg-gray-700 cursor-pointer"
                >
                  <Image src={tech.logo} alt={tech.name} width={30} height={30} />
                  {/* Hide text on mobile, show text on larger screens */}
                  <span className="hidden sm:inline-block text-white text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .bg-gray-900 {
          position: relative;
          transition: all 0.3s ease;
        }
        .bg-gray-900:hover {
          border-image: linear-gradient(45deg, #7f00ff, #e100ff) 1;
          box-shadow: 0 0 10px 3px rgba(255, 0, 255, 0.6);
        }
        .bg-clip-border {
          border: 2px solid transparent;
          background-clip: border-box;
        }
      `}</style>
    </div>
  );
}
