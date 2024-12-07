import Image from "next/image";

const IntroSection = () => {
  return (
    
    <section className="relative bg-white py-20">
 
      {/* Top Leaf Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <Image width={1000} height={1000}
            src="/images/leaf.png"
            alt="Background Pattern"
            className="absolute right-0 top-0 w-1/3 md:w-1/4 h-auto object-cover opacity-90"
          />
        </picture>
      </div>

      {/* Bottom Leaf Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <Image width={1000} height={1000}
            src="/images/leaf.png"
            alt="Background Pattern Rotated"
            className="absolute left-0 bottom-0 w-1/3 md:w-1/4 h-auto object-cover opacity-90 rotate-180"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Label */}
        <div className="text-sm uppercase tracking-wide text-customBlue font-medium mb-4">
          A HAVEN OF LUXURY
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl italic font text-customBlue leading-tight mb-6">
          Experience Tranquility; Redefined Elegance
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
          Nestled amidst lush greenery and azure waters, Jaldurg Resort is a
          sanctuary of relaxation and rejuvenation. With breathtaking views and
          exceptional hospitality, it&apos;s your gateway to an unforgettable escape.
        </p>

        {/* Button */}
        <a
          href="https://amilla.com/why-amilla/"
          target="_self"
          className="inline-block text-customOrange font-semibold py-3 px-8 rounded-md text-lg shadow-md transition-all duration-300"
        >
          Discover More
        </a>
      </div>

      {/* Discover About Jaldurga Section */}
      <div className="relative z-10 mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-customBlue text-center mb-12">
          Discover About Jaldurg
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image
              src="/images/jaldurga-bed.jpg"
              alt="Luxury Villas"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-customBlue mb-2">
                Luxury Villas
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Experience unparalleled comfort in our spacious villas with
                private pools and lush surroundings.
              </p>
              <a
                href="#"
                className="text-customOrange font-medium underline hover:no-underline"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image
              src="/images/jaldurga-dining.jpg"
              alt="Exquisite Dining"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-customBlue mb-2">
                Exquisite Dining
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Savor gourmet dishes crafted with local ingredients, offering a
                culinary journey like no other.
              </p>
              <a
                href="#"
                className="text-customOrange font-medium underline hover:no-underline"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image
              src="/images/jaldurga-adventure.jpg"
              alt="Island Adventures"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-customBlue mb-2">
                Island Adventures
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Dive into the crystal-clear waters, explore the coral reefs, and
                embark on thrilling adventures.
              </p>
              <a
                href="#"
                className="text-customOrange font-medium underline hover:no-underline"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
