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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://viralfluencerbackend.onrender.com/submit-form', formData);
      console.log('Response from server:', response.data);
      toast.success('You will Recive a call from our team soon');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting the form. Please try again.');
    } finally {
      setIsLoading(false); // Stop the spinner
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
          <ButtonContainer
            type="submit"
            name={isLoading ? "Submitting..." : "Start Your Journey →"}
            disabled={isLoading} // Disable the button while loading
          />
        </form>
      </div>
      <HighlightedSection />
    </section>
  );
};

export default ContactForm;



// about*************
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faStore, faBriefcase, faIdCard, faGlobe } from '@fortawesome/free-solid-svg-icons';

// const ContactForm = () => {
//     return (
//         <div className="bg-gray-50 font-['Inter']">
//             <nav className="bg-white shadow">
//                 <div className="max-w-8xl mx-auto px-4">
//                     <div className="flex justify-between h-16">
//                         <div className="flex items-center">
//                             <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8 w-auto" />
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <a href="#" className="text-gray-600 hover:text-custom">Help</a>
//                             <a href="#" className="text-gray-600 hover:text-custom">Contact</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <div className="mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Shop</h1>
//                     <p className="text-gray-600">Complete the form below to create your shop account</p>
//                 </div>

//                 <div className="bg-white rounded-lg shadow-sm p-8">
//                     <div className="mb-8">
//                         <div className="relative">
//                             <div className="flex items-center justify-between w-full">
//                                 <div className="flex items-center">
//                                     <div className="flex items-center justify-center w-8 h-8 bg-custom text-white rounded-full">1</div>
//                                     <span className="ml-2 font-medium text-custom">Business Info</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-600 rounded-full">2</div>
//                                     <span className="ml-2 font-medium text-gray-400">Contact</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-600 rounded-full">3</div>
//                                     <span className="ml-2 font-medium text-gray-400">Location</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-600 rounded-full">4</div>
//                                     <span className="ml-2 font-medium text-gray-400">Verification</span>
//                                 </div>
//                             </div>
//                             <div className="absolute top-4 w-full">
//                                 <div className="h-1 bg-gray-200">
//                                     <div className="h-1 bg-custom" style={{ width: '25%' }}></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="space-y-8">
//                         <div>
//                             <h2 className="text-xl font-semibold text-gray-900 mb-6">Business Information</h2>
//                             <div className="space-y-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             {/* <FontAwesomeIcon icon={faStore} className="text-gray-400" /> */}
//                                         </div>
//                                         <input type="text" className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom" placeholder="Enter shop name" />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             {/* <FontAwesomeIcon icon={faBriefcase} className="text-gray-400" /> */}
//                                         </div>
//                                         <select className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom appearance-none bg-none">
//                                             <option>Select business type</option>
//                                             <option>Retail Store</option>
//                                             <option>Restaurant</option>
//                                             <option>Service Provider</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Business Registration Number</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             {/* <FontAwesomeIcon icon={faIdCard} className="text-gray-400" /> */}
//                                         </div>
//                                         <input type="text" className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom" placeholder="Enter registration number" />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             {/* <FontAwesomeIcon icon={faGlobe} className="text-gray-400" /> */}
//                                         </div>
//                                         <input type="url" className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom" placeholder="Enter website URL" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="pt-6 border-t border-gray-200">
//                             <div className="flex justify-between">
//                                 <button type="button" className="!rounded-button px-6 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
//                                     Save Draft
//                                 </button>
//                                 <button type="button" className="!rounded-button px-6 py-2.5 bg-custom text-white hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
//                                     Continue
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             <footer className="bg-gray-50 mt-20">
//                 <div className="max-w-8xl mx-auto px-4 py-12">
//                     <div className="text-center text-gray-500 text-sm">
//                         © 2024 Shop Registration Portal. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default ContactForm;


// contact*****************
// import React from 'react';

// const ContactForm = () => {
//     return (
//         <div className="bg-gray-50 font-['Inter']">
//             <nav className="bg-white shadow-sm">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <div className="mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Shop Registration</h1>
//                     <p className="mt-2 text-gray-600">Complete the form below to register your shop</p>
//                 </div>

//                 <div className="bg-white shadow rounded-lg mb-8">
//                     <div className="px-8 pt-6">
//                         <div className="flex items-center justify-between mb-8">
//                             <div className="w-full">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between">
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 <i className="fas fa-store"></i>
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Business Info</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-custom text-white rounded-full flex items-center justify-center">
//                                                 <i className="fas fa-phone"></i>
//                                             </div>
//                                             <div className="text-sm mt-2 text-custom font-medium">Contact</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
//                                                 <i className="fas fa-map-marker-alt"></i>
//                                             </div>
//                                             <div className="text-sm mt-2 text-gray-500">Location</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
//                                                 <i className="fas fa-check"></i>
//                                             </div>
//                                             <div className="text-sm mt-2 text-gray-500">Verification</div>
//                                         </div>
//                                     </div>
//                                     <div className="absolute top-5 w-3/4 h-1 bg-gray-200 left-0 right-0 mx-auto">
//                                         <div className="w-2/3 h-full bg-custom"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="px-8 pb-8">
//                         <div className="space-y-8">
//                             <div>
//                                 <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
//                                 <div className="space-y-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person Name</label>
//                                         <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter full name" />
//                                     </div>
//                                     <div className="mt-6">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                                         <input type="email" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter email address" />
//                                     </div>
//                                     <div className="mt-6">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                                         <input type=" tel" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter phone number" />
//                                     </div>
//                                     <div className="mt-6">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Alternative Phone Number (Optional)</label>
//                                         <input type="tel" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter alternative phone number" />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="pt-6">
//                                 <div className="flex items-center">
//                                     <input type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded-button" />
//                                     <label className="ml-2 block text-sm text-gray-900">
//                                         I agree to the <a href="#" className="text-custom hover:text-custom-600">Terms and Conditions</a> and <a href="#" className="text-custom hover:text-custom-600">Privacy Policy</a>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-between">
//                             <button type="button" className="text-gray-600 hover:text-gray-900">
//                                 Save as Draft
//                             </button>
//                             <div className="flex space-x-4">
//                                 <button type="button" className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button">
//                                     Back
//                                 </button>
//                                 <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom-600 !rounded-button">
//                                     Next Step
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             <footer className="bg-white">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-8 text-center text-sm text-gray-500">
//                         © 2024 Shop Registration. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default ContactForm;



// ?location************
// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faStore, faPhone, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

// const ShopRegistration = () => {
//     return (
//         <div className="bg-gray-50 font-['Inter']">
//             <nav className="bg-white shadow-sm">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <div className="mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Shop Registration</h1>
//                     <p className="mt-2 text-gray-600">Complete the form below to register your shop</p>
//                 </div>

//                 <div className="bg-white shadow rounded-lg mb-8">
//                     <div className="px-8 pt-6">
//                         <div className="flex items-center justify-between mb-8">
//                             <div className="w-full">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between">
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faStore} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Business Info</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-custom text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faPhone} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-custom font-medium">Contact</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-custom text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-custom font-medium">Location</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faCheck} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-gray-500">Verification</div>
//                                         </div>
//                                     </div>
//                                     <div className="absolute top-5 w-3/4 h-1 bg-gray-200 left-0 right-0 mx-auto">
//                                         <div className="w-11/12 h-full bg-custom"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="px-8 pb-8">
//                         <div className="space-y-8">
//                             <div>
//                                 <h3 className="text-lg font-medium text-gray-900 mb-6">Location Information</h3>
//                                 <div className="space-y-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
//                                         <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter street address" />
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                                             <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter city" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
//                                             <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter state" />
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
//                                             <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter postal code" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                                             <select className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button">
//                                                 <option value="">Select country</option>
//                                                 <option value="US">United States</option>
//                                                 <option value="CA">Canada</option>
//                                                 <option value="UK">United Kingdom</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Additional Address Information</label>
//                                         <textarea className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" rows="3" placeholder="Enter any additional address information"></textarea>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="pt-6">
//                                 <div className="flex items-center">
//                                     <input type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded-button" />
//                                     <label className="ml-2 block text-sm text-gray-900">
//                                         I agree to the <a href="#" className="text-custom hover:text-custom-600">Terms and Conditions</a> and <a href="#" className="text-custom hover:text-custom-600">Privacy Policy</a>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-between">
//                             <button type="button" className="text-gray-600 hover:text-gray-900">
//                                 Save as Draft
//                             </button>
//                             <div className="flex space-x-4">
//                                 <button type="button" className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button">
//                                     Back
//                                 </button>
//                                 <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom-600 !rounded-button">
//                                     Next Step
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             <footer className="bg-white">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-8 text-center text-sm text-gray-500">
//                         © 2024 Shop Registration. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default ShopRegistration;

// ?varification*************
// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faStore, faPhone, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

// const ContactForm = () => {
//     return (
//         <div className="bg-gray-50 font-['Inter']">
//             <nav className="bg-white shadow-sm">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <div className="mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Shop Registration</h1>
//                     <p className="mt-2 text-gray-600">Complete the form below to register your shop</p>
//                 </div>

//                 <div className="bg-white shadow rounded-lg mb-8">
//                     <div className="px-8 pt-6">
//                         <div className="flex items-center justify-between mb-8">
//                             <div className="w-full">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between">
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faStore} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Business Info</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faPhone} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Contact</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Location</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-custom text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faCheck} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-custom font-medium">Verification</div>
//                                         </div>
//                                     </div>
//                                     <div className="absolute top-5 w-3/4 h-1 bg-gray-200 left-0 right-0 mx-auto">
//                                         <div className="w-full h-full bg-custom"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="px-8 pb-8">
//                         <div className="space-y-8">
//                             <div>
//                                 <h3 className="text-lg font-medium text-gray-900 mb-6">Verification</h3>
//                                 <div className="space-y-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Business License Number</label>
//                                         <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter business license number" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID Number</label>
//                                         <input type="text" className="w-full border-gray-300 focus:border-custom focus:ring-custom !rounded-button" placeholder="Enter tax ID number" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Upload Business License</label>
//                                         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                                             <div className="space-y-1 text-center">
//                                                 <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                                                     <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                 </svg>
//                                                 <div className="flex text-sm text-gray-600">
//                                                     <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-custom hover:text-custom-600 focus-within:outline-none">
//                                                         <span>Upload a file</span>
//                                                         <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                                                     </label>
//                                                     <p className="pl-1">or drag and drop</p>
//                                                 </div>
//                                                 <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="pt-6">
//                                 <div className="flex items-center">
//                                     <input type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded-button" />
//                                     <label className="ml-2 block text-sm text-gray-900">
//                                         I agree to the <a href="#" className="text-custom hover:text-custom-600">Terms and Conditions</a> and <a href="#" className="text-custom hover:text-custom-600">Privacy Policy</a>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-between">
//                             <button type="button" className="text-gray-600 hover:text-gray-900">
//                                 Save as Draft
//                             </button>
//                             <div className="flex space-x-4">
//                                 <button type="button" className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button">
//                                     Back
//                                 </button>
//                                 <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom-600 !rounded-button">
//                                     Next Step
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             <footer className="bg-white">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-8 text-center text-sm text-gray-500">
//                         © 2024 Shop Registration. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default ContactForm;

// after Varification *********

// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faStore, faPhone, faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

// const ContactForm = () => {
//     return (
//         <div className="bg-gray-50 font-['Inter']">
//             <nav className="bg-white shadow-sm">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <div className="mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Shop Registration</h1>
//                     <p className="mt-2 text-gray-600">Complete the form below to register your shop</p>
//                 </div>

//                 <div className="bg-white shadow rounded-lg mb-8">
//                     <div className="px-8 pt-6">
//                         <div className="flex items-center justify-between mb-8">
//                             <div className="w-full">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between">
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faStore} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Business Info</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faPhone} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Contact</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Location</div>
//                                         </div>
//                                         <div className="w-1/4 text-center">
//                                             <div className="w-10 h-10 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center">
//                                                 {/* <FontAwesomeIcon icon={faCheck} /> */}
//                                             </div>
//                                             <div className="text-sm mt-2 text-green-500 font-medium">Verification</div>
//                                         </div>
//                                     </div>
//                                     <div className="absolute top-5 w-3/4 h-1 bg-gray-200 left-0 right-0 mx-auto">
//                                         <div className="w-full h-full bg-green-500"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="px-8 pb-8">
//                         <div className="space-y-8">
//                             <div>
//                                 <h3 className="text-lg font-medium text-gray-900 mb-6">Registration Complete</h3>
//                                 <div className="text-center py-8">
//                                     <div className="w-16 h-16 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
//                                         {/* <FontAwesomeIcon icon={faCheck} className="text-2xl" /> */}
//                                     </div>
//                                     <p className="text-xl font-medium text-gray-900 mb-2">Thank you for registering!</p>
//                                     <p className="text-gray-600">Your shop registration has been submitted successfully.</p>
//                                 </div>
//                             </div>

//                             <div className="pt-6">
//                                 <div className="flex items-center">
//                                     <input type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded-button" />
//                                     <label className="ml-2 block text-sm text-gray-900">
//                                         I agree to the <a href="#" className="text-custom hover:text-custom-600">Terms and Conditions</a> and <a href="#" className="text-custom hover:text-custom-600">Privacy Policy</a>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-between">
//                             <div className="flex justify-center">
//                                 <a href="/" className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom-600 !rounded-button">
//                                     Return to Homepage
//                                 </a>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             <footer className="bg-white">
//                 <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-8 text-center text-sm text-gray-500">
//                         © 2024 Shop Registration. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default ContactForm;