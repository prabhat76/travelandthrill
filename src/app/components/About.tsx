import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Globe, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">About Travel & Thrills Holidays</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Established in early 2024, Travel & Thrills is your trusted partner for unforgettable
            journeys. We specialize in curated tours across Darjeeling, Sikkim, Bhutan, and Nepal,
            with personalized plans for both groups and individual adventurers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <ImageWithFallback
            src="https://catalog.wlimg.com/about-image/about-12.jpg"
            alt="Travel & Thrills"
            className="w-full h-72 object-cover rounded-lg"
          />
          <p className="text-gray-600 leading-7">
            We strive to ensure customer comfort and safety with prompt, professional service.
            From hotel reservations and transport integration to itinerary suggestions and booking
            confirmations, our team handles every phase of travel with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Established in 2024</h3>
            <p className="text-gray-600">A fast-growing local travel partner from Darjeeling</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Group & Family Tours</h3>
            <p className="text-gray-600">Custom itineraries for groups, couples, and families</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Core Himalayan Circuits</h3>
            <p className="text-gray-600">Darjeeling, Sikkim, Bhutan, and Nepal specialists</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Personalized Planning</h3>
            <p className="text-gray-600">From stays to transport, every detail tailored for you</p>
          </div>
        </div>
      </div>
    </section>
  );
}
