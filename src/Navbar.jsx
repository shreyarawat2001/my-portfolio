import React, { useState, useEffect } from "react";


const sections = ["home", "about", "skills", "projects", "experience", "education", "hobbies", "contact"];

const Navbar = ({ dark, setDark }) => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // Offset for fixed navbar

      let currentActive = "home"; // default

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          currentActive = sec;
        }
      }

      // Ensure "contact" is active at bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentActive = "contact";
      }

      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Shreya</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`capitalize transition
                ${active === sec
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-gray-300 hover:text-blue-500"
                }`}
            >
              {sec}
            </a>
          ))}


          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 rounded-full bg-blue-600 text-white text-sm"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#020617] px-6 pb-4">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setOpen(false)}
              className={`block py-2 capitalize
                ${active === sec
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-gray-300"
                }`}
            >
              {sec}
            </a>
          ))}
          <div className="mt-3">
          </div>
          <button
            onClick={() => {
              setDark(!dark);
              setOpen(false);
            }}
            className="mt-3 px-4 py-2 rounded-full bg-blue-600 text-white text-sm"
          >
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
