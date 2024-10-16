"use client";

import { useState } from "react";

const achievementsData = [
  "Best Intern Award at LMS",
  "Chairman's Scholarship Award for Full Attendance",
  "Top Event Organizer in Tech Fest",
  "Participated in Various Motorbike Rallies",
];

export default function Achievements({ onClose }) {
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
          Achievements
        </h2>

        {/* Achievements List */}
        <div className="flex flex-col space-y-2 w-full">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#2F3E46] text-white text-lg font-semibold py-2 px-4 rounded-lg shadow transition duration-300 hover:bg-[#1A2428]"
            >
              {achievement}
            </div>
          ))}
        </div>

        {/* Animation Section Positioned Below Achievements */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <iframe
            src="https://lottie.host/embed/b03db1f7-98aa-42db-8def-9802d7310bc8/B7mEXB9YdT.json"
            width="300"
            height="300"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
