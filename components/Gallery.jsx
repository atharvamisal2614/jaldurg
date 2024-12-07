import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [image, setImage] = useState(null);

  return (
    <>
      {image && (
        <div
          onClick={() => setImage(null)}
          className="fixed w-screen h-screen bg-primary bg-opacity-50 top-0"
        >
          <div className="relative">
            <div
              onClick={() => setImage(null)}
              className="absolute top-5 right-10 text-3xl text-white cursor-pointer"
            >
              X
            </div>
            <Image
              className="p-3 m-auto "
              width={1000}
              height={1000}
              src={image}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="flex flex-col max-w-6xl  m-auto py-20 text-center">
      <h2 className="text-3xl font-semibold text-customBlue text-center mb-5">
          Gallery
        </h2>

        <div className="flex flex-wrap my-5">
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-home-1.jpg")}
            src={"/images/jaldurga-home-1.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-adventure.jpg")}
            src={"/images/jaldurga-adventure.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-bed.jpg")}
            src={"/images/jaldurga-bed.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-dining.jpg")}
            src={"/images/jaldurga-dining.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-home-2.jpg")}
            src={"/images/jaldurga-home-2.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-parallex.jpg")}
            src={"/images/jaldurga-parallex.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-1.jpg")}
            src={"/images/jaldurga-gallery-1.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-2.jpg")}
            src={"/images/jaldurga-gallery-2.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-3.jpg")}
            src={"/images/jaldurga-gallery-3.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-4.jpg")}
            src={"/images/jaldurga-gallery-4.jpg"}
            alt=""
          />

          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-5.jpg")}
            src={"/images/jaldurga-gallery-5.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-6.jpg")}
            src={"/images/jaldurga-gallery-6.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-7.jpg")}
            src={"/images/jaldurga-gallery-7.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-8.jpg")}
            src={"/images/jaldurga-gallery-8.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-9.jpg")}
            src={"/images/jaldurga-gallery-9.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-10.jpg")}
            src={"/images/jaldurga-gallery-10.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-11.jpg")}
            src={"/images/jaldurga-gallery-11.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-12.jpg")}
            src={"/images/jaldurga-gallery-12.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-13.jpg")}
            src={"/images/jaldurga-gallery-13.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/jaldurga-gallery-14.jpg")}
            src={"/images/jaldurga-gallery-14.jpg"}
            alt=""
          />


          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/tent-1.jpg")}
            src={"/images/tent-1.jpg"}
            alt=""
          />

          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/tent-2.jpg")}
            src={"/images/tent-2.jpg"}
            alt=""
          />

          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/tent-3.jpg")}
            src={"/images/tent-3.jpg"}
            alt=""
          />

          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/images/tent-4.jpg")}
            src={"/images/tent-4.jpg"}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
