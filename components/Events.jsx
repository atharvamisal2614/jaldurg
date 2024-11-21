import { FaCocktail, FaSpa, FaSwimmingPool, FaUmbrellaBeach } from "react-icons/fa";
import { GiIsland, GiSnorkel, GiDolphin, GiPalmTree } from "react-icons/gi";
import Image from "next/image";

const Events = () => {
  return (
    <div className="events relative bg-white py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Text and Icons */}
        <div className="flex flex-col gap-8">
          {/* Title and Description */}
          <div>
            <h2 className="text-lg text-customBlue font-semibold uppercase mb-4">
              Something Exciting you must do.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sequi reiciendis in voluptates ab, voluptate quae ea beatae doloribus ipsa distinctio cupiditate nisi est alias ullam cumque repellat? Nemo, voluptate?
            </p> <br/>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sequi reiciendis in voluptates ab, voluptate quae ea beatae doloribus ipsa distinctio cupiditate nisi est alias ullam cumque repellat? Nemo, voluptate?
            </p> <br/>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sequi reiciendis in voluptates ab, voluptate quae ea beatae doloribus ipsa distinctio cupiditate nisi est alias ullam cumque repellat? Nemo, voluptate?
            </p>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-4 gap-6">
            {/* Icon 1 */}
            <div className="flex flex-col items-center">
              <FaCocktail className="text-customTeal text-5xl hover:text-teal-500 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Cocktails</p>
            </div>
            {/* Icon 2 */}
            <div className="flex flex-col items-center">
              <FaSpa className="text-purple-500 text-5xl hover:text-purple-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Spa</p>
            </div>
            {/* Icon 3 */}
            <div className="flex flex-col items-center">
              <FaSwimmingPool className="text-blue-500 text-5xl hover:text-blue-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Pool Parties</p>
            </div>
            {/* Icon 4 */}
            <div className="flex flex-col items-center">
              <FaUmbrellaBeach className="text-orange-500 text-5xl hover:text-orange-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Beach</p>
            </div>
            {/* Icon 5 */}
            <div className="flex flex-col items-center">
              <GiIsland className="text-green-500 text-5xl hover:text-green-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Island Tours</p>
            </div>
            {/* Icon 6 */}
            <div className="flex flex-col items-center">
              <GiSnorkel className="text-blue-400 text-5xl hover:text-blue-500 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Snorkeling</p>
            </div>
            {/* Icon 7 */}
            <div className="flex flex-col items-center">
              <GiDolphin className="text-cyan-500 text-5xl hover:text-cyan-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Dolphins</p>
            </div>
            {/* Icon 8 */}
            <div className="flex flex-col items-center">
              <GiPalmTree className="text-lime-500 text-5xl hover:text-lime-600 transition-all duration-300 mb-2" />
              <p className="text-sm text-gray-700 font-medium">Palm Retreats</p>
            </div>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="flex flex-col gap-6">
          {/* Top Image */}
          <div className="relative group">
            <Image height={1000} width={1000}
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
            <Image height={1000} width={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-72 rounded-md shadow-md"
              src="/images/jaldurga-adventure.jpg"
              alt="Estate View"
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
          className="inline-block  text-customOrange font-semibold py-3 px-8 rounded-md text-lg shadow-md transition-all duration-300"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Events;
