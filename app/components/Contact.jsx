// components/Contact.js
'use client'
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-darkBg text-primary">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me through the form below.
        </p>
        {/* Add a simple form */}
      </motion.div>
    </section>
  );
}
