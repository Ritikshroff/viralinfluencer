import React, { useState } from 'react';
import ButtonContainer from '../ButtonContainer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';
import HighlightedSection from '../HighlightedSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://viralfluencerbackend.onrender.com/submit-form', formData);
      console.log('Response from server:', response.data);
      toast.success('You will Recive a call from our team soon');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting the form. Please try again.');
    }
  };
  if (isSubmitted) {
    return (
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Thank You for Reaching Out!
          </h2>
          <p className="text-gray-700 mt-2">
            We appreciate your interest and will get back to you shortly.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Response
          </button>
        </div>
      </section>
    );
  }
  return (
    <section id="contact_form" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Let's Grow Together
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Ready to amplify your brand's influence? Get in touch with us today.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                className="block text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="role">Role</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2" required value={formData.role}
              onChange={handleChange} name="role" id="role">
              <option value="value1">Influencer</option>
              <option value="value2">Brand</option>
              <option value="value3">Agency</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
              required
            />
          </div>
          <ButtonContainer type="submit" name="Let's Colaborate" />
        </form>
      </div>
    <HighlightedSection/>
    </section>
  );
};

export default ContactForm;