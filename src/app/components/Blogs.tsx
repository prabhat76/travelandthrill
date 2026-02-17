import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { blogs } from '../data/siteContent';

export function Blogs() {
  return (
    <section id="blogs" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Latest Blogs & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore featured package stories and travel updates from Travel & Thrills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <ImageWithFallback src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <Link to={`/blogs/${blog.slug}`} className="text-blue-600 hover:text-blue-700">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
