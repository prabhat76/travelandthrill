import { Link, useParams } from 'react-router-dom';
import { destinations } from '../data/siteContent';

export function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Destination not found</h1>
          <Link to="/destinations" className="text-blue-600 hover:text-blue-700">Back to destinations</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <img src={destination.image} alt={destination.name} className="w-full h-72 object-cover rounded-lg mb-8" />
        <p className="text-sm text-blue-600 mb-2">{destination.country}</p>
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{destination.name}</h1>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <p className="text-gray-700 leading-7 mb-6">{destination.details}</p>

        <h2 className="text-xl text-gray-900 mb-3">Highlights</h2>
        <ul className="space-y-2 mb-8">
          {destination.highlights.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link to="/destinations" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">All Destinations</Link>
          <Link to="/packages" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white">View Packages</Link>
        </div>
      </div>
    </section>
  );
}
