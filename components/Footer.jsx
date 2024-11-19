import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-customTeal text-white py-12">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <Image
              src="/aachal-resort-logo.png" // Replace with your logo path
              alt="Aachal Resort Logo"
              width={140}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center space-y-4 lg:items-start">
            <h3 className="text-2xl font-semibold">Join the Adventure</h3>
            <p className="text-lg">Sign up for Amilla news and exclusive offers</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-l-md text-gray-700 placeholder-gray-500"
              />
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-r-md hover:bg-yellow-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          <div className="space-y-2">
            <h4 className="font-semibold">Discover</h4>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="hover:text-gray-300">FAQs</Link></li>

              <li><Link href="/accessibility" className="hover:text-gray-300">Accessibility</Link></li>
             
              <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-300">Gallery</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              
              <li><Link href="/reserve" className="hover:text-gray-300">Reserve Your Villa</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-2">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <h4 className="font-semibold">Contact Us</h4>
            <p className="text-lg">Call Us: <span className="font-semibold">+1 800 123 4567</span></p>
            <p className="text-lg">Email: <a href="mailto:info@aachalresort.com" className="font-semibold hover:text-gray-300">info@aachalresort.com</a></p>
            <p className="text-lg">Address: Aachal Resort, Dreamland</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/accommodation" className="hover:text-gray-300">Accommodation</Link></li>
              <li><Link href="/dining" className="hover:text-gray-300">Dining</Link></li>
              <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-12">
          <p>&copy; 2024 Aachal Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
