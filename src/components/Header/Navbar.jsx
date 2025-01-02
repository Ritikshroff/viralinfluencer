import React from 'react';

const Navbar = ({ isOpen, setIsOpen }) => (
  <nav className="bg-white sticky w-full z-10 top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-[#2269a1]">
          Viralfluencer
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/Services" label="Services" />
          <NavLink href="/Influencer" label="Influencers" />
          <NavLink href="#case_studies" label="Case Studies" />
          <NavLink href="/submit-form" label="Contact Us" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

{isOpen && (
        <div className="md:hidden">
          <a
            href="/"
            className="block px-4 py-2 text-[#555555] hover:text-[#0047FF] transition duration-300"
          >
            Home
          </a>
          <a
            href="/Services"
            className="block px-4 py-2 text-[#555555] hover:text-[#0047FF] transition duration-300"
          >
            Services
          </a>
          <a
            href="/Influencer"
            className="block px-4 py-2 text-[#555555] hover:text-[#0047FF] transition duration-300"
          >
            Influencers
          </a>
          <a
            href="#case_studies"
            className="block px-4 py-2 text-[#555555] hover:text-[#0047FF] transition duration-300"
          >
            Case Studies
          </a>
          <a
            href="/submit-form"
            className="block px-4 py-2 text-[#555555] hover:text-[#0047FF] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      )}
  </nav>
);

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
  >
    {label}
  </a>
);

export default Navbar;
