import React from "react";
import { motion } from "framer-motion";

// Education data
const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science in Artificial Intelligence",
    institution: "Babu Banarasi das University, Lucknow",
    duration: "2022 – 2025",
    details: [
      "Studied core subjects like DBMS, OOPs, Data Structures & Algorithms",
      "Gained strong foundation in programming and software development",
      "Worked on frontend projects using React and Tailwind CSS",
    ],
  },
  {
    degree: "Diploma",
    field: "Civil Engineering",
    institution: "Government Polytechnic Baccharawan, Raebareli",
    duration: "2019 – 2022",
    details: [
      "Studied core civil engineering subjects such as Surveying, RCC, Structural Engineering, and Construction Planning",
      "Learned basics of AutoCAD and technical drawing for building plans",
      "Gained practical knowledge of site work, material testing, and construction methods",
      "Understood safety standards, quality control, and project documentation",
    ],
  },
  {
    degree: "Higher Secondary (12th)",
    field: "Science Stream",
    institution: "KNICE, Sultanpur (UP)",
    duration: "2018 – 2019",
    details: [
      "Focused on Mathematics and Science fundamentals",
      "Developed logical thinking and problem-solving skills",
    ],
  },
  {
    degree: "Secondary (10th)",
    field: "General Studies",
    institution: "KNICE, Sultanpur (UP)",
    duration: "2016 – 2017",
    details: [
      "Completed CBSE curriculum with focus on Mathematics, Science, and English",
      "Developed strong foundation in problem-solving and analytical thinking",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-slate-50 dark:bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-blue-400"
        >
          Education
        </motion.h2>

        {/* Education cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800
              transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                {edu.field}
              </p>
              <p className="text-sm text-slate-500 dark:text-gray-400">
                {edu.institution}
              </p>
              <p className="text-sm text-slate-500 dark:text-gray-400">
                {edu.duration}
              </p>

              {edu.details && edu.details.length > 0 && (
                <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
