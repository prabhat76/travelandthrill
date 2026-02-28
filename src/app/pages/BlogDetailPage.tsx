import { Link, useParams } from 'react-router-dom';
import { useFirebaseBlogs } from '../hooks/useFirebaseBlogs';

export function BlogDetailPage() {
  const { slug } = useParams();
  const { blogs, loading } = useFirebaseBlogs();
  const blog = blogs.find((item) => item.slug === slug);

  if (loading) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Blog not found</h1>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-700">Back to blogs</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-lg mb-8" />
        <p className="text-sm text-blue-600 mb-2">{blog.date}</p>
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-gray-700 leading-7 mb-8">{blog.content}</p>
        
        {/* Embedded Google Maps and Reviews iframes */}
        {import.meta.env.VITE_GOOGLE_PLACES_API_KEY && (
          <div className="space-y-8 mb-12">
            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Travel & Thrills map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={import.meta.env.VITE_GOOGLE_PLACE_ID 
                    ? `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=place_id:${import.meta.env.VITE_GOOGLE_PLACE_ID}`
                    : `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=27.052689,88.3527522&zoom=17`}
                />
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Google Reviews</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Travel & Thrills reviews"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={import.meta.env.VITE_GOOGLE_PLACE_ID 
                    ? `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=place_id:${import.meta.env.VITE_GOOGLE_PLACE_ID}&zoom=15`
                    : `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=27.052689,88.3527522&zoom=15`}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Link to="/blogs" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">All Blogs</Link>
          <Link to="/packages" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white">View Packages</Link>
          {blog.sourceUrl ? (
            <a href={blog.sourceUrl} target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900">
              Original Source
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
