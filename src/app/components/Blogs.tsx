import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../data/siteContent';

export function Blogs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Real Google Maps photos of Travel & Thrills location
  const locationImages = [
    'https://lh3.googleusercontent.com/p/AF1QipMems_FHnRQZrkJbJwSnXBW6SGNyu2xdCL3Ja_j=w1200-h900-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipN8b_rPfKxW9S8FkUH_35DGaPcIwq5KT2nQ7Q4V=w1200-h1600-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMgXz2omgx94-cGpJxP0a85gfi71RynFkulKhC1=w1200-h900-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMLHEFG1jrjE0-E4rgKCHjB1ivqW3lf3IWIa3Y6=w1200-h2133-k-no',
  ];

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => (prev + 1) % locationImages.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => (prev - 1 + locationImages.length) % locationImages.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToImage = (index: number) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setIsTransitioning(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Handle touch gestures for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="blogs" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Location & Client Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office, explore our location on Google Maps, and read authentic reviews from travelers
          </p>
        </div>

        {/* Instagram-style Gallery Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Visit Our Location</h3>
          <div 
            className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-900 group shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image Stack with Fade Transition */}
            {locationImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Travel & Thrills location ${index + 1}`}
                  className="w-full h-full object-contain bg-black"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Navigation Arrows - Instagram Style */}
            {currentImageIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-lg z-20 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>
            )}
            
            {currentImageIndex < locationImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-lg z-20 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            )}

            {/* Image Counter - Instagram Style */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-20 backdrop-blur-sm">
              {currentImageIndex + 1} / {locationImages.length}
            </div>

            {/* Dot Indicators - Instagram Style */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {locationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex 
                      ? 'w-8 h-2 bg-white' 
                      : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-4">{item.text}</p>
                <p className="text-gray-900 font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
