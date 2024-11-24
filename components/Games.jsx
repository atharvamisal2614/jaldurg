import Image from "next/image";

const Games = () => {
  return (
    <div className="games py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
        {/* Left Section: Indoor Games */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-customBlue mb-6">Indoor Games</h2>
          
          {/* Image */}
          <div className="relative mb-6">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/indoor-games.jpg" // Replace with your image path
              alt="Indoor Games"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
            At Jaldurga Resort, enjoy a wide variety of indoor games, perfect for family bonding or a fun-filled evening with friends. From chess and carrom to table tennis and board games, our indoor arena is designed to keep you entertained, no matter the weather outside.
          </p>
        </div>

        {/* Right Section: Outdoor Games */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-customBlue mb-6">Outdoor Games</h2>
          
          {/* Image */}
          <div className="relative mb-6">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/outdoor-games.jpg" // Replace with your image path
              alt="Outdoor Games"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
            Immerse yourself in the great outdoors with exciting activities like badminton, cricket, and volleyball. Surrounded by lush greenery, our outdoor games area is the perfect spot to stay active, soak up the sun, and create unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
