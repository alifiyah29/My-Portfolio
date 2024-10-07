"use client";

import { useState } from "react";

export default function WorkExperience({ onClose }) {
  const [hoveredExperience, setHoveredExperience] = useState(null); // State to track which experience is hovered

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#CAD2C5] bg-opacity-95 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-center animate-pulse">
          Work Experience
        </h2>

        {/* Buttons for Work Experience */}
        <div className="flex flex-col space-y-4 w-full">
          {/* LMS Solutions Button */}
          <div className="relative group">
            <button
              className="bg-[#2F3E46] text-white text-xl font-bold py-4 rounded-lg w-full hover:bg-[#1A2428] transition duration-300"
              onMouseEnter={() => setHoveredExperience("lms")} // Set hover state
              onMouseLeave={() => setHoveredExperience(null)} // Reset hover state
            >
              LMS Solutions Pvt. Ltd.
            </button>
          </div>

          {/* OneHash Technologies Button */}
          <div className="relative group">
            <button
              className="bg-[#2F3E46] text-white text-xl font-bold py-4 rounded-lg w-full hover:bg-[#1A2428] transition duration-300"
              onMouseEnter={() => setHoveredExperience("onehash")} // Set hover state
              onMouseLeave={() => setHoveredExperience(null)} // Reset hover state
            >
              OneHash Technologies Pvt. Ltd.
            </button>
          </div>
        </div>

        {/* Right Side Modal for Hovered Experience */}
        {hoveredExperience && (
          <div
            className="absolute right-0 top-0 w-1/3 h-auto bg-[#2F3E46] text-white p-4 rounded-lg shadow-lg"
            onMouseLeave={() => setHoveredExperience(null)} // Close on mouse leave
          >
            {hoveredExperience === "lms" && (
              <>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p>Oct’21 – Jun’22</p>
                <ul className="list-disc list-inside mt-2">
                  <p>
                    Developed an Employee Management System for 500+ users using
                    MERN Stack.
                  </p>
                  <p>
                    Built a responsive and dynamic frontend using React.js,
                    improving user engagement and reducing load times by 30%.
                  </p>
                  <p>
                    Enhanced backend functionality with Express.js and MongoDB
                    for scalability.
                  </p>
                  <p>
                    Implemented CI/CD pipelines using Jenkins and GitHub
                    Actions, reducing manual deployment effort by 97%.
                  </p>
                  <p>
                    Conducted API testing with Postman to ensure system
                    reliability.
                  </p>
                </ul>

                {/* Animation before Technologies for LMS */}
                <div className="mt-4">
                  <iframe
                    src="https://lottie.host/embed/c1b8a1ef-9c74-42cf-b913-9a73969cf49f/RXfJLPTeG2.json"
                    width="300"
                    height="300"
                    frameBorder="0"
                    style={{ border: "none", overflow: "hidden" }}
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="mt-2">
                  Technologies: Node.js | React.js | MongoDB | Postman |
                  Express.js | HTML | CSS | Jenkins | GitHub
                </p>
              </>
            )}

            {hoveredExperience === "onehash" && (
              <>
                <h3 className="text-xl font-bold">Software Developer Intern</h3>
                <p>Oct’20 – Sep’21</p>
                <ul className="list-disc list-inside mt-2">
                  <p>
                    Built custom JavaScript UIs, integrating Salesforce and
                    Mailchimp APIs into OneHash CRM.
                  </p>
                  <p>
                    Automated data transfers to OneHash's secure database with
                    Frappe Framework.
                  </p>
                  <p>
                    Created API integrations, data scripts, and scheduled tasks
                    to streamline operations.
                  </p>
                  <p>
                    Strengthened data structure knowledge, reducing integration
                    issues.
                  </p>
                </ul>

                {/* Animation before Technologies for OneHash */}
                <div className="mt-4">
                  <iframe
                    src="https://lottie.host/embed/d9341de6-c4de-47c8-9811-fb97315fe388/ftVtryCT1u.json"
                    width="300"
                    height="300"
                    frameBorder="0"
                    style={{ border: "none", overflow: "hidden" }}
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="mt-2">
                  Technologies: Python | JavaScript | Frappe Framework | MariaDB
                  | Salesforce | AWS
                </p>
              </>
            )}
          </div>
        )}

        {/* Animation Section Positioned Below Buttons */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <iframe
            src="https://lottie.host/embed/75c1b03c-6ace-4d33-8520-1461e269195b/aX2qICq9E4.json"
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
