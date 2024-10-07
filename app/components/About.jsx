"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // For linking buttons to other pages
import { useState, useEffect, useRef } from "react"; // Import useState and useRef for modal control
import Education from "./Education"; // Import the Education modal component
import Experience from "./Experience"; // Import the WorkExperience modal component

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isExperienceOpen, setIsExperienceOpen] = useState(false); // State for Work Experience modal
  const modalRef = useRef(null); // Ref to keep track of the modal element

  // Handle mouse events to show/hide the modals
  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  const handleExperienceMouseEnter = () => {
    setIsExperienceOpen(true);
  };

  const handleExperienceMouseLeave = () => {
    setIsExperienceOpen(false);
  };

  // Close modal on click outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
      setIsExperienceOpen(false); // Close experience modal as well
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
            onMouseEnter: handleMouseEnter, // Show education modal on hover
          },
          {
            name: "Experience",
            onMouseEnter: handleExperienceMouseEnter, // Show experience modal on hover
          },
          { name: "Recent Work", link: "/recent-work" },
          { name: "Skills", link: "/skills" },
          { name: "Achievements", link: "/achievements" },
          { name: "Hobbies", link: "/hobbies" },
        ].map((item) => (
          <button
            key={item.name}
            onMouseEnter={item.onMouseEnter || undefined} // Add hover functionality
            onMouseLeave={item.onMouseLeave || undefined} // Add hover out functionality
            onClick={
              item.link ? () => (window.location.href = item.link) : undefined
            } // Navigate if link exists
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

      {/* Modals for Education and Work Experience */}
      {isModalOpen && (
        <div ref={modalRef}>
          <Education onClose={handleMouseLeave} /> {/* Close on modal close */}
        </div>
      )}
      {isExperienceOpen && (
        <div ref={modalRef}>
          <Experience onClose={handleExperienceMouseLeave} />{" "}
          {/* Close on modal close */}
        </div>
      )}
    </section>
  );
}
