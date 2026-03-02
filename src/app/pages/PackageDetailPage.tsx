import { Link, useParams } from 'react-router-dom';
import { packages } from '../data/siteContent';
import { Download } from 'lucide-react';

export function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = packages.find((item) => item.slug === slug);

  const downloadItinerary = () => {
    const content = `${pkg?.title}\n${'='.repeat(pkg?.title.length || 0)}\n\n` +
      `Duration: ${pkg?.duration}\n` +
      `Price: ${pkg?.price}\n` +
      `Minimum Group: ${pkg?.people}\n\n` +
      `HIGHLIGHTS:\n${pkg?.highlights.map(h => `• ${h}`).join('\n')}\n\n` +
      `${pkg?.details}\n\n` +
      `Contact: official@travelandthrills.com`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pkg?.slug}-itinerary.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!pkg) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Package not found</h1>
          <Link to="/packages" className="text-blue-600 hover:text-blue-700">Back to packages</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">NEPAL</h2>
        </div>
        <img src={pkg.image} alt={pkg.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{pkg.title}</h1>
        <div className="flex flex-wrap gap-3 mb-6 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded">{pkg.duration}</span>
          <span className="bg-gray-100 px-3 py-1 rounded">{pkg.people}</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Starting {pkg.price}</span>
        </div>
        
        <h2 className="text-2xl text-gray-900 mb-4">Highlights</h2>
        <ul className="space-y-2 mb-8">
          {pkg.highlights.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="prose prose-gray max-w-none mb-8">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">{pkg.details}</div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">Back to Home</Link>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white">Book / Enquire</Link>
          <button 
            onClick={downloadItinerary}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-white flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Itinerary
          </button>
          {pkg.sourceUrl ? (
            <a href={pkg.sourceUrl} target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">
              Original Source
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
