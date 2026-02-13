import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Snake Game",
    description: "Classic Snake Game built using JavaScript with dynamic grid rendering, keyboard controls, score tracking, and collision detection..",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/shreyarawat2001/snake-game",
  },
  {
    title: "Weather Application",
    description: "A modern and responsive Weather Forecast Application built with React + Vite + Tailwind CSS that allows users to check real-time weather information using the OpenWeather API.",
    tech: "React, Tailwind CSS",
     github: "https://github.com/shreyarawat2001/weather-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-50 dark:bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-slate-900 dark:text-blue-400"
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-white dark:bg-[#020617]
                p-6 rounded-2xl shadow-lg
                border border-slate-200 dark:border-slate-800
                hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {proj.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-4">
                {proj.description}
              </p>
              <p className="text-blue-600 dark:text-blue-400 text-sm">
                <strong>Tech:</strong> {proj.tech}
              </p>

              <div className="flex gap-3">
                <a 
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition "
                >View Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
