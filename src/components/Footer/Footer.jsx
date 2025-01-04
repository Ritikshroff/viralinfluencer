import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Contact, Call, Visit */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between border-b border-gray-700 pb-10">
        <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-2">Email Us</h4>
          <p className="text-gray-400">viralfluencer@gmail.com</p>
        </div>
        <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-2">Call Us</h4>
          <p className="text-gray-400">+91 9555325902</p>
        </div>
        <div className="w-full sm:w-1/3 text-center">
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          <p className="text-gray-400">Dundahera Gurugram</p>
          <p className="text-gray-400">Near Cyber City, 122016</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center p-6">
        <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-gray-400 mb-4">Stay updated with the latest trends in influencer marketing</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-sm p-2 rounded-l-md text-gray-900"
          />
          <button
            type="submit"
            className="bg-[#2269a1] hover:bg-blue-600 text-white px-4 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Main */}
      <div className="container m-auto p-6 lg:px-20 flex flex-wrap justify-start mt-6">
        {/* Company Info */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-bold mb-3">Viralfluencer</h3>
          <p className="text-gray-400 text-sm">
            Connecting brands with influential voices to create <br />impactful marketing campaigns. <br />
          </p>
          <div className="flex mt-4">
            <a href="#" className="text-blue-400 hover:text-white mx-2">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-black-400 hover:text-white mx-2">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-red-400 hover:text-white mx-2">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-blue-400 hover:text-white mx-2">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1 hover:text-white"><a href="#">About Us</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Services</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Case Studies</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-lg font-bold mb-3">Legal</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1 hover:text-white"><a href="#">Privacy Policy</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Terms of Service</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Cookie Policy</a></li>
            <li className="mb-1 hover:text-white"><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        <p>&copy; {new Date().getFullYear()} Viralfluencer. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-white mx-2">Privacy</a>
          <a href="#" className="hover:text-white mx-2">Terms</a>
          <a href="#" className="hover:text-white mx-2">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
