// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const slides = [
//   {
//     imageUrl: '/images/dummy-beach-image-1.jpg',
//     // title: 'Welcome to Squirrel Resort',
//     // subtitle: 'Your Ultimate Escape to Paradise',
//     link: '/stay',
//   },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="relative">
//       {/* Slider Container */}
//       <div className="relative w-full h-screen overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition duration-700 ease-in-out transform ${
//               index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
//             }`}
//             style={{ backgroundImage: `url(${slide.imageUrl})` }}
//           >
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center text-white p-4 md:p-8">
//                 <h2 className="text-lg md:text-xl font-semibold mb-2">{slide.title}</h2>
//                 <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.subtitle}</h1>
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hamburger Menu Button */}
//       <button
//         onClick={toggleMenu}
//         className="absolute top-4 left-4 text-white bg-aqua px-3 py-2 rounded focus:outline-none"
//         // Aqua color
//       >
//         {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
//       </button>

//       {/* Reserve Your Room Button */}
//       <Link
//         href="/reserve"
//         className="absolute right-0 text-gray-700 font-sans text-lg leading-loose px-4 py-2 rounded font-medium bg-customTeal top-0"
     
//       >
//         RESERVE YOUR ROOM
//       </Link>

//       {/* Mobile Navbar Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform ${
//           isOpen ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <div className="flex h-full">
//           {/* Menu Section */}
//           <div className="w-full bg-gray-200 p-4 flex flex-col justify-center items-center">
//             <nav className="flex flex-col space-y-6 text-lg font-semibold">
//               <Link
//                 href="/"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all "
              
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all"
               
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/stay"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all"
           
//               >
//                 Accommodations
//               </Link>
//               <Link
//                 href="/gallery"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all"
             
//               >
//                 Gallery
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all "
               
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="/reserve"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-customTeal hover:scale-110 transition-all "
              
//               >
//                 Reserve Your Room
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const slides = [
  {
    imageUrl: '/images/dummy-beach-image-1.jpg',
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
    <header className="relative">
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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
        <Link href="/">
          <img
            src="/aachal-resort-logo.png"
            alt="Squirrel Resort Logo"
            className="w-28 h-28 object-contain" // Adjust width and height as needed
          />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 text-white bg-aqua px-3 py-2 rounded focus:outline-none"
      >
        {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
      </button>

      {/* Reserve Your Room Button */}
      <Link
        href="/reserve"
        className="absolute right-0 text-gray-700 font-sans text-lg leading-loose px-4 py-2 rounded font-medium bg-customTeal top-0"
      >
        RESERVE YOUR ROOM
      </Link>

      {/* Mobile Navbar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full">
          {/* Menu Section */}
          <div className="w-full bg-gray-200 p-4 flex flex-col justify-center items-center">
            <nav className="flex flex-col space-y-6 text-lg font-semibold">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                About Us
              </Link>
              <Link
                href="/stay"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Accommodations
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/reserve"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Reserve Your Room
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
