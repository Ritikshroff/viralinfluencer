import React from 'react';

const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
    <p className="text-gray-600 italic">"{feedback}"</p>
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
  </div>
);

export default TestimonialCard;