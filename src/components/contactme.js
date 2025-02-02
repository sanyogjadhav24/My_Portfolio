"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_k5upk69", // Your EmailJS service ID
        "template_hreecll", // Your EmailJS template ID
        e.target,
        "cbT0eMclbErfe7DN9" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error(error.text);
          alert("Error sending message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  return (
    <section className="min-h-screen bg-black/90 py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-12 mb-16">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center bg-gray-900/80 p-8 rounded-xl shadow-lg text-gray-100 w-full md:w-1/3"
            >
              <FiMail className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">jadhavsanyog.400@gmail.com</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center bg-gray-900/80 p-8 rounded-xl shadow-lg text-gray-100 w-full md:w-1/3"
            >
              <FiPhone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91 8600596593</p>
            </motion.div>
            <motion.div
  variants={itemVariants}
  className="flex flex-col items-center bg-gray-900/80 p-8 rounded-xl shadow-lg text-gray-100 w-full md:w-1/3 mt-8" // Added mt-8
>
  <FiMapPin className="w-12 h-12 text-cyan-400 mb-4" />
  <h3 className="text-xl font-semibold mb-2">Location</h3>
  <p className="text-gray-400">Pune, Maharashtra, India</p>
</motion.div>

          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/80 p-8 rounded-xl shadow-lg text-gray-100"
          >
            <h3 className="text-3xl font-semibold text-cyan-400 mb-6 text-center">
              Send Me a Message
            </h3>
            {isSubmitted ? (
              <p className="text-center text-green-400">Your message has been sent!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800/60 text-gray-200 p-4 rounded-lg border-2 border-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800/60 text-gray-200 p-4 rounded-lg border-2 border-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800/60 text-gray-200 p-4 rounded-lg border-2 border-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
