import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  // Google Drive video ID: 1EXsdqWH8QbeqrR1sH-M0iD2iPCT1HNAF
  const videoId = '1EXsdqWH8QbeqrR1sH-M0iD2iPCT1HNAF';
  const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-4">Explore Darjeeling, Sikkim, Bhutan & Nepal</h1>
        <p className="text-lg md:text-xl mb-8">
          Travel & Thrills creates personalized Himalayan journeys with trusted local support,
          curated stays, and seamless transport.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/packages"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition flex items-center gap-2"
          >
            View Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="bg-white/90 hover:bg-white text-gray-900 px-8 py-3 rounded transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}