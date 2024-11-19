import Image from 'next/image';

const Experiences = () => {
  return (
    <div className="xlsb relative">
      {/* Title at the top center */}
      <h2 className="xlsb__title text-md text-customTeal text-center">
      TRANSCENDENT EXPERIENCES
      </h2>
     {/* Description with centered margin */}
     <div className="xlsb__description text-gray-600 text-lg md:text-xl leading-relaxed line-clamp-6 text-center md:mx-[30%] my-6">
     Amilla is a holistic hideaway with unparalleled immersive aqua activities to embrace the Indian Ocean, from scuba diving to our famous Hanifaru Bay snorkelling adventures. Soulful culinary, active adventures and cultural excursions fascinate, expanding horizons. Our personalisable daily itineraries craft unique experiences specific to your interests and what style your holiday intends to be.
      </div>
      {/* Background image */}
      <div className="xlsb__slides relative">
        <img
          decoding="async"
          loading="lazy"
          className="image lazy xlsb__slides-background object-cover w-full h-full"
          src="https://amilla.com/wp-content/uploads/2023/05/home-experiences-jet-skis-scaled-1.jpg"
          alt="A Poolside View of our Luxury Villas in the Maldives"
          title="home-accommodations-lagoon"
          layout="responsive"
          width={1200}
          height={800}
        />
      </div>

     

      {/* Explore Accommodation button centered without rounded edges */}
      <div className="text-center mt-8">

  <a
            href="https://amilla.com/why-amilla/"
            target="_self"
            className="inline-block bg-customTeal text-gray-700 font-semibold py-3 px-8 rounded-md text-lg hover:shadow-md transition-all duration-300"
          >
            Explore All Experiences
          </a>
</div>

<br/> <br/> <br/>
    </div>
  );
};

export default Experiences;
