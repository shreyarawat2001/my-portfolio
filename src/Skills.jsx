
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Framer Motion", level: 75 },
    { name: "Git", level: 70 },
    { name: "GitHub", level: 70 },
  ];

  const programmingSkills = ["DSA", "OOPs", "SQL", "DBMS"];

  return (
    <section
      id="skills"
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
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              group rounded-2xl p-6
              bg-white dark:bg-[#020617]
              border border-slate-200 dark:border-slate-800
              shadow-lg transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10
              dark:hover:shadow-blue-400/10
            "
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm font-medium text-slate-700 dark:text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Programming Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              group rounded-2xl p-6
              bg-white dark:bg-[#020617]
              border border-slate-200 dark:border-slate-800
              shadow-lg transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10
              dark:hover:shadow-blue-400/10
            "
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Programming Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {programmingSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="
                    px-4 py-2 rounded-full text-sm
                    bg-slate-200 text-slate-800
                    dark:bg-zinc-800 dark:text-white
                    transition-all duration-300
                    hover:bg-blue-500 hover:text-white
                    dark:hover:bg-blue-500 dark:hover:text-white
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
