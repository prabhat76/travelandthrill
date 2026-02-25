import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

export function Blogs() {
  const { reviews: googleReviews, isLoading } = useGoogleReviews();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Google Street View images of Travel & Thrills location
  const locationImages = [
    'https://lh3.googleusercontent.com/p/AF1QipP35SWhnjBhIIbvoL9sRgeKZOKjPXfL-sjJ7v4t=w800-h600-k-no',
    'https://images.unsplash.com/photo-1551919869-922a5b1aa2f3?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1418985991508-e47386173333?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1514632176061-16312c592c4b?w=800&h=600&fit=crop&q=80',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % locationImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + locationImages.length) % locationImages.length);
  };

  return (
    <section id="blogs" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Latest Reviews & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from travelers on Google Maps who booked with Travel & Thrills
          </p>
          {isLoading && (
            <p className="text-sm text-gray-500 mt-3">Loading latest reviews...</p>
          )}
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Visit Our Location</h3>
          <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-200 group">
            <img
              src={locationImages[currentImageIndex]}
              alt="Travel & Thrills location"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {locationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Guest Reviews</h3>
          {isLoading ? (
            <div className="text-center text-gray-500 py-12">Fetching reviews from Google...</div>
          ) : googleReviews.length === 0 ? (
            <div className="text-center text-gray-500 py-12">Reviews will appear here soon.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {googleReviews.map((review, index) => (
                <article key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition bg-white">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{review.text}</p>
                  <div>
                    <p className="text-gray-900 font-medium">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
