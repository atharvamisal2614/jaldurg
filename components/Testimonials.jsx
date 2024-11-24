import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const testimonials = [
  {
    id: 1,
    text: `Always my go to place on weekends!!
Best agro resort near hadshi Lake..staff is polite...and unlike other restaurants the owner himself takes care of everything!
Must go if you are an authentic food lover.
The food tastes like home!! The rooms are cozy and the view from the rooms is just✨✨ the environment is silent and warm...best on rainy days.
All the rooms are lakeside and the resort is too easy to find as it is road touch.
I visited Satya Sai Baba Mandir which was about 2-3 km away from it.
The costing was reasonable as well😄😄
Will definitely visit again!! `,
    name: "Niharika Paygude",
    rating: 5,
  },
  {
    id: 2,
    text: "It's a nice place and beautiful locations. Nice experience of Lake view stay. Location of Tikona fort & hadashi lake view. Food quality is superb and tasty. Authentic Thali specialy chulivaracha jevan with great hospitality. Cottage Stay by lake site great experienced. beautiful lake view. Rooms are clean and well maintained.",
    name: "Anil Ladge",
    
    rating: 5,
  },
  {
    id: 3,
    text: "The property is situated in the middle of mountains, beside a lake. Beautiful scenary around the property, a very calm place. Food quality and service is excellent. Highly recommenced to visit this place.",
    name: "Vinay Takawale",
    
    rating: 5,
  },
  {
    id: 4,
    text: "It's very nice place. Service with respect . Food with love ❤️ . Nice management, nice service",
    name: "Rahul Babar",
    
    rating: 5,
  },
  {
    id: 5,
    text: `Pros -One of the best location for stay, highly recommend, newly growing resort, What a kindest person 'pappu dada'
Must visit this place who loves nature and silent places
Cons- starts to booking for all days, now they just take booking for weekends.`,
    name: "Dr. Shubham Pawade",
   
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    prevArrow: <button className="slick-prev bg-indigo-500 text-black p-4 rounded-full absolute top-1/2 transform -translate-y-1/2 left-5 z-10">❮</button>,
    nextArrow: <button className="slick-next bg-indigo-500 text-black p-4 rounded-full absolute top-1/2 transform -translate-y-1/2 right-5 z-10">❯</button>,
  };

  return (
    <section className="relative text-customBlue body-font  pb-8 md:py-20 ">
        <div className="absolute inset-0 z-0">
        <picture>
          <Image width={200} height={200}
            src="/images/leaf.png"
            alt="Background Pattern"
            className="absolute right-0 top-0 w-1/3 md:w-1/4 h-auto object-cover opacity-90"
          />
        </picture>
      </div>
      <div className="absolute inset-0 z-0">
        <picture>
          <Image
            width={1000}
            height={1000}
            src="/images/leaf.png"
            alt="Background Pattern Rotated"
            className="absolute left-0 bottom-0 w-1/3 md:w-1/4 h-auto object-cover opacity-90 rotate-180"
          />
        </picture>
      </div>
      
      <div className="container px-5 py-24 mx-auto lg:px-24">
   
        <h1 className="text-2xl font-semibold text-center mb-10 text-customBlue">Hear From Our Guests !!!</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center lg:text-center sm:text-justify px-5 lg:px-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg text-justify md:text-center sm:text-justify ">{testimonial.text}</p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="inline-block h-1 w-10 rounded bg-secondaryPurple  mb-6"></span>
              <h2 className="text-gray-900 font-bold title-font tracking-wider text-md">{testimonial.name}</h2>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;





