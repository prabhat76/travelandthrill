import { Mail, MapPin, User, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with Travel & Thrills for customized package planning and booking support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl mb-5 text-gray-900">Quick Enquiry</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" className="px-4 py-3 border border-gray-300 rounded" />
                <input type="email" placeholder="Email *" className="px-4 py-3 border border-gray-300 rounded" />
                <input type="text" placeholder="Select Country *" className="px-4 py-3 border border-gray-300 rounded" />
                <input type="text" placeholder="Select State *" className="px-4 py-3 border border-gray-300 rounded" />
                <input type="text" placeholder="City" className="px-4 py-3 border border-gray-300 rounded" />
                <input type="tel" placeholder="Phone / Mobile *" className="px-4 py-3 border border-gray-300 rounded" />
                <textarea placeholder="Enquiry Details *" rows={4} className="md:col-span-2 px-4 py-3 border border-gray-300 rounded" />
                <button type="button" className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition">
                  Submit Enquiry
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Contact Person</h4>
                    <p className="text-gray-600">Rupesh Tamang</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Email</h4>
                    <p className="text-gray-600">planmytraveltrek24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      6th Mile Bazar Darjeeling, Tukdah, Peshok Road,<br />
                      Darjeeling, West Bengal, India - 734222
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Instagram</h4>
                    <a
                      href="https://www.instagram.com/tra.velnthrills"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      @tra.velnthrills
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="mb-2 text-gray-900">Need Immediate Assistance?</h4>
              <p className="text-gray-600">Call Us: View Mobile Number (as listed on official website)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
