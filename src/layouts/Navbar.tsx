import { Menu, Search } from 'lucide-react'
import React, { useState } from 'react'
import YourLogo from '../components/YourLogo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-samsung-dark-gray shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <YourLogo />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-samsung-blue">
            Products
          </a>
          <a href="#" className="hover:text-samsung-blue">
            Support
          </a>
          <a href="#" className="hover:text-samsung-blue">
            About
          </a>
          <a href="#" className="hover:text-samsung-blue">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring-samsung-blue focus:border-samsung-blue"
          />
          <button className="text-gray-500 dark:text-gray-300 hover:text-samsung-blue">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 p-4">
          <a
            href="#"
            className="block py-2 hover:text-samsung-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#"
            className="block py-2 hover:text-samsung-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </a>
          <a
            href="#"
            className="block py-2 hover:text-samsung-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 hover:text-samsung-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
