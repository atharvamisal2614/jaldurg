import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative">
      {/* Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/jaldurga-video-og-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <Image
            height={1000}
            width={1000}
            src="/jaldurga-logo.png"
            alt="Resort Logo"
            className="w-16 h-16 object-contain md:w-20 md:h-20"
          />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white bg-black bg-opacity-60 px-3 py-2 rounded focus:outline-none z-50"
      >
        {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
      </button>

      {/* Full-Screen Hamburger Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          backgroundImage: 'url(/images/jaldurga-home-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.9',
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 bg-opacity-90 p-4">
          <nav className="flex flex-col space-y-6 text-2xl font-bold">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-black hover:text-customOrange hover:scale-110 transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="text-black hover:text-customOrange hover:scale-110 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/stay"
              onClick={toggleMenu}
              className="text-black hover:text-customOrange hover:scale-110 transition-all"
            >
              Accommodations
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMenu}
              className="text-black hover:text-customOrange hover:scale-110 transition-all"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="text-black hover:text-customOrange hover:scale-110 transition-all"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
