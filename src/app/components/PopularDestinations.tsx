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
            <Link to={`/destinations/${destination.slug}`} key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer block">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                  {destination.country}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600">{destination.description}</p>
                <span className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">
                  Explore Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
