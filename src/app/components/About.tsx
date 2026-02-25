import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Rocket, Users, Mountain, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export function About() {
  const himalayasImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1495616810223-4d98c6e9c869?w=800&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop&q=80',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % himalayasImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + himalayasImages.length) % himalayasImages.length);
  };

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
          <div className="relative w-full h-72 rounded-lg overflow-hidden bg-gray-200">
            <ImageWithFallback
              src={himalayasImages[currentImageIndex]}
              alt="Himalayan landscape"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {himalayasImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-600 leading-7 space-y-3">
            <p>
              Travel & Thrills is a trusted organization in Darjeeling, West Bengal, that has the
              perfect solution for all your travel requirements. We are the best tourist and
              transport service provider in Darjeeling, West Bengal, and specialize in bespoke
              holiday packages.
            </p>
            <p>
              We strive to ensure our customers enjoy personalized service and superior quality in
              everything from our vehicles and tour management to hotel reservations and event
              management. We also offer flight booking, travel insurance, and passport & visa
              services.
            </p>
            <p>
              We ensure customer comfort and safety, prompt and professional service, and best
              value for our customers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Established in 2024</h3>
            <p className="text-gray-600 text-sm">A fast-growing local travel partner from Darjeeling</p>
          </div>

          <div className="text-center group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Group & Family Tours</h3>
            <p className="text-gray-600 text-sm">Custom itineraries for groups, couples, and families</p>
          </div>

          <div className="text-center group p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mountain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Core Himalayan Circuits</h3>
            <p className="text-gray-600 text-sm">Darjeeling, Sikkim, Bhutan, and Nepal specialists</p>
          </div>

          <div className="text-center group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Personalized Planning</h3>
            <p className="text-gray-600 text-sm">From stays to transport, every detail tailored for you</p>
          </div>
        </div>
      </div>
    </section>
  );
}
