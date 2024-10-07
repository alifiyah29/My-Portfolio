"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if the current scroll position is in the current section
      if (
        scrollPosition >= sectionTop - sectionHeight / 3 &&
        scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 top-4 bg-[#CAD2C5] rounded-2xl shadow-md w-80 h-12 z-50 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <Link
          href="#home"
          className={`transition flex-1 text-center ${
            activeSection === "home" ? "text-white" : "text-[#2F3E46]"
          } hover:text-white`}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`transition flex-1 text-center ${
            activeSection === "about" ? "text-white" : "text-[#2F3E46]"
          } hover:text-white`}
        >
          About
        </Link>
        <Link
          href="#projects"
          className={`transition flex-1 text-center ${
            activeSection === "projects" ? "text-white" : "text-[#2F3E46]"
          } hover:text-white`}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={`transition flex-1 text-center ${
            activeSection === "contact" ? "text-white" : "text-[#2F3E46]"
          } hover:text-white`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
