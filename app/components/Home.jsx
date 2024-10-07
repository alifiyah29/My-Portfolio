'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        background: 'linear-gradient(to right, #CAD2C5, #84A98C, #52796F, #354F52, #2F3E46)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Scroll down to explore more about me</p>
      </motion.div>
    </section>
  );
}
