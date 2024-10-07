"use client";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-[#354F52]"
    >
      <h2 className="text-3xl mb-4">Contact</h2>
      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-[#84A98C]" size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-[#84A98C]" size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white hover:text-[#84A98C]" size={24} />
        </a>
      </div>
    </section>
  );
}
