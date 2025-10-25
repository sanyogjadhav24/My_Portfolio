"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundBeamsDemo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Pre-calculate all useTransform hooks to avoid conditional hook usage
  const mouseFollower1X = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const mouseFollower1Y = useTransform(smoothMouseY, [-1, 1], [-50, 50]);
  const mouseFollower2X = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const mouseFollower2Y = useTransform(smoothMouseY, [-1, 1], [30, -30]);
  const parallaxX = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const [mounted, setMounted] = useState(false);

  // Static values to prevent hydration mismatch
  const staticParticlePositions = [
    { left: 23, top: 15 },
    { left: 67, top: 45 },
    { left: 89, top: 78 },
    { left: 12, top: 62 },
    { left: 56, top: 23 },
    { left: 78, top: 88 },
    { left: 34, top: 56 },
    { left: 91, top: 12 }
  ];

  const staticAnimationValues = [
    { x: 15, duration: 6, delay: 0.5 },
    { x: -12, duration: 7, delay: 1.2 },
    { x: 8, duration: 5, delay: 0.8 },
    { x: -18, duration: 8, delay: 0.3 },
    { x: 22, duration: 6.5, delay: 1.5 },
    { x: -8, duration: 7.5, delay: 0.9 },
    { x: 14, duration: 5.5, delay: 1.8 },
    { x: -16, duration: 6.8, delay: 0.6 }
  ];

  const staticCodePositions = [62.8, 53.7, 25.5, 61.9, 35.4, 47.9];
  const staticCodeDurations = [8.2, 9.5, 7.8, 10.2, 8.9, 9.1];

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1
      mouseX.set((clientX - innerWidth / 2) / (innerWidth / 2));
      mouseY.set((clientY - innerHeight / 2) / (innerHeight / 2));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased overflow-hidden px-6 lg:px-8" style={{ background: 'var(--bg-primary)' }}>
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--accent-primary)15 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--accent-secondary)10 0%, transparent 70%)',
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--text-muted)',
              left: `${staticParticlePositions[i].left}%`,
              top: `${staticParticlePositions[i].top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, staticAnimationValues[i].x, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: staticAnimationValues[i].duration,
              repeat: Infinity,
              delay: staticAnimationValues[i].delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--border-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={0}
              y1={100 + i * 150}
              x2="100%"
              y2={200 + i * 100}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Floating Code Elements */}
        {['{}', '</>', '[]', '()', '&&', '=>'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${staticCodePositions[i]}%`,
              color: 'var(--text-muted)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: staticCodeDurations[i],
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Pulse Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-96 h-96 rounded-full border"
            style={{ borderColor: 'var(--accent-primary)' }}
          />
        </motion.div>

        {/* Interactive Mouse Followers */}
        {mounted && (
          <>
            <motion.div
              className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, var(--accent-primary)08 0%, transparent 70%)',
                x: mouseFollower1X,
                y: mouseFollower1Y,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <motion.div
              className="absolute w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, var(--accent-secondary)12 0%, transparent 70%)',
                x: mouseFollower2X,
                y: mouseFollower2Y,
                left: '60%',
                top: '40%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </>
        )}

        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            x: parallaxX,
            y: parallaxY
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 rounded-full"
              style={{
                background: `linear-gradient(180deg, var(--accent-primary)40 0%, transparent 100%)`,
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                transform: `rotate(${15 + i * 30}deg)`
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-24 flex flex-col lg:flex-row items-center lg:items-start w-full gap-16 relative z-10">
        
        {/* Mobile Image Section - Fixed Visibility */}
        <motion.div 
          className="md:hidden flex justify-center mb-6 w-full relative z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-10, 10, -10] 
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
        <div className="md:w-2/3 text-center md:text-left relative">
          {/* Subtle Background for Text */}
          <motion.div
            className="absolute -inset-4 rounded-2xl opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-secondary) 100%)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.h1 
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-sans font-bold"
            style={{ color: 'var(--text-primary)' }}
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
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              Hello, I am
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block mt-2"
              style={{
                background: `linear-gradient(135deg, var(--accent-primary) 0%, var(--text-primary) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Sanyog Jadhav
            </motion.span>
          </motion.h1>

          {/* Animated Title Underline */}
          <motion.div
            className="h-1 rounded-full mt-4 mx-auto md:mx-0"
            style={{
              background: `linear-gradient(90deg, var(--accent-primary) 0%, transparent 100%)`,
              width: '60%'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />

          {/* Full Paragraph Section - Preserved Content */}
          <motion.p 
            className="max-w-2xl my-6 sm:my-8 text-sm sm:text-base md:text-lg relative z-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            As a dedicated Full Stack Developer, I specialize in crafting scalable and efficient solutions to complex technical challenges. 
            With a deep understanding of front-end and back-end technologies, I seamlessly integrate innovation with functionality 
            to build high-performance applications. My focus remains on precision, optimization, and delivering robust, user-centric solutions.
          </motion.p>

          {/* Resume Button Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center sm:justify-start items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.a
              href="/Sanyog Jadhav_VIT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden group"
              style={{ 
                background: 'var(--accent-primary)',
                color: 'white'
              }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)`
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                }}
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </motion.a>

            <motion.button
              className="px-6 py-3 rounded-xl font-medium text-sm sm:text-base border transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: 'var(--border-primary)',
                color: 'var(--text-secondary)',
                background: 'var(--bg-elevated)'
              }}
              whileHover={{ 
                scale: 1.02,
                y: -1,
                borderColor: 'var(--accent-primary)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
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

    </div>
  );
}
