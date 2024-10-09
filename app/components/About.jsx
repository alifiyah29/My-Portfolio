"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Education from "./Education";
import Experience from "./Experience";
import RecentWork from "./RecentWork";
import Skills from "./Skills";

export default function About() {
  const [isRecentWorkOpen, setIsRecentWorkOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const modalRef = useRef(null);

  // Handle mouse events to show/hide the modals
  const handleEducationEnter = () => {
    setIsEducationOpen(true);
  };

  const handleEducationLeave = () => {
    setIsEducationOpen(false);
  };

  const handleExperienceMouseEnter = () => {
    setIsExperienceOpen(true);
  };

  const handleExperienceMouseLeave = () => {
    setIsExperienceOpen(false);
  };

  const handleRecentWorkEnter = () => {
    setIsRecentWorkOpen(true);
  };

  const handleRecentWorkLeave = () => {
    setIsRecentWorkOpen(false);
  };

  const handleSkillsEnter = () => {
    setIsSkillsOpen(true);
  };

  const handleSkillsLeave = () => {
    setIsSkillsOpen(false);
  };

  // Close modal on click outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsEducationOpen(false);
      setIsExperienceOpen(false);
      setIsRecentWorkOpen(false);
      setIsSkillsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#84A98C] text-darkText py-10 relative"
    >
      {/* Left Side Buttons */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {[
          {
            name: "Education",
            onMouseEnter: handleEducationEnter,
          },
          {
            name: "Experience",
            onMouseEnter: handleExperienceMouseEnter,
          },
          {
            name: "Recent Work",
            onMouseEnter: handleRecentWorkEnter,
          },
          {
            name: "Skills",
            onMouseEnter: handleSkillsEnter,
          },
          { name: "Achievements", link: "/achievements" },
          { name: "Hobbies", link: "/hobbies" },
        ].map((item) => (
          <button
            key={item.name}
            onMouseEnter={item.onMouseEnter || undefined}
            onMouseLeave={item.onMouseLeave || undefined}
            onClick={
              item.link ? () => (window.location.href = item.link) : undefined
            }
            className="bg-[#52796F] hover:bg-[#354F52] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {item.name}
          </button>
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
            src="/ProfilePic.jpg"
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
          <p>
            Versatile Software Engineer, skilled in full-stack development,
            cloud architecture, and database management using React, Node.js,
            AWS, and MongoDB.
          </p>

          <p>
            Passionate problem solver who enjoys building scalable,
            high-performance solutions and automating workflows, with hands-on
            experience in CI/CD pipelines and API integrations.
          </p>
          <p>
            AWS Certified Cloud Practitioner, always excited to stay on the
            cutting edge of technology and turn innovative ideas into real-world
            applications.
          </p>
        </ul>
      </motion.div>

      {/* Right Side Lottie Animation */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <iframe
          src="https://lottie.host/embed/b8799295-4e48-48d5-a547-3c144a7d1a6c/e7tHBYgL7q.json"
          width="300"
          height="800"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Modals for Education, Experience, and Recent Work */}
      {isEducationOpen && (
        <div ref={modalRef}>
          <Education onClose={handleEducationLeave} />
        </div>
      )}
      {isExperienceOpen && (
        <div ref={modalRef}>
          <Experience onClose={handleExperienceMouseLeave} />
        </div>
      )}
      {isRecentWorkOpen && (
        <div ref={modalRef}>
          <RecentWork onClose={handleRecentWorkLeave} />
        </div>
      )}
      {isSkillsOpen && (
        <div ref={modalRef}>
          <Skills onClose={handleSkillsLeave} />
        </div>
      )}
    </section>
  );
}
