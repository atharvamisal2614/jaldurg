// import Image from "next/image";
// import Link from "next/link";
// function Navbar() {
//     return (
//         <header className=" text-gray-600 body-font  bg-white ">
//             <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <a className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                     <Image src="/aachal-resort-logo.png" alt="resort logo" height={80} width={80}/>
//                     {/* <span className="ml-3 text-xl">Tailblocks</span> */}
//                 </a>
               
               
//             </div>
//         </header>
//     )
// }
// export default Navbar;


import Image from "next/image";

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex justify-center p-5">
        <a className="flex title-font font-medium items-center text-gray-900">
          <Image
            src="/aachal-resort-logo.png"
            alt="resort logo"
            height={150}
            width={150}
          />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
