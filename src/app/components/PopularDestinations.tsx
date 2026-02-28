import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/siteContent';

export function PopularDestinations() {
  return (
    <section id="destinations" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore destination circuits featured in our Darjeeling, Sikkim, Bhutan, and Nepal packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link 
              to={`/destinations/${destination.slug}`} 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer block transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {destination.country}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{destination.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-medium group-hover:gap-2 transition-all">
                  Explore Now 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
