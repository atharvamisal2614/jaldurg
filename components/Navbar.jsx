import Image from "next/image";
import Link from "next/link";
function Navbar() {
    return (
        <header className=" text-gray-600 body-font  bg-white ">
            <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/aachal-resort-logo.png" alt="resort logo" height={80} width={80}/>
                    {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5 justify-center font-semibold text-xl">
                    <Link href={"/"} className="mr-5 hover:text-sky-600">Home</Link>
                    <Link href={"/"} className="mr-5 hover:text-sky-600">About Us</Link>
                    <Link href={"/"} className="mr-5 hover:text-sky-600">Contact</Link>
                    <Link href={"/"} className="mr-5 hover:text-sky-600"> Book Now</Link>
                </nav>
               
            </div>
        </header>
    )
}
export default Navbar;