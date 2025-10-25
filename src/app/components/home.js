"use client";
import React from "react";

import ProfessionalNavbar from "./navbar-pro";
import BackgroundBeamsDemo from "./hero"; // Ensure the filename matches exactly
import About from "./about";
import WorkExperience from "./work_exp";
import SkillsShowcase from "./skills";
import Projects from "./projects";
import Education from "./education";
import Contact from "./contactme";
import Footer from "./footer";
import ScrollToTop from "./scroll-to-top";

const HomePage = () => {
  return (
    <div className="min-h-screen text-white" style={{ background: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <ProfessionalNavbar />

      {/* Hero Section */}
      <section id="home">
        <BackgroundBeamsDemo />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Work Experience Section */}
      <section id="experience">
        <WorkExperience />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsShowcase />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
