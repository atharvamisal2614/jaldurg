import React, { useState } from "react";
import Image from "next/image";

const Food = () => {
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
          Our Delicious Food
        </h2>

        <div className="flex flex-wrap my-5">
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-1.jpg")}
            src={"/food/food-1.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-2.jpg")}
            src={"/food/food-2.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-3.jpg")}
            src={"/food/food-3.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-6.jpg")}
            src={"/food/food-6.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-8.jpg")}
            src={"/food/food-8.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-11.jpg")}
            src={"/food/food-11.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-12.jpg")}
            src={"/food/food-12.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-13.jpg")}
            src={"/food/food-13.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-14.jpg")}
            src={"/food/food-14.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-15.jpg")}
            src={"/food/food-15.jpg"}
            alt=""
          />

          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-16.jpg")}
            src={"/food/food-16.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-10.jpg")}
            src={"/food/food-10.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-4.jpg")}
            src={"/food/food-4.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-5.jpg")}
            src={"/food/food-5.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-7.jpg")}
            src={"/food/food-7.jpg"}
            alt=""
          />
          <Image
            className="p-3 md:w-1/4 w-1/2 cursor-pointer "
            width={500}
            height={500}
            onClick={() => setImage("/food/food-9.jpg")}
            src={"/food/food-9.jpg"}
            alt=""
          />
          

          
         
        </div>
      </div>
    </>
  );
};

export default Food;
