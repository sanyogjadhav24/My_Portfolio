"use client";
import React from "react";
import { FloatingNav}  from "@/components/ui/floating-nav";
import { FaHome, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaRoute } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Journey",
      link: "/journey",
      icon: <FaRoute className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "/edu",
      icon: <FaGraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaEnvelope className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems.map(item => ({
        ...item,
        link: <Link href={item.link}>{item.icon}</Link>, // Use Next.js Link
      }))} />
    </div>
  );
}
