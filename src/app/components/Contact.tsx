import { FormEvent, useState } from 'react';
import { Mail, MapPin, User, Instagram } from 'lucide-react';

type EnquiryFormData = {
  name: string;
  email: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  enquiry: string;
};

const initialFormData: EnquiryFormData = {
  name: '',
  email: '',
  country: '',
  state: '',
  city: '',
  phone: '',
  enquiry: '',
};

export function Contact() {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (key: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const sendViaMailTo = () => {
    const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Country: ${formData.country}`,
        `State: ${formData.state}`,
        `City: ${formData.city}`,
        `Phone: ${formData.phone}`,
        '',
        'Enquiry Details:',
        formData.enquiry,
      ].join('\n')
    );

    window.location.href = `mailto:planmytraveltrek24@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      sendViaMailTo();
      setSubmitMessage('Your mail app has been opened. Please send the drafted enquiry email.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            phone: formData.phone,
            enquiry: formData.enquiry,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry email.');
      }

      setSubmitMessage('Enquiry submitted successfully. We will contact you shortly.');
      setFormData(initialFormData);
    } catch {
      setSubmitMessage('Unable to send enquiry right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.name}
                  onChange={(event) => handleInputChange('name', event.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.email}
                  onChange={(event) => handleInputChange('email', event.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Select Country *"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.country}
                  onChange={(event) => handleInputChange('country', event.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Select State *"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.state}
                  onChange={(event) => handleInputChange('state', event.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.city}
                  onChange={(event) => handleInputChange('city', event.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone / Mobile *"
                  className="px-4 py-3 border border-gray-300 rounded"
                  value={formData.phone}
                  onChange={(event) => handleInputChange('phone', event.target.value)}
                  required
                />
                <textarea
                  placeholder="Enquiry Details *"
                  rows={4}
                  className="md:col-span-2 px-4 py-3 border border-gray-300 rounded"
                  value={formData.enquiry}
                  onChange={(event) => handleInputChange('enquiry', event.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
                {submitMessage && (
                  <p className="md:col-span-2 text-sm text-gray-600">{submitMessage}</p>
                )}
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
