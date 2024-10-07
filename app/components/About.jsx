// components/About.js
"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#84A98C] text-darkText"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I'm a web developer passionate about creating dynamic and engaging
          user experiences.
        </p>
      </motion.div>
    </section>
  );
}
