import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer (Intern / Fresher)",
    company: "Self Projects / Learning Phase",
    duration: "2023 – Present",
    points: [
      "Built responsive web applications using React and Tailwind CSS",
      "Created reusable components and clean UI layouts",
      "Integrated APIs and handled dynamic data rendering",
      "Focused on performance, accessibility, and modern UI practices",
    ],
  },
  {
    role: "React Projects",
    company: "Personal Portfolio & Practice Projects",
    duration: "2023 – 2024",
    points: [
      "Developed portfolio website using React, Tailwind CSS & Framer Motion",
      "Built Weather App using public APIs",
      "Worked on E-commerce UI with product listing and cart features",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-50 dark:bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center
          text-slate-900 dark:text-blue-400"
        >
          Experience
        </motion.h2>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6
              bg-white dark:bg-[#020617]
              border border-slate-200 dark:border-slate-800
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10
              dark:hover:shadow-blue-400/10"
            >
              {/* Role */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {exp.role}
              </h3>

              {/* Company + Duration */}
              <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                {exp.company} • {exp.duration}
              </p>

              {/* Points */}
              <ul className="mt-4 list-disc list-inside space-y-2
              text-slate-600 dark:text-gray-300 transition-colors duration-300
              group-hover:text-slate-700 dark:group-hover:text-gray-200">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
