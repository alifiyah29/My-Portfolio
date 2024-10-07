// components/NavBar.js
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 bg-primary shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4 items-center">
            <Link href="#home" scroll={false} className="text-darkText font-bold">
              Home
            </Link>
            <Link href="#about" scroll={false} className="text-darkText">
              About
            </Link>
            <Link href="#projects" scroll={false} className="text-darkText">
              Projects
            </Link>
            <Link href="#contact" scroll={false} className="text-darkText">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
