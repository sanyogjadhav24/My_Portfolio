"use client";
import React from "react";

import BackgroundBeamsDemo from "./hero"; // Ensure the filename matches exactly
import Projects from "./projects";
import Education from "./education";
import Contact from "./contactme";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <BackgroundBeamsDemo />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
