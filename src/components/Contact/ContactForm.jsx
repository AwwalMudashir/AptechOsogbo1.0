import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://yourdomain.com/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('Failed to send message. Try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className='bg-gray-100 pb-20'>
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[600px] mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Get in Touch</h2>

      {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <label className="text-gray-600 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="text-gray-600 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="text-gray-600 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FFB900] text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition-all duration-300"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
