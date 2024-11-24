import Image from "next/image";

const Events = () => {
  return (
    <div className="events relative bg-white py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Paragraph and Image */}
        <div className="flex flex-col gap-6">
          {/* Paragraph */}
          <div>
            <h2 className="text-2xl text-customBlue font-semibold uppercase mb-4">
              Jaldurga Restaurant
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
              At Jaldurga Restaurant, experience a unique blend of nature and gastronomy. 
              Nestled near the serene lake, the restaurant offers breathtaking views that 
              enhance the dining experience. Guests can savor authentic Indian cuisine, 
              prepared with fresh, locally sourced ingredients, in a tranquil setting. 
              Whether enjoying a traditional meal or indulging in innovative flavors, 
              every dish celebrates the richness of Indian culture and culinary expertise.
              Ideal for family gatherings, romantic dinners, or quiet retreats, Jaldurga 
              Restaurant creates an atmosphere of relaxation and indulgence. The stunning 
              views and views and relaxation and indulgence at Jaldurga Restaurant dinners.
            </p> 
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/jaldurga-gallery-8.jpg"
              alt="Jaldurga Restaurant"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Jaldurga Restaurant</p>
            </div>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="flex flex-col gap-6">
          {/* Top Image */}
          <div className="relative group">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/jaldurga-home-2.jpg"
              alt="Lagoon View"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Estate View</p>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative group">
            <Image
              height={1000}
              width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/jaldurga-dining.jpg"
              alt="Dining View"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Dining View</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-8">
        <a
          href="https://amilla.com/why-amilla/"
          target="_self"
          className="inline-block text-customOrange font-semibold py-3 px-8 rounded-md text-lg shadow-md transition-all duration-300"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Events;
