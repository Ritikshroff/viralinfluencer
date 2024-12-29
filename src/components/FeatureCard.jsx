import React from 'react';

const FeatureCard = ({ icon, title, description, stat }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl mb-4 text-blue-500">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {stat && <p className="text-blue-600 font-semibold text-lg">{stat}</p>}
  </div>
);

export default FeatureCard;
