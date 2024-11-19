import React from "react";

const ContactUs = () => {
  return (
    <div className="relative bg-gray-50 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-10">
        <picture>
          <img
            src="https://amilla.com/wp-content/themes/amilla/src/img/intro-bg.png"
            alt="Background Pattern"
            className="absolute right-0 top-0 w-1/3 h-1/2 object-cover opacity-80"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {/* Map Section */}
        <div className="w-full h-96 bg-gray-200 rounded-md shadow-md overflow-hidden z-30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090187!2d144.95373531531843!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e8d64cbd8d0!2sAmilla%20Maldives%20Resort!5e0!3m2!1sen!2s!4v1693310654374!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="absolute inset-0 z-10">
  <picture>
    <img
      src="https://amilla.com/wp-content/themes/amilla/src/img/recognition-bg.png"
      alt="Background Pattern"
      className="absolute -left-10 bottom-[-20px] w-1/3 h-1/2 object-cover opacity-80"
    />
  </picture>
</div>


        {/* Form Section */}
        <div className="bg-white rounded-md shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold text-customTeal mb-4">
            Submit a Query
          </h3>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-customTeal focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-customTeal focus:outline-none"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-customTeal focus:outline-none"
              />
            </div>

            {/* Preferred Dates Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Preferred Dates
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-customTeal focus:outline-none"
              />
            </div>

            {/* Query/Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Query/Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter your query or message"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-customTeal focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-customTeal text-white font-semibold py-3 rounded-md hover:shadow-md transition-all duration-300"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
