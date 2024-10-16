"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  const handleScroll = () => {
    const sections = ["home", "about", "projects", "contact"];
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    router.push(`#${section}`);
  };

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 top-4 bg-[#CAD2C5] rounded-2xl shadow-md w-80 h-12 z-50 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        {["home", "about", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`transition flex-1 text-center ${
              activeSection === section ? "text-white" : "text-[#2F3E46]"
            } hover:text-white`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
