import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const logoUrl = '/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Travel & Thrills logo"
              className="h-9 md:h-10 w-auto max-w-[130px] md:max-w-[170px] object-contain"
            />
            <span className="font-bold text-xl text-gray-900">Travel & Thrills Holidays</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-blue-600 transition">Destinations</Link>
            <Link to="/packages" className="text-gray-700 hover:text-blue-600 transition">Packages</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition">Reviews</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Home</Link>
              <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">About</Link>
              <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Services</Link>
              <Link to="/destinations" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Destinations</Link>
              <Link to="/packages" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Packages</Link>
              <Link to="/testimonials" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Reviews</Link>
              <Link to="/blogs" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Blogs</Link>
              <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition text-left">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
