import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-50 dark:bg-[#020617]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-blue-400">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          I'm open to Frontend / React developer opportunities. Feel free to reach out!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-blue-600 dark:text-blue-400 text-2xl">
          <a
            href="https://linkedin.com/in/shreya-rawat-8505b5246"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/shreyarawat2001" target="_blank">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a
            href="mailto:rawatshreya9140@gmail.com"
            className="text-blue-600 hover:text-blue-500 transition text-2xl"
          >
            📧
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-slate-800 dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-700"
              } bg-white dark:bg-[#1b1b2f] text-slate-900 dark:text-white`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1 text-slate-800 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-700"
              } bg-white dark:bg-[#1b1b2f] text-slate-900 dark:text-white`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 text-slate-800 dark:text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700"
              } bg-white dark:bg-[#1b1b2f] text-slate-900 dark:text-white`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-green-500">Your message has been sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
