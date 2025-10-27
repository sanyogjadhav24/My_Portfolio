"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare, FiUser, FiCheck } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "jadhavsanyog.400@gmail.com",
      href: "mailto:jadhavsanyog.400@gmail.com"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8600596593",
      href: "tel:+918600596593"
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/sanyog-jadhav-295154258/",
      color: "#0A66C2"
    },
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      label: "GitHub", 
      href: "https://github.com/sanyogjadhav24",
      color: "#333"
    },
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      label: "Twitter", 
      href: "https://twitter.com/sanyogjadhav24",
      color: "#1DA1F2"
    }
  ];

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.5
      },
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FiMessageSquare 
              className="w-5 h-5" 
              style={{ color: 'var(--accent-primary)' }} 
            />
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Get In Touch
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Work Together
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <div style={{ color: 'var(--accent-primary)' }}>
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <p 
                      className="text-sm font-medium mb-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p 
                        className="font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-xl border"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg transition-all duration-200"
                    style={{ background: 'var(--bg-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color + '15';
                      e.currentTarget.style.color = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div 
              className="p-8 rounded-2xl border backdrop-blur-sm"
              style={{ 
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: '#10B981' + '20' }}
                  >
                    <FiCheck className="w-8 h-8" style={{ color: '#10B981' }} />
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 
                    className="text-2xl font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Send me a message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={inputVariants}>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium mb-2"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <FiUser className="w-4 h-4 inline mr-2" />
                          Your Name
                        </label>
                        <motion.input
                          whileFocus="focus"
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                          style={{ 
                            background: 'var(--bg-secondary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--accent-primary)';
                            e.target.style.boxShadow = '0 0 0 3px var(--accent-primary)25';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--border-primary)';
                            e.target.style.boxShadow = 'none';
                          }}
                          required
                        />
                      </motion.div>

                      <motion.div variants={inputVariants}>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium mb-2"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <FiMail className="w-4 h-4 inline mr-2" />
                          Email Address
                        </label>
                        <motion.input
                          whileFocus="focus"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                          style={{ 
                            background: 'var(--bg-secondary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--accent-primary)';
                            e.target.style.boxShadow = '0 0 0 3px var(--accent-primary)25';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--border-primary)';
                            e.target.style.boxShadow = 'none';
                          }}
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={inputVariants}>
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <FiMessageSquare className="w-4 h-4 inline mr-2" />
                        Your Message
                      </label>
                      <motion.textarea
                        whileFocus="focus"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full p-4 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                        style={{ 
                          background: 'var(--bg-secondary)',
                          borderColor: 'var(--border-primary)',
                          color: 'var(--text-primary)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-primary)';
                          e.target.style.boxShadow = '0 0 0 3px var(--accent-primary)25';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-primary)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Tell me about your project or just say hello!"
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSending}
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                        isSending ? 'cursor-not-allowed opacity-70' : 'hover:shadow-lg'
                      }`}
                      style={{ 
                        background: 'var(--accent-primary)',
                        color: 'white'
                      }}
                    >
                      {isSending ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <FiSend className="w-4 h-4" />
                      )}
                      {isSending ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
