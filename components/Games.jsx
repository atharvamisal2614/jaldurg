import Image from "next/image";

const Games = () => {
  return (
    <div className="games py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Indoor Games */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-customBlue mb-6">Indoor Games</h2>

          {/* Main Image */}
          <div className="relative mb-6">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/indoor-games.jpg" // Replace with your main image path
              alt="Indoor Games"
            />
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Image
                height={500}
                width={500}
                decoding="async"
                loading="lazy"
                className="object-cover w-full h-72 rounded-md shadow-md"
                src="/images/indoor-angrybird.jpg" // Replace with your first additional image path
                alt="Chess"
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                decoding="async"
                loading="lazy"
                className="object-cover w-full h-72 rounded-md shadow-md"
                src="/images/indoor-carrom.jpg" // Replace with your second additional image path
                alt="Carrom"
              />
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
            Our indoor games include exciting options like chess, carrom, and table tennis. 
            Whether you&apos;re a fan of strategic games or just looking for some casual fun, 
            our indoor arena is the perfect place to enjoy quality time with your loved ones.
          </p>
        </div>

        {/* Right Section: Outdoor Games */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-customBlue mb-6">Outdoor Games</h2>

          {/* Main Image */}
          <div className="relative mb-6">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/outdoor-net.jpg" // Replace with your main image path
              alt="Outdoor Games"
            />
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Image
                height={500}
                width={500}
                decoding="async"
                loading="lazy"
                className="object-cover w-full h-72 rounded-md shadow-md"
                src="/images/outdoor-tyre.jpg" // Replace with your first additional image path
                alt="Badminton"
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                decoding="async"
                loading="lazy"
                className="object-cover w-full h-72 rounded-md shadow-md"
                src="/images/outdoor-net.jpg" // Replace with your second additional image path
                alt="Cricket"
              />
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
            From badminton to cricket and volleyball, our outdoor games offer plenty of options
             for staying active and enjoying the fresh air. Gather your friends or family and 
             dive into the fun amidst the stunning greenery of our resort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
