// components/Footer.js
"use client";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8">
          <Link href="https://www.linkedin.com/in/sanyog-jadhav-295154258/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-cyan-400 hover:text-cyan-600 text-3xl transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com/sanyog_jadhav_2424?igsh=MXN1aWFkbWhvN2l6dg%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-cyan-400 hover:text-cyan-600 text-3xl transition duration-300" />
          </Link>
          <Link href="https://github.com/sanyogjadhav24" target="_blank" aria-label="GitHub">
            <FaGithub className="text-cyan-400 hover:text-cyan-600 text-3xl transition duration-300" />
          </Link>
        </div>
        <p className="mt-4 text-gray-400 text-sm">© 2025 Sanyog Jadhav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
