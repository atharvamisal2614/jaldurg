import Image from 'next/image';
import React from 'react';

const NearbyPlaces = () => {
  const places = [
    { name: "Hadshi Lake", image: "/places/hadshi-lake.jpg" },
    { name: "Lohagad Fort", image: "/places/lohagad-fort.jpg" },
    { name: "Pawna Lake", image: "/places/Pawna-lake.jpg" },
    { name: "Mulshi Dam", image: "/places/mulshidam.jpeg" },
    { name: "Rajmachi Fort", image: "/places/rajmachi-fort.jpeg" },
    { name: "Satya Sai Baba Mandir", image: "/places/sai-baba-mandir.jpg" },
    { name: "Tikona Fort", image: "/places/tikonafort.jpeg" },
    { name: "Tung Fort", image: "/places/tungfort.webp" },
    { name: "visapur Fort", image: "/places/visapurfort.jpeg" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-customBlue text-center mb-8">Nearby Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {places.map((place, index) => (
            <div key={index} className="relative group">
              {/* Image */}
              <Image
                src={place.image}
                alt={place.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-md shadow-lg group-hover:opacity-80 transition duration-300"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 w-full text-lg bg-customBlue bg-opacity-90 text-customOrange text-center py-2  font-medium">
                {place.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
