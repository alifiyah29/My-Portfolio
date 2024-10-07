// components/Projects.js
'use client'
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-[#52796F] text-darkText">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-lg">
          Here are some of my favorite projects that I've worked on.
        </p>
      </motion.div>
    </section>
  );
}
