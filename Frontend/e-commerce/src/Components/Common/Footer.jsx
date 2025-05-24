import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFF9F3] text-black mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-[#EB6D20]">E-commerce</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your trusted marketplace for everything.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-[#EB6D20] cursor-pointer" />
            <FaInstagram className="hover:text-[#EB6D20] cursor-pointer" />
            <FaTwitter className="hover:text-[#EB6D20] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#EB6D20] cursor-pointer" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-md font-semibold mb-3">Categories</h3>
          <ul className="text-sm space-y-2">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Books</li>
            <li>Home & Kitchen</li>
            <li>Grocery</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold mb-3">Support</h3>
          <ul className="text-sm space-y-2">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-md font-semibold mb-3">Company</h3>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} E-commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
