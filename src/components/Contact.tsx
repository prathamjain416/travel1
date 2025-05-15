import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      const mailtoLink = `mailto:info6.travelaura@gmail.com?subject=Travel Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-32 px-8 scroll-section">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-12">START YOUR JOURNEY</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Let us craft your perfect escape. Our travel experts are ready to 
          create your bespoke experience.
        </p>
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} py-4 focus:outline-none focus:border-gray-900`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2 text-left">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} py-4 focus:outline-none focus:border-gray-900`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 text-left">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dream journey"
              rows={4}
              className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} py-4 focus:outline-none focus:border-gray-900`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2 text-left">{errors.message}</p>
            )}
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;