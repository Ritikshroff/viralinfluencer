import React from 'react';
import { FaCheck } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, stat, points }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl mb-4 text-blue-500">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 mb-4">{description}</p>
    {stat && <p className="text-blue-600 font-semibold text-lg">{stat}</p>}
    <br />
    <ul className="text-left list-none">
    {points && points.map((point, index) => (
        <li key={index} className="flex items-center mb-2">
          <FaCheck className="text-green-500 mr-2" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;
