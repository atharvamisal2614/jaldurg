import Image from "next/image";
const IntroSection = () => {
    return (
      <section className="relative bg-white py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-10">
          <picture>
            <img
              src="https://amilla.com/wp-content/themes/amilla/src/img/intro-bg.png"
              alt="Background Pattern"
              className="absolute right-0 top-0 w-1/3 h-1/2 object-cover opacity-80"
            />
          </picture>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          {/* Label */}
          <div className="text-sm uppercase tracking-wide text-teal-700 font-medium mb-4">
            A NATURALLY LUSH PARADISE
          </div>
  
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl italic font text-gray-800 leading-tight mb-6 ">
            In harmony; with purpose
          </h2>
  
          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            Highly personalised, an immensely private island luxury resort nestled
            in the Maldives, where moments expand across horizons.
          </p>
  
          {/* Button */}
          <a
            href="https://amilla.com/why-amilla/"
            target="_self"
            className="inline-block bg-customTeal text-gray-700 font-semibold py-3 px-8 rounded-md text-lg hover:shadow-md transition-all duration-300"
          >
            Discover More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
  {/* Left large image */}
  <div className="col-span-2 z-50">
    <Image
      src="/images/aachal-page22.jpg"
      alt="Luxury Poolside View"
      width={1200}
      height={800}
      className="w-full h-auto rounded-lg shadow-lg z-50"
    />
  </div>

  {/* Right small image */}
  <div className="flex items-end">
    <Image
      src="/images/aachal-page21.jpg"
      alt="Beautiful Sunset View"
      width={600}
      height={800}
      className="w-full h-auto rounded-lg shadow-lg z-50"
    />
  </div>
</div>

<div className="container mx-auto px-4 md:px-8 py-12 relative">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    {/* Left Content */}
    <div>
      
      <h2 className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-4">
        Welcome to Amilla
      </h2>
      <h1 className="text-2xl md:text-3xl font-semibold italic text-gray-800 leading-tight mb-6">
        Inspiring connection, nourished by nature
      </h1>
    
      <p className="text-gray-600 leading-relaxed mb-6 md:text-center text-justify">
        Explore one of the most spacious Maldives five-star resorts. Restore
        with the luxury of space to play. Villas and residences featuring large
        outdoor areas and private plunge pools, a liaison with nature for those
        yearning for restoration or effervescent play in a honeymoon celebration
        or a family vacation. Move at your pace with every excursion the Indian
        Ocean has to offer.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6 md:text-center text-justify">
        As part of the Small Luxury Hotels Considerate Collection,
        sustainability and wellness are at our core. Most of our island is an
        untouched jungle fringed by brilliant white sand beaches. The only
        footsteps are your own.
      </p>
      <a
        href="#"
        className="text-teal-700 font-medium underline hover:no-underline"
      >
        Explore the Island
      </a>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="/images/aachal-header.jpg"
        alt="Island view"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>



      </section>
    );
  };
  
  export default IntroSection;
  


