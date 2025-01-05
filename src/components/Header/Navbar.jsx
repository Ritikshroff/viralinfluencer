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
          {/* <NavLink href="/signup" label="Signup" /> */}
          {/* <NavLink href="/login" label="Login" /> */}
          <ButtonContainer href="/signup" name='Signup' />
          <ButtonContainer href="/login" name='Login' />
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
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Home
        </a>
        <a
          href="/Services"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Services
        </a>
        <a
          href="/Influencer"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Influencers
        </a>
        <a
          href="#case_studies"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Case Studies
        </a>
        <a
          href="/submit-form"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Contact Us
        </a>
        
        {/* <a
          href="/signup"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Signup
        </a> */}
        {/* <a
          href="/login"
          className="block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300"
        >
          Login
        </a> */}

        <a href="/signup" className='block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300'><button className="mt-4 md:mt-0 px-4 py-2 text-white bg-[#2269a1] rounded-md">Signup</button></a>
        <a href="/login" className='block px-4 py-2 text-[#555555] hover:text-[#2e70a1] transition duration-300'><button className="mt-4 md:mt-0 px-4 py-2 text-white bg-[#2269a1] rounded-md">Login</button></a>
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

const ButtonContainer = ({ href, name = "Start Your Journey →" }) => (
  <a
    href={href}
    className='justify-center flex flex-col md:flex-row items-center rounded-md'>
    <button className="mt-4 md:mt-0 px-4 py-2 text-white bg-[#2269a1] rounded-md">{name}</button>
  </a>
);


export default Navbar;
