import React from 'react';
import Image from 'next/image'; // For optimized image handling in Next.js

const Header = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background image */}
      <Image
        src="/beach.jpg" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 overflow-x-hidden"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-10 z-10 mb-36 md:mr-96">
        <h1 className="text-black text-center text-4xl md:text-3xl lg:text-6xl font-light font-greatVibes">
          This website is
        </h1>
        <span className="font-greatVibes font-light text-7xl md:text-9xl text-black glowing">
          Coming Soon...
        </span>
      </div>
    </div>
  );
};

export default Header;
