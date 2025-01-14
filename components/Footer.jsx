import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/jaldurga-home-2.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Footer Content */}
      <div className="relative z-10 text-white px-6 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Image src="/jaldurga-logo-bg.jpg" alt="Logo" className="w-32" height={1000} width={1000} />
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience luxury and tranquility like never before. Join us at Jaldurg Resort for an unforgettable getaway.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-red-500 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Menu Section 1 */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Accommodations</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Dining</a>
              </li>
            </ul>
          </div>

          {/* Menu Section 2 */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Experience</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Spa & Wellness</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Activities</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Excursions</a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-customTeal transition">Events</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-100">+91 76664 17493</li>
              <li className="text-gray-100">+91 99212 41370</li>
              <li className="text-gray-100">info@jaldurg.com</li>
              <li className="text-gray-100">Jaldurg Agro Resort,<br/>Paud-Lonavala road, Mulashi, Pune-412108</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-gray-100 text-sm text-center">
          © {new Date().getFullYear()} Jaldurg Resorts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
