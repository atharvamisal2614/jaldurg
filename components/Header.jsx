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
      <div className="absolute inset-0 flex mx-10 my-10 flex-col space-y-6 items-start justify-start bg-opacity-10 z-10 mb-36">
        <h1 className="text-white text-center text-4xl md:text-3xl lg:text-4xl font-light font-greatVibes">
          This website is
        </h1>
        <span className="font-greatVibes font-light text-5xl md:text-6xl text-white">
          Coming Soon...
        </span>
      </div>
    </div>
  );
};

export default Header;
