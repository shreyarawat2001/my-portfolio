import React from "react";
import { motion } from "framer-motion";

const hobbies = [
  { name: "Reading", emoji: "📚" },
  { name: "Coding", emoji: "💻" },
  { name: "Music", emoji: "🎵" },
  { name: "Traveling", emoji: "✈️" },
  { name: "Photography", emoji: "📸" },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
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
          Hobbies & Interests
        </motion.h2>

        {/* Hobby Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                group flex flex-col items-center justify-center
                bg-white dark:bg-[#1f1f2e]
                border border-slate-200 dark:border-slate-800
                rounded-2xl p-6 shadow-lg
                hover:-translate-y-2 hover:shadow-xl
                hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10
                transition-all duration-300
              "
            >
              <span className="text-5xl mb-4">{hobby.emoji}</span>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {hobby.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
