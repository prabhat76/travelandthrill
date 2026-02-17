import { Link, useParams } from 'react-router-dom';
import { packages } from '../data/siteContent';

export function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Package not found</h1>
          <Link to="/packages" className="text-blue-600 hover:text-blue-700">Back to packages</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <img src={pkg.image} alt={pkg.title} className="w-full h-72 object-cover rounded-lg mb-8" />
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{pkg.title}</h1>
        <div className="flex flex-wrap gap-3 mb-6 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded">{pkg.duration}</span>
          <span className="bg-gray-100 px-3 py-1 rounded">{pkg.people}</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Starting {pkg.price}</span>
        </div>
        <p className="text-gray-700 leading-7 mb-6">{pkg.details}</p>
        <h2 className="text-xl text-gray-900 mb-3">Highlights</h2>
        <ul className="space-y-2 mb-8">
          {pkg.highlights.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Link to="/packages" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">All Packages</Link>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white">Book / Enquire</Link>
        </div>
      </div>
    </section>
  );
}
