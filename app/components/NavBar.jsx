'use client'; // This indicates that this is a client component

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 bg-transparent z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Left Side: Alifiyah Shahid and Navigation Buttons */}
        <div className="flex items-center space-x-4">
          {/* Home Link */}
          <Link href="#home" scroll={false} className="text-[#2F3E46] font-bold text-lg hover:text-[#84A98C]">
            Alifiyah Shahid
          </Link>

          {/* Navigation Buttons */}
          <Link href="#about" scroll={false} className="text-[#2F3E46] bg-[#354F52] px-4 py-2 rounded hover:bg-[#84A98C] transition">
            About
          </Link>
          <Link href="#projects" scroll={false} className="text-[#2F3E46] bg-[#354F52] px-4 py-2 rounded hover:bg-[#84A98C] transition">
            Projects
          </Link>
          <Link href="#contact" scroll={false} className="text-[#2F3E46] bg-[#354F52] px-4 py-2 rounded hover:bg-[#84A98C] transition">
            Contact
          </Link>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#2F3E46] hover:text-[#84A98C]" size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#2F3E46] hover:text-[#84A98C]" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#2F3E46] hover:text-[#84A98C]" size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
