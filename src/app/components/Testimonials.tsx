import { Star } from 'lucide-react';
import { testimonials } from '../data/siteContent';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

export function Testimonials() {
  const { reviews: googleReviews, isLoading } = useGoogleReviews();
  const reviewsToShow = googleReviews.length > 0 ? googleReviews : testimonials;

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Client Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from travelers who booked with Travel & Thrills
          </p>
          {isLoading && (
            <p className="text-sm text-gray-500 mt-3">Loading latest Google reviews...</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsToShow.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{item.text}</p>
              <p className="text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
