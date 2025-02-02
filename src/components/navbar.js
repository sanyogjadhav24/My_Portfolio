"use client";
import React from "react";
import  FloatingNav from "@/components/ui/floating-nav";
import { FaHome, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaRoute } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
   
      icon: <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Journey",
 
      icon: <FaRoute className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",

      icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
    
      icon: <FaGraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
    
      icon: <FaEnvelope className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
     <FloatingNav/>
    </div>
  );
}
