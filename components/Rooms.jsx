import Image from "next/image";

const Rooms = () => {
  return (
    <div className="events relative bg-white py-16 px-4 md:px-12">
      {/* Title at the top center */}
      <div className="absolute inset-0 z-0">
        <picture>
          <Image width={1000} height={1000}
            src="/images/leaf.png"
            alt="Background Pattern"
            className="absolute left-0 top-0 w-1/3 md:w-1/4 h-auto object-cover opacity-90 rotate-180"
          />
        </picture>
      </div>
      <h2 className="text-3xl font-semibold text-customBlue text-center mb-5">
        Our Luxury Rooms
      </h2>

      {/* Description with centered margin */}
      <div className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify md:text-center mx-auto max-w-4xl mb-12">
      The luxury rooms at Jaldurg Agro Resort offer an exquisite retreat, combining modern comforts with the charm of nature. 
      Each room is thoughtfully designed to provide a serene and opulent experience, featuring elegant furnishings, 
      cozy bedding, and large windows that frame breathtaking views of lush greenery and the nearby tranquil lake. 
      Guests can unwind in spacious, air-conditioned interiors adorned with earthy tones that reflect the resort&apos;s 
      connection to its natural surroundings. Whether you seek a peaceful getaway or a luxurious stay amid nature, 
      these rooms promise an unforgettable experience with unparalleled comfort and warmth.
      </div>

      {/* Images Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12">
        {/* Left Image */}
        <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <Image
            width={1000}
            height={1000}
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500"
            src="/images/jaldurga-gallery-14.jpg"
            alt="Lagoon View"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">Bed Room 1</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-10">
    <a
      href="/booking" // Adjust this URL as needed
      className="block bg-black bg-opacity-40 text-white font-semibold py-3 text-center text-lg shadow-md hover:bg-opacity-100 hover:shadow-lg transition-all duration-300"
    >
      Book Now
    </a>
  </div>
        </div>

        {/* Right Image */}
        <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <Image
            width={1000}
            height={1000}
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500"
            src="/images/jaldurga-bed.jpg"
            alt="Estate View"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">Bed Room 2</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-10">
    <a
      href="/booking" // Adjust this URL as needed
      className="block bg-black bg-opacity-40 text-white font-semibold py-3 text-center text-lg shadow-md hover:bg-opacity-100 hover:shadow-lg transition-all duration-300"
    >
      Book Now
    </a>
  </div>
        </div>
      </div>

   

      {/* Explore More Button */}
      <div className="text-center mt-12">
        <a
          href="https://amilla.com/why-amilla/"
          target="_self"
          className="inline-block text-customOrange font-semibold py-3 px-8 rounded-md text-lg shadow-md transition-all duration-300"
        >
          Discover More
        </a>
      </div>
    </div>
  );
};

export default Rooms;
