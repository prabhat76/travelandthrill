import { Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/siteContent';

export function TourPackages() {
  return (
    <section id="packages" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Tour Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked itineraries curated from our latest Darjeeling, Sikkim, and Bhutan offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{pkg.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.people}</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl text-blue-600">{pkg.price}</p>
                  </div>
                  <Link to={`/packages/${pkg.slug}`} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
