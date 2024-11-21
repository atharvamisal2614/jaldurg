import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const slides = [
  {
    imageUrl: '/images/jaldurga-home-1.jpg',
    link: '/stay',
  },
 
  {
    imageUrl: '/images/jaldurga-home-2.jpg',
    link: '/stay',
  },
 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative ">
      {/* Slider Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition duration-700 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white p-4 md:p-8"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <Image height={1000} width={1000}
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
          backgroundImage: `url(${slides[0].imageUrl})`,
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
