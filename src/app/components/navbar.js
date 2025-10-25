"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sanyogjadhav24", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sanyogjadhav24", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/sanyogjadhav24", label: "Twitter" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    const handleSectionObserver = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionObserver);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionObserver);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md border-b"
            : "bg-transparent"
        }`}
        style={{
          background: scrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
          borderColor: scrolled ? 'var(--border-primary)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection("#home")}
                className="text-xl font-bold text-gradient"
              >
                Sanyog Jadhav
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                    style={{
                      background: activeSection === item.href.substring(1) 
                        ? 'var(--accent-primary)' 
                        : 'transparent',
                      color: activeSection === item.href.substring(1)
                        ? 'white'
                        : 'var(--text-secondary)'
                    }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/10 transition-colors duration-200"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "bg-purple-500/20 text-purple-300 border-l-4 border-purple-500"
                        : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-6 pt-4 pb-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;