import React from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white dark:bg-[#020617]"
    >
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-blue-400 mb-4"
        >
          Hi, I'm Shreya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-700 dark:text-gray-300 mb-6"
        >
          A passionate Frontend Developer specializing in React & Tailwind CSS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <a
            href="/resume.pdf"
            download="Shreya_Rawat_Frontend_Developer.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 object-cover hover:scale-105 transition-transform"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
