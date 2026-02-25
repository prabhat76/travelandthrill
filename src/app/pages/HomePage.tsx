import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { PopularDestinations } from '../components/PopularDestinations';
import { TourPackages } from '../components/TourPackages';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PopularDestinations />
      <TourPackages />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
}
