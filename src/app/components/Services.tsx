import { Bus, Hotel, Map, Plane, Shield, Ticket, Stamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/siteContent';

export function Services() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'tour-operators': Map,
    'car-coach-rental': Bus,
    'flight-booking': Plane,
    'railway-ticket-booking': Ticket,
    'passport-visa-services': Stamp,
    'travel-insurance-services': Shield,
    'hotel-booking': Hotel
  };

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? Map;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded mb-4" />
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                  View More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
