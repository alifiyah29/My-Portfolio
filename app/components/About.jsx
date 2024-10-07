"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // For linking buttons to other pages

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#84A98C] text-darkText py-10 relative"
    >
      {/* Left Side Buttons */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {[
          { name: "Education", link: "/education" },
          { name: "Experience", link: "/experience" },
          { name: "Recent Work", link: "/recent-work" },
          { name: "Skills", link: "/skills" },
          { name: "Achievements", link: "/achievements" },
          { name: "Hobbies", link: "/hobbies" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="bg-[#52796F] hover:bg-[#354F52] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Profile Picture and Summary in the Center */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-8"
      >
        {/* Profile Picture */}
        <div className="rounded-full overflow-hidden border-4 border-white w-40 h-40 mb-6">
          <Image
            src="/ProfilePic.jpg" // Ensure this is the correct path
            alt="Profile Picture"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        {/* About Me Section */}
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        {/* Bullet Points */}
        <ul className="text-lg space-y-4 list-disc text-left max-w-3xl mx-auto">
          <li>
            Versatile Software Engineer, skilled in full-stack development,
            cloud architecture, and database management using React, Node.js,
            AWS, and MongoDB.
          </li>
          <li>
            Passionate problem solver who enjoys building scalable,
            high-performance solutions and automating workflows, with hands-on
            experience in CI/CD pipelines and API integrations.
          </li>
          <li>
            AWS Certified Cloud Practitioner, always excited to stay on the
            cutting edge of technology and turn innovative ideas into real-world
            applications.
          </li>
        </ul>
      </motion.div>

      {/* Right Side Lottie Animation */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <iframe
          src="https://lottie.host/embed/b8799295-4e48-48d5-a547-3c144a7d1a6c/e7tHBYgL7q.json"
          width="300"
          height="700"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
