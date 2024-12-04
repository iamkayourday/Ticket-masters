import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close menu after clicking an item
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/10 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Ticket commander</div>

        {/* Menu Button (Visible on Mobile Only) */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className={`h-6 w-6 transition-transform ease-in-out duration-300 ${isOpen ? 'rotate-90' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed inset-x-0 top-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center gap-8 transition-transform transform ease-in-out duration-300 ${
            isOpen ? 'translate-y-24' : '-translate-y-full'
          } lg:static lg:flex-row lg:bg-transparent lg:translate-y-0 lg:text-black lg:gap-4`}
        >
          <Link
            to="/"
            className="cursor-pointer text-2xl lg:text-base hover:text-yellow-500 transition-colors text-white"
            onClick={handleMenuItemClick}
          >
            Home
          </Link>
          <Link
            to="/event"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors text-white"
            onClick={handleMenuItemClick}
          >
            Event
          </Link>
          <Link
            to="/about"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors text-white"
            onClick={handleMenuItemClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors text-white"
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
