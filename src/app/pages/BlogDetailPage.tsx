import { Link, useParams } from 'react-router-dom';
import { blogs } from '../data/siteContent';

export function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

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
