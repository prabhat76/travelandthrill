import { Plane, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl">Travel & Thrills</span>
            </div>
            <p className="text-gray-400 mb-4">
              Trusted travel and transport partner in Darjeeling, specializing in bespoke Himalayan holidays.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tra.velnthrills"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Our Services</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-white transition">Tour Packages</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/destinations/gangtok" className="hover:text-white transition">Gangtok</Link></li>
              <li><Link to="/destinations/lachung" className="hover:text-white transition">Lachung</Link></li>
              <li><Link to="/destinations/yumthang-valley" className="hover:text-white transition">Yumthang Valley</Link></li>
              <li><Link to="/destinations/darjeeling" className="hover:text-white transition">Darjeeling</Link></li>
              <li><Link to="/destinations/kathmandu" className="hover:text-white transition">Kathmandu</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Rupesh Tamang</p>
              <p>planmytraveltrek24@gmail.com</p>
              <p>6th Mile Bazar, Tukdah, Peshok Road</p>
              <p>Darjeeling, West Bengal - 734222</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Travel & Thrills Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
