import Image from "next/image";

const Events = () => {
  return (
    <div className="events relative bg-white py-12">
      {/* Title at the top center */}
      <h2 className="text-md text-customTeal text-center font-semibold uppercase mb-6">
        EVENTS & CELEBRATIONS
      </h2>

      {/* Description with centered margin */}
      <div className="text-gray-600 text-lg md:text-xl leading-relaxed text-center md:mx-[30%] my-6">
        The pinnacle of tranquillity, escape to the Baa Atoll in the Maldives.
        Embrace the slow life with thoughtful experiences and abundant
        opportunities to reconnect with nature. Spend your summer in enriching
        ways at Amilla Maldives luxury resort.
      </div>

      {/* Grid of images with text overlay */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {/* Image 1 */}
        <div className="relative group">
          <img
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-72 rounded-md shadow-md"
            src="https://amilla.com/wp-content/uploads/2023/05/home-accommodations-lagoon-1-scaled.jpg"
            alt="Lagoon View"
            layout="responsive"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Lagoon View</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group">
          <img
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-72 rounded-md shadow-md"
            src="https://amilla.com/wp-content/uploads/2023/05/home-accomodations-estate-2x.jpg"
            alt="Estate View"
            layout="responsive"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Estate View</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group">
          <img
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-72 rounded-md shadow-md"
            src="https://amilla.com/wp-content/uploads/2023/05/accommodations-reef-water-overview.jpg"
            alt="Reef Water Villas"
            layout="responsive"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Reef Water Villas</p>
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-8">
        <a
          href="https://amilla.com/why-amilla/"
          target="_self"
          className="inline-block bg-customTeal text-gray-700 font-semibold py-3 px-8 rounded-md text-lg hover:shadow-md transition-all duration-300"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Events;
