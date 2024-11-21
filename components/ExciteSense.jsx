// import Image from "next/image";

// const ExiteSense = () => {
//   return (
//     <div className="events relative bg-white py-12">
//       {/* Title at the top center */}
//       <h2 className="text-md text-customTeal text-center font-semibold uppercase mb-6">
//         EXCITE YOUR SENSES
//       </h2>

//       {/* Description with centered margin */}
//       <div className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify md:text-center md:mx-[30%] my-6">
//         A decadent display of Maldivian and locally-sourced ingredients that span international cuisines, from freshly caught fish to Wellness Your Way menus. Dining at Amilla is warm, inviting, and unexpected. Each dish is a cultural story told by world-renowned chefs celebrating through culinary expression.
//       </div>

//       {/* Images Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 mt-8">
//         {/* Left Image */}
//         <div className="relative group md:mr-4">
//           <Image width={1000} height={1000}
//             decoding="async"
//             loading="lazy"
//             className="object-cover w-full h-full rounded-md shadow-md"
//             src="/images/aachal-sences-1.jpg"
//             alt="Lagoon View"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//             <p className="text-white text-lg font-semibold">Lagoon View</p>
//           </div>
//         </div>

//         {/* Right Column (2 Vertically Stacked Images) */}
//         <div className="grid grid-rows-2 gap-6">
//           {/* Top Right Image */}
//           <div className="relative group">
//             <Image width={1000} height={1000}
//               decoding="async"
//               loading="lazy"
//               className="object-cover w-full h-56 md:h-72 rounded-md shadow-md"
//               src="/images/aachal-sences-2.jpg"
//               alt="Estate View"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//               <p className="text-white text-lg font-semibold">Estate View</p>
//             </div>
//           </div>

//           {/* Bottom Right Image */}
//           <div className="relative group">
//             <Image width={1000} height={1000}
//               decoding="async"
//               loading="lazy"
//               className="object-cover w-full h-56 md:h-72 rounded-md shadow-md"
//               src="/images/aachal-event-2.jpg"
//               alt="Reef Water Villas"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//               <p className="text-white text-lg font-semibold">Reef Water Villas</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Explore More Button */}
//       <div className="text-center mt-8">
//         <a
//           href="https://amilla.com/why-amilla/"
//           target="_self"
//           className="inline-block bg-customTeal text-gray-700 font-semibold py-3 px-8 rounded-md text-lg hover:shadow-md transition-all duration-300"
//         >
//          View All Culinary Experiences
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExiteSense;






import Image from "next/image";

const ExiteSense = () => {
  return (
    <div className="events relative bg-white py-16 px-4 md:px-12">
      {/* Title at the top center */}
      <h2 className="text-3xl font-semibold text-customBlue text-center mb-5">
          Excitement At Glance
        </h2>

      {/* Description with centered margin */}
      <div className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify md:text-center mx-auto max-w-4xl mb-12">
        A decadent display of Maldivian and locally-sourced ingredients that span international cuisines, from freshly caught fish to Wellness Your Way menus. Dining at Amilla is warm, inviting, and unexpected. Each dish is a cultural story told by world-renowned chefs celebrating through culinary expression.
      </div>

      {/* Images Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12">
        {/* Left Image (Large) */}
        <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <Image width={1000} height={1000}
            decoding="async"
            loading="lazy"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500"
            src="/images/jaldurga-dining.jpg"
            alt="Lagoon View"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">Dining Hall</p>
          </div>
        </div>

        {/* Right Column (2 Vertically Stacked Images) */}
        <div className="grid grid-rows-2 gap-8">
          {/* Top Right Image */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image width={1000} height={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-96 transform group-hover:scale-105 transition-all duration-500"
              src="/images/jaldurga-home-1.jpg"
              alt="Estate View"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Estate View</p>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image width={1000} height={1000}
              decoding="async"
              loading="lazy"
              className="object-cover w-full h-96 transform group-hover:scale-105 transition-all duration-500"
              src="/images/jaldurga-bed.jpg"
              alt="Reef Water Villas"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Bed Rooms</p>
            </div>
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

export default ExiteSense;
