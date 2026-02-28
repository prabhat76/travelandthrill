import { Link, useParams } from 'react-router-dom';
import { services } from '../data/siteContent';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Service not found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">Back to services</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-lg mb-8" />
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{service.title}</h1>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-gray-700 leading-7 mb-8">{service.details}</p>
        <div className="flex gap-4">
          <Link to="/services" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">All Services</Link>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white">Enquire Now</Link>
        </div>
      </div>
    </section>
  );
}
