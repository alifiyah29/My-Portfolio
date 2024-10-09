"use client";

export default function Education({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-auto flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Education Details */}
        <div className="flex-1 text-black flex flex-col justify-between">
          {/* Centered Title with Animation */}
          <h2 className="text-4xl font-bold mb-4 text-center animate-pulse">
            Education
          </h2>

          {/* Button Sections for Masters and Bachelors */}
          <div className="flex flex-col space-y-4">
            {/* Masters Button */}
            <button className="bg-[#2F3E46] text-white text-xl font-bold py-4 rounded-lg hover:bg-[#1A2428] transition duration-300 flex-1">
              <div>
                <b>Masters in Information Technology</b>{" "}
                <p className="mb-0">Arizona State University</p>
              </div>
            </button>

            {/* Bachelors Button */}
            <button className="bg-[#2F3E46] text-white text-xl font-bold py-4 rounded-lg hover:bg-[#1A2428] transition duration-300 flex-1">
              <div>
                <b>Bachelors in Computer Science</b>{" "}
                <p className="mb-0">Rajiv Gandhi Technical University</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side: Animation */}
        <div className="flex-1 flex items-center justify-center">
          <iframe
            src="https://lottie.host/embed/b9bd1c1e-a00a-4ee9-9857-cede9caec394/zD6b5hNpT9.json"
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
