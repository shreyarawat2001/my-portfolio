import React from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile1.jpeg"; // your profile image

const timeline = [
  { year: "2023", event: "Started learning Frontend Development" },
  { year: "2024", event: "Built personal portfolio & practice projects" },
  { year: "2025", event: "Seeking opportunities as Frontend Developer" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-slate-50 dark:bg-[#020617]"
    >
      {/* Left side: text & timeline */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-1/2 max-w-2xl text-center md:text-left"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-blue-400"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
        >
          Hi, I’m{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Shreya
          </span>
          , a passionate <strong>Frontend Web Developer</strong> who loves
          building clean, responsive, and user-friendly web interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
        >
          I specialize in <strong>React</strong> and <strong>Tailwind CSS</strong>, 
          focusing on modern UI, performance, and accessibility.
        </motion.p>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex flex-col md:flex-row md:justify-between gap-6"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center md:w-1/4 text-center"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                {item.year}
              </span>
              <span className="text-slate-700 dark:text-gray-300 mt-2">{item.event}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
        >
          {["React", "Tailwind CSS", "Responsive UI", "Framer Motion"].map((item) => (
            <span
              key={item}
              className="px-5 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Download CV button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-8 flex justify-center md:justify-start"
        >
          <a
            href="/resume.pdf"
            download="Shreya_Rawat_Frontend_Developer.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right side: profile image with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -15, 0] }} // floating effect
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center p-6 md:p-12"
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

export default About;
