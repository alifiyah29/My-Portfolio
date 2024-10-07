"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white relative"
      style={{
        background:
          "linear-gradient(to right, #CAD2C5, #84A98C, #52796F, #354F52, #2F3E46)",
      }}
    >
      {/* Top Left Animation */}
      <div className="absolute top-4 left-4">
        <iframe
          src="https://lottie.host/embed/735428c2-a2f6-4256-9e32-7935aa734307/tJjYKAKL3o.json"
          width="500"
          height="500"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Centered Name and Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Name with Highlight and Motion */}
        <motion.h1
          className="text-6xl font-bold mb-8" // Increased font size and margin
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }} // Added motion effect
          transition={{ duration: 0.8 }} // Motion transition
        >
          Alifiyah Shahid
        </motion.h1>

        {/* Tagline */}
        <h2 className="text-2xl mt-8 font-bold">
          {" "}
          {/* Increased font size and margin */}
          Software Engineer and Full-Stack Wizard!
        </h2>

        {/* Summary */}
        <p className="mt-6 text-lg max-w-xl mx-auto">
          {" "}
          {/* Increased margin */}
          Dive into my portfolio to see my spellbinding work and let us conjure
          up something amazing together!
        </p>
      </motion.div>

      {/* Bottom Right Animation */}
      <div className="absolute bottom-4 right-4">
        <iframe
          src="https://lottie.host/embed/9baf35c6-25b0-4050-87bb-d572cf46609f/KKfZ0WQTEP.json"
          width="500"
          height="500"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
