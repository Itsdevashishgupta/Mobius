import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks: string[] = ['Home', 'About', 'Services', 'Pricing', 'Blog', 'Contact'];

  return (
    <header className=" top-0 z-50">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-12 py-6">
        {/* Logo */}
        <div className=" text-whiteCustom flex justify-center items-center gap-2"> <img src={logo} alt="logo" className='h-8'/><span>MobiusEngine</span></div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-whiteCustom">
              {link}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-darkPrimary hover:text-primary lg:text-whiteCustom transition flex"
            >
              More <ChevronDown/>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 3</a>
              </div>
            )}
          </div>

        </nav>

          {/* Button */}
          <a
            href="#"
            className="ml-4 max-lg:hidden bg-whiteCustom text-darkPrimary px-5 py-2 rounded-full hover:bg-darkPrimary hover:text-whiteCustom transition"
          >
            Get Started
          </a>
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-whiteCustom">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="bg-white px-6 pb-6 lg:hidden shadow-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-darkPrimary hover:text-primary transition">
                {link}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-darkPrimary hover:text-primary transition"
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-lightBackground text-darkPrimary">Option 3</a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="mt-4 bg-primary text-whiteCustom text-center px-5 py-2 rounded-full hover:bg-darkPrimary transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      
    </header>
  );
};

export default Navbar;
