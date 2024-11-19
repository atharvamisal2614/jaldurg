import Image from 'next/image';

const AccommodationSlider = () => {
  return (
    <div className="xlsb relative">
      {/* Title at the top center */}
      <h2 className="xlsb__title text-md text-customTeal text-center">
        DISTINCTIVELY INCLUSIVE STAYS AT AMILLA
      </h2>
     {/* Description with centered margin */}
     <div className="xlsb__description text-gray-600 text-lg md:text-xl leading-relaxed line-clamp-6 text-center md:mx-[30%] my-6">
        Your stay at Amilla Maldives provides flexibility and customisation, from half-board to full-board dining packages, complimentary excursions, wellness masterclasses and cultural activities.
      </div>
      {/* Background image */}
      <div className="xlsb__slides relative">
        <img
          decoding="async"
          loading="lazy"
          className="image lazy xlsb__slides-background object-cover w-full h-full"
          src="https://amilla.com/wp-content/uploads/2023/05/home-accommodations-lagoon-1-scaled.jpg"
          alt="A Poolside View of our Luxury Villas in the Maldives"
          title="home-accommodations-lagoon"
          layout="responsive"
          width={1200}
          height={800}
        />
      </div>

     

      {/* Explore Accommodation button centered without rounded edges */}
      <div className="text-center mt-8">
  {/* <a
    href="https://amilla.com/maldives-accommodations/"
    target="_self"
    className="button button_variant-primary xlsb__link bg-customTeal text-black font-semibold leading-loose py-3 px-8 text-lg  hover:bg-teal-800 inline-block"
  >
    <span className="xlsb__link heading normal ">Explore Accommodation</span>
  </a> */}

  <a
            href="https://amilla.com/why-amilla/"
            target="_self"
            className="inline-block bg-customTeal text-gray-700 font-semibold py-3 px-8 rounded-md text-lg hover:shadow-md transition-all duration-300"
          >
            Explore More
          </a>
</div>

<br/> <br/> <br/>
    </div>
  );
};

export default AccommodationSlider;
