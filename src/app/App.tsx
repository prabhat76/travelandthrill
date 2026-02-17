import { Navbar } from './components/Navbar';
import { TourPackages } from './components/TourPackages';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Blogs } from './components/Blogs';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { PopularDestinations } from './components/PopularDestinations';
import { DestinationDetailPage } from './pages/DestinationDetailPage';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div className="pt-16"><About /></div>} />
        <Route path="/services" element={<div className="pt-16"><Services /></div>} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/destinations" element={<div className="pt-16"><PopularDestinations /></div>} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/packages" element={<div className="pt-16"><TourPackages /></div>} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="/blogs" element={<div className="pt-16"><Blogs /></div>} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/testimonials" element={<div className="pt-16"><Testimonials /></div>} />
        <Route path="/contact" element={<div className="pt-16"><Contact /></div>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
