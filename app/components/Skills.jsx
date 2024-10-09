"use client";

import { useState } from "react";

const skillsData = {
  technical: [
    "JavaScript",
    "Python",
    "Java",
    "Visual Basic",
    "Azure",
    "AWS",
    "Docker",
    "Node.js",
    "React.js",
    "Express.js",
    "RESTful APIs",
    "Next.js",
    "Redshift",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "DynamoDB",
    "S3",
    "Oracle",
    "Shell Scripting",
    "Windows",
    "Linux/Unix",
    "Visual Studio Code",
    "AWS Lambda",
    "Frappe",
    "GitHub",
    "Databricks",
    "Tableau",
    "Kafka",
    "Django",
    "Jira",
    "Jenkins",
  ],
  soft: [
    "Leadership",
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Adaptability",
  ],
};

export default function Skills({ onClose }) {
  const [hoveredCategory, setHoveredCategory] = useState(null); // State to track which category is hovered
  const [hoveredSkill, setHoveredSkill] = useState(null); // State to track which skill is hovered

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-center animate-pulse">
          Skills
        </h2>

        {/* Buttons for Technical Skills and Soft Skills */}
        <div className="flex flex-col space-y-4 w-full">
          {/* Technical Skills Button */}
          <div className="relative group">
            <button
              className="bg-[#2F3E46] text-white text-xl font-bold py-2 rounded-lg w-full hover:bg-[#1A2428] transition duration-300"
              onMouseEnter={() => setHoveredCategory("technical")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              Technical Skills
            </button>
          </div>

          {/* Soft Skills Button */}
          <div className="relative group">
            <button
              className="bg-[#2F3E46] text-white text-xl font-bold py-2 rounded-lg w-full hover:bg-[#1A2428] transition duration-300"
              onMouseEnter={() => setHoveredCategory("soft")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Right Side Modal for Hovered Skills */}
        {hoveredCategory && (
          <div
            className="absolute right-0 top-0 w-1/3 h-auto bg-[#2F3E46] text-white p-4 rounded-lg shadow-lg"
            onMouseLeave={() => setHoveredCategory(null)} // Close on mouse leave
          >
            <h3 className="text-xl font-bold">
              {hoveredCategory === "technical"
                ? "Technical Skills"
                : "Soft Skills"}
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {(hoveredCategory === "technical"
                ? skillsData.technical
                : skillsData.soft
              ).map((skill, index) => (
                <button
                  key={index}
                  className="bg-[#4D646F] text-white py-1 px-2 rounded-lg hover:bg-[#3B4A4E] transition duration-300"
                  onMouseEnter={() => setHoveredSkill(skill)} // Optional hover for individual skills
                  onMouseLeave={() => setHoveredSkill(null)} // Reset hovered skill
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Optionally, display more info about the hovered skill */}
            {hoveredSkill && (
              <div className="mt-4">
                <p className="text-sm">{`You are hovering over: ${hoveredSkill}`}</p>
              </div>
            )}
          </div>
        )}

        {/* Animation Section Positioned Below Buttons */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <iframe
            src="https://lottie.host/embed/6b2b0662-1662-4b87-b77d-8b0e5eadd61d/Th2iVVUC4Y.json"
            width="300"
            height="300"
            frameBorder="0"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
