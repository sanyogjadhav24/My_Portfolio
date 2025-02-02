"use client";
import React from "react";

import {BackgroundBeamsDemo} from "./hero";
import Projects from "./projects";
import Education from "./education";
import Contact from "./contactme";
import Footer from "./footer";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black-900 text-white">
      {/* Hero Section */}
      <section className="bg-black">
     <BackgroundBeamsDemo/>
  
        <Projects/>
      {/* Skills Section */}
      
  

      {/* Projects Section */}
   
      <Education/>
      {/* Contact Section */}

      <Contact/>

      <Footer/>
      </section>
     
    </div>
    
  );
};

export default HomePage;
